import { Hook } from './hook';
import { Suite } from './suite';
import { Test } from './test';
/**
 * Main class for a runnable class (e.g. test, suite or a hook)
 * mainly used to capture its running duration
 */
export default abstract class RunnableStats {
    type: string;
    start: Date;
    end?: Date;
    _duration: number;
    constructor(type: string);
    complete(): void;
    get duration(): number;
    /**
     * ToDo: we should always rely on uid
     */
    static getIdentifier(runner: Hook | Suite | Test): string;
}
//# sourceMappingURL=runnable.d.ts.map