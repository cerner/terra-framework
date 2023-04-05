"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const child_process_1 = __importDefault(require("child_process"));
const events_1 = require("events");
const logger_1 = __importDefault(require("@wdio/logger"));
const transformStream_1 = __importDefault(require("./transformStream"));
const replQueue_1 = __importDefault(require("./replQueue"));
const stdStream_1 = __importDefault(require("./stdStream"));
const log = (0, logger_1.default)('@wdio/local-runner');
const replQueue = new replQueue_1.default();
const stdOutStream = new stdStream_1.default();
const stdErrStream = new stdStream_1.default();
stdOutStream.pipe(process.stdout);
stdErrStream.pipe(process.stderr);
/**
 * WorkerInstance
 * responsible for spawning a sub process to run the framework in and handle its
 * session lifetime.
 */
class WorkerInstance extends events_1.EventEmitter {
    /**
     * assigns paramters to scope of instance
     * @param  {object}   config      parsed configuration object
     * @param  {string}   cid         capability id (e.g. 0-1)
     * @param  {string}   configFile  path to config file (for sub process to parse)
     * @param  {object}   caps        capability object
     * @param  {string[]} specs       list of paths to test files to run in this worker
     * @param  {number}   retries     number of retries remaining
     * @param  {object}   execArgv    execution arguments for the test run
     */
    constructor(config, { cid, configFile, caps, specs, execArgv, retries }, stdout, stderr) {
        super();
        this.isBusy = false;
        this.cid = cid;
        this.config = config;
        this.configFile = configFile;
        this.caps = caps;
        this.capabilities = caps;
        this.specs = specs;
        this.execArgv = execArgv;
        this.retries = retries;
        this.stdout = stdout;
        this.stderr = stderr;
    }
    /**
     * spawns process to kick of wdio-runner
     */
    startProcess() {
        const { cid, execArgv } = this;
        const argv = process.argv.slice(2);
        const runnerEnv = Object.assign({}, process.env, this.config.runnerEnv, {
            WDIO_WORKER: true,
            WDIO_WORKER_ID: cid
        });
        if (this.config.outputDir) {
            runnerEnv.WDIO_LOG_PATH = path_1.default.join(this.config.outputDir, `wdio-${cid}.log`);
        }
        log.info(`Start worker ${cid} with arg: ${argv}`);
        const childProcess = this.childProcess = child_process_1.default.fork(path_1.default.join(__dirname, 'run.js'), argv, {
            cwd: process.cwd(),
            env: runnerEnv,
            execArgv,
            stdio: ['inherit', 'pipe', 'pipe', 'ipc']
        });
        childProcess.on('message', this._handleMessage.bind(this));
        childProcess.on('error', this._handleError.bind(this));
        childProcess.on('exit', this._handleExit.bind(this));
        /* istanbul ignore if */
        if (!process.env.JEST_WORKER_ID) {
            if (childProcess.stdout !== null) {
                (0, transformStream_1.default)(cid, childProcess.stdout).pipe(stdOutStream);
            }
            if (childProcess.stderr !== null) {
                (0, transformStream_1.default)(cid, childProcess.stderr).pipe(stdErrStream);
            }
        }
        return childProcess;
    }
    _handleMessage(payload) {
        var _a;
        const { cid, childProcess } = this;
        /**
         * resolve pending commands
         */
        if (payload.name === 'finisedCommand') {
            this.isBusy = false;
        }
        /**
         * store sessionId and connection data to worker instance
         */
        if (payload.name === 'sessionStarted') {
            if (payload.content.isMultiremote) {
                Object.assign(this, payload.content);
            }
            else {
                this.sessionId = payload.content.sessionId;
                delete payload.content.sessionId;
            }
            return;
        }
        /**
         * handle debug command called within worker process
         */
        if (childProcess && payload.origin === 'debugger' && payload.name === 'start') {
            replQueue.add(childProcess, { prompt: `[${cid}] \u203A `, ...payload.params }, () => this.emit('message', Object.assign(payload, { cid })), (ev) => this.emit('message', ev));
            return replQueue.next();
        }
        /**
         * handle debugger results
         */
        if (replQueue.isRunning && payload.origin === 'debugger' && payload.name === 'result') {
            (_a = replQueue.runningRepl) === null || _a === void 0 ? void 0 : _a.onResult(payload.params);
        }
        this.emit('message', Object.assign(payload, { cid }));
    }
    _handleError(payload) {
        const { cid } = this;
        this.emit('error', Object.assign(payload, { cid }));
    }
    _handleExit(exitCode) {
        const { cid, childProcess, specs, retries } = this;
        /**
         * delete process of worker
         */
        delete this.childProcess;
        this.isBusy = false;
        log.debug(`Runner ${cid} finished with exit code ${exitCode}`);
        this.emit('exit', { cid, exitCode, specs, retries });
        if (childProcess) {
            childProcess.kill('SIGTERM');
        }
    }
    /**
     * sends message to sub process to execute functions in wdio-runner
     * @param  command  method to run in wdio-runner
     * @param  args     arguments for functions to call
     */
    postMessage(command, args) {
        const { cid, configFile, caps, specs, retries, isBusy } = this;
        if (isBusy && command !== 'endSession') {
            return log.info(`worker with cid ${cid} already busy and can't take new commands`);
        }
        /**
         * start up process if worker hasn't done yet or if child process
         * closes after running its job
         */
        if (!this.childProcess) {
            this.childProcess = this.startProcess();
        }
        const cmd = { cid, command, configFile, args, caps, specs, retries };
        this.childProcess.send(cmd);
        this.isBusy = true;
    }
}
exports.default = WorkerInstance;
