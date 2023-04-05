import { PartitionPattern, TimeClip, } from '@formatjs/ecma402-abstract';
import { FormatDateTimePattern, } from './FormatDateTimePattern';
/**
 * https://tc39.es/ecma402/#sec-partitiondatetimepattern
 * @param dtf
 * @param x
 */
export function PartitionDateTimePattern(dtf, x, implDetails) {
    x = TimeClip(x);
    if (isNaN(x)) {
        throw new RangeError('invalid time');
    }
    /** IMPL START */
    var getInternalSlots = implDetails.getInternalSlots;
    var internalSlots = getInternalSlots(dtf);
    /** IMPL END */
    var pattern = internalSlots.pattern;
    return FormatDateTimePattern(dtf, PartitionPattern(pattern), x, implDetails);
}
