import { UnicodeLocaleId, UnicodeLanguageId } from './types';
export declare const SEPARATOR = "-";
export declare function isUnicodeLanguageSubtag(lang: string): boolean;
export declare function isStructurallyValidLanguageTag(tag: string): boolean;
export declare function isUnicodeRegionSubtag(region: string): boolean;
export declare function isUnicodeScriptSubtag(script: string): boolean;
export declare function isUnicodeVariantSubtag(variant: string): boolean;
export declare function parseUnicodeLanguageId(chunks: string[] | string): UnicodeLanguageId;
export declare function parseUnicodeLocaleId(locale: string): UnicodeLocaleId;
//# sourceMappingURL=parser.d.ts.map