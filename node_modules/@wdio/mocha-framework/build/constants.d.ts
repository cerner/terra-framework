export declare const INTERFACES: {
    readonly bdd: readonly ["it", "specify", "before", "beforeEach", "after", "afterEach"];
    readonly tdd: readonly ["test", "suiteSetup", "setup", "suiteTeardown", "teardown"];
    readonly qunit: readonly ["test", "before", "beforeEach", "after", "afterEach"];
};
export declare const TEST_INTERFACES: {
    readonly bdd: readonly ["it", "specify"];
    readonly tdd: readonly ["test"];
    readonly qunit: readonly ["test"];
};
/**
 * to map Mocha events to WDIO events
 */
export declare const EVENTS: {
    readonly suite: "suite:start";
    readonly 'suite end': "suite:end";
    readonly test: "test:start";
    readonly 'test end': "test:end";
    readonly hook: "hook:start";
    readonly 'hook end': "hook:end";
    readonly pass: "test:pass";
    readonly fail: "test:fail";
    readonly retry: "test:retry";
    readonly pending: "test:pending";
};
export declare const NOOP: () => void;
export declare const MOCHA_TIMEOUT_MESSAGE = "For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.";
export declare const MOCHA_TIMEOUT_MESSAGE_REPLACEMENT: string;
//# sourceMappingURL=constants.d.ts.map