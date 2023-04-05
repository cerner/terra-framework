type SelectorStrategy = string | {
    name: string;
    args: string;
};
export declare const findStrategy: (selector: SelectorStrategy, isW3C?: boolean, isMobile?: boolean) => {
    using: string;
    value: string;
};
export {};
//# sourceMappingURL=findStrategy.d.ts.map