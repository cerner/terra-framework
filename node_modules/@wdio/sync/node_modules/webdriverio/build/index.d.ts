import { Options, Capabilities } from '@wdio/types';
import SevereServiceErrorImport from './utils/SevereServiceError';
import type { AttachOptions } from './types';
export type RemoteOptions = Options.WebdriverIO & Omit<Options.Testrunner, 'capabilities'>;
/**
 * A method to create a new session with WebdriverIO.
 *
 * <b>
 * NOTE: If you hit "error TS2694: Namespace 'global.WebdriverIO' has no exported member 'Browser'" when using typescript,
 * add "webdriverio/async" into tsconfig.json's "types" array will solve it: <code> { "compilerOptions": { "types": ["webdriverio/async"] } } </code>
 * </b>
 *
 * @param  {Object} [params={}]       Options to create the session with
 * @param  {function} remoteModifier  Modifier function to change the monad object
 * @return {object}                   browser object with sessionId
 * @see <a href="https://webdriver.io/docs/typescript">Typescript setup</a>
 */
export declare const remote: (params: RemoteOptions, remoteModifier?: Function) => Promise<WebdriverIO.Browser>;
export declare const attach: (attachOptions: AttachOptions) => Promise<WebdriverIO.Browser>;
/**
 * WebdriverIO allows you to run multiple automated sessions in a single test.
 * This is handy when you’re testing features that require multiple users (for example, chat or WebRTC applications).
 *
 * Instead of creating a couple of remote instances where you need to execute common commands like newSession() or url() on each instance,
 * you can simply create a multiremote instance and control all browsers at the same time.
 *
 * <b>
 * NOTE: Multiremote is not meant to execute all your tests in parallel.
 * It is intended to help coordinate multiple browsers and/or mobile devices for special integration tests (e.g. chat applications).
 * </b>
 *
 * @param params capabilities to choose desired devices.
 * @param automationProtocol
 * @return All remote instances, the first result represents the capability defined first in the capability object,
 * the second result the second capability and so on.
 *
 * @see <a href="https://webdriver.io/docs/multiremote">External document and example usage</a>.
 */
export declare const multiremote: (params: Capabilities.MultiRemoteCapabilities, { automationProtocol }?: {
    automationProtocol?: string | undefined;
}) => Promise<WebdriverIO.MultiRemoteBrowser>;
export declare const SevereServiceError: typeof SevereServiceErrorImport;
export * from './types';
export * from './utils/interception/types';
//# sourceMappingURL=index.d.ts.map