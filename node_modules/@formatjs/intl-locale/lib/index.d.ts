export interface IntlLocaleOptions {
    language?: string;
    script?: string;
    region?: string;
    calendar?: string;
    collation?: string;
    hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
    caseFirst?: 'upper' | 'lower' | 'false';
    numberingSystem?: string;
    numeric?: boolean;
}
export interface IntlLocaleInternal extends IntlLocaleOptions {
    locale: string;
    initializedLocale: boolean;
}
export declare class Locale {
    constructor(tag: string | Locale, opts?: IntlLocaleOptions);
    /**
     * https://www.unicode.org/reports/tr35/#Likely_Subtags
     */
    maximize(): Locale;
    /**
     * https://www.unicode.org/reports/tr35/#Likely_Subtags
     */
    minimize(): Locale;
    toString(): string;
    get baseName(): string;
    get calendar(): string | undefined;
    get collation(): string | undefined;
    get hourCycle(): "h11" | "h12" | "h23" | "h24" | undefined;
    get caseFirst(): "upper" | "lower" | "false" | undefined;
    get numeric(): boolean | undefined;
    get numberingSystem(): string | undefined;
    /**
     * https://tc39.es/proposal-intl-locale/#sec-Intl.Locale.prototype.language
     */
    get language(): string;
    /**
     * https://tc39.es/proposal-intl-locale/#sec-Intl.Locale.prototype.script
     */
    get script(): string | undefined;
    /**
     * https://tc39.es/proposal-intl-locale/#sec-Intl.Locale.prototype.region
     */
    get region(): string | undefined;
    static relevantExtensionKeys: readonly ["ca", "co", "hc", "kf", "kn", "nu"];
}
export default Locale;
//# sourceMappingURL=index.d.ts.map