/// <reference types="node" />
/// <reference types="expect-webdriverio/types/standalone" />
import Mocha from 'mocha';
import type { Capabilities, Services } from '@wdio/types';
import type { MochaConfig, MochaOpts as MochaOptsImport, FrameworkMessage, FormattedMessage, MochaContext, MochaError } from './types';
import type { EventEmitter } from 'events';
import type ExpectWebdriverIO from 'expect-webdriverio';
type EventTypes = 'hook' | 'test' | 'suite';
/**
 * Mocha runner
 */
declare class MochaAdapter {
    private _cid;
    private _config;
    private _specs;
    private _capabilities;
    private _reporter;
    private _mocha?;
    private _runner?;
    private _specLoadError?;
    private _level;
    private _hasTests;
    private _suiteIds;
    private _suiteCnt;
    private _hookCnt;
    private _testCnt;
    private _suiteStartDate;
    constructor(_cid: string, _config: MochaConfig, _specs: string[], _capabilities: Capabilities.RemoteCapability, _reporter: EventEmitter);
    init(): Promise<this>;
    _loadFiles(mochaOpts: MochaOptsImport): Promise<void>;
    hasTests(): boolean;
    run(): Promise<unknown>;
    options(options: MochaOptsImport, context: MochaContext): void;
    preRequire(context: Mocha.MochaGlobals, file: string, mocha: Mocha): void;
    /**
     * Hooks which are added as true Mocha hooks need to call done() to notify async
     */
    wrapHook(hookName: keyof Services.HookFunctions): () => Promise<void | unknown[]>;
    prepareMessage(hookName: keyof Services.HookFunctions): FormattedMessage;
    formatMessage(params: FrameworkMessage): FormattedMessage;
    requireExternalModules(modules: string[], context: MochaContext): void;
    emit(event: string, payload: any, err?: MochaError): void;
    getSyncEventIdStart(type: EventTypes): string;
    getSyncEventIdEnd(type: EventTypes): string;
    getUID(message: FrameworkMessage): string;
}
declare const adapterFactory: {
    init?: Function;
};
export default adapterFactory;
export { MochaAdapter, adapterFactory };
declare global {
    namespace WebdriverIO {
        interface MochaOpts extends MochaOptsImport {
        }
    }
    namespace NodeJS {
        interface Global {
            expect: ExpectWebdriverIO.Expect;
        }
    }
}
//# sourceMappingURL=index.d.ts.map