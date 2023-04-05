import { IntlDateTimeFormatPart } from '@formatjs/ecma402-abstract';
import { ToLocalTimeImplDetails } from './ToLocalTime';
import { FormatDateTimePatternImplDetails } from './FormatDateTimePattern';
/**
 * https://tc39.es/ecma402/#sec-partitiondatetimepattern
 * @param dtf
 * @param x
 */
export declare function PartitionDateTimePattern(dtf: Intl.DateTimeFormat, x: number, implDetails: ToLocalTimeImplDetails & FormatDateTimePatternImplDetails): IntlDateTimeFormatPart[];
//# sourceMappingURL=PartitionDateTimePattern.d.ts.map