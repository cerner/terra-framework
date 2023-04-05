import RunnableStats from './runnable';
export interface Hook {
    type?: string;
    title: string;
    parent: string;
    fullTitle?: string;
    pending?: boolean;
    file?: string;
    duration?: number;
    cid: string;
    specs?: string[];
    uid?: string;
    errors?: Error[];
    error?: Error;
    currentTest?: string;
}
export default class HookStats extends RunnableStats {
    uid: string;
    cid: string;
    title: string;
    parent: string;
    errors?: Error[];
    error?: Error;
    state?: 'failed' | 'passed';
    currentTest?: string;
    constructor(runner: Hook);
    complete(errors?: Error[]): void;
}
//# sourceMappingURL=hook.d.ts.map