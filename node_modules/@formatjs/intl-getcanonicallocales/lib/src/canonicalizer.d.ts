import { UnicodeLocaleId, UnicodeLanguageId } from './types';
/**
 * CAVEAT: We don't do this section in the spec bc they have no JSON data
 * Use the bcp47 data to replace keys, types, tfields, and tvalues by their canonical forms. See Section 3.6.4 U Extension Data Files) and Section 3.7.1 T Extension Data Files. The aliases are in the alias attribute value, while the canonical is in the name attribute value. For example,
Because of the following bcp47 data:
<key name="ms"…>…<type name="uksystem" … alias="imperial" … />…</key>
We get the following transformation:
en-u-ms-imperial ⇒ en-u-ms-uksystem
 * @param lang
 */
export declare function canonicalizeUnicodeLanguageId(unicodeLanguageId: UnicodeLanguageId): UnicodeLanguageId;
/**
 * Canonicalize based on
 * https://www.unicode.org/reports/tr35/tr35.html#Canonical_Unicode_Locale_Identifiers
 * https://tc39.es/ecma402/#sec-canonicalizeunicodelocaleid
 * IMPORTANT: This modifies the object inline
 * @param locale
 */
export declare function canonicalizeUnicodeLocaleId(locale: UnicodeLocaleId): UnicodeLocaleId;
//# sourceMappingURL=canonicalizer.d.ts.map