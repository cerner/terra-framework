import { RangePatternType, PartitionPattern, SameValue, TimeClip, } from '@formatjs/ecma402-abstract';
import { ToLocalTime } from './ToLocalTime';
import { FormatDateTimePattern, } from './FormatDateTimePattern';
var TABLE_2_FIELDS = [
    'era',
    'year',
    'month',
    'day',
    'dayPeriod',
    'ampm',
    'hour',
    'minute',
    'second',
    'fractionalSecondDigits',
];
export function PartitionDateTimeRangePattern(dtf, x, y, implDetails) {
    x = TimeClip(x);
    if (isNaN(x)) {
        throw new RangeError('Invalid start time');
    }
    y = TimeClip(y);
    if (isNaN(y)) {
        throw new RangeError('Invalid end time');
    }
    /** IMPL START */
    var getInternalSlots = implDetails.getInternalSlots, tzData = implDetails.tzData;
    var internalSlots = getInternalSlots(dtf);
    /** IMPL END */
    var tm1 = ToLocalTime(x, 
    // @ts-ignore
    internalSlots.calendar, internalSlots.timeZone, { tzData: tzData });
    var tm2 = ToLocalTime(y, 
    // @ts-ignore
    internalSlots.calendar, internalSlots.timeZone, { tzData: tzData });
    var pattern = internalSlots.pattern, rangePatterns = internalSlots.rangePatterns;
    var rangePattern;
    var dateFieldsPracticallyEqual = true;
    var patternContainsLargerDateField = false;
    for (var _i = 0, TABLE_2_FIELDS_1 = TABLE_2_FIELDS; _i < TABLE_2_FIELDS_1.length; _i++) {
        var fieldName = TABLE_2_FIELDS_1[_i];
        if (dateFieldsPracticallyEqual && !patternContainsLargerDateField) {
            var rp = fieldName in rangePatterns ? rangePatterns[fieldName] : undefined;
            if (rangePattern !== undefined && rp === undefined) {
                patternContainsLargerDateField = true;
            }
            else {
                rangePattern = rp;
                if (fieldName === 'ampm') {
                    var v1 = tm1.hour;
                    var v2 = tm2.hour;
                    if ((v1 > 11 && v2 < 11) || (v1 < 11 && v2 > 11)) {
                        dateFieldsPracticallyEqual = false;
                    }
                }
                else if (fieldName === 'dayPeriod') {
                    // TODO
                }
                else if (fieldName === 'fractionalSecondDigits') {
                    var fractionalSecondDigits = internalSlots.fractionalSecondDigits;
                    if (fractionalSecondDigits === undefined) {
                        fractionalSecondDigits = 3;
                    }
                    var v1 = Math.floor(tm1.millisecond * Math.pow(10, (fractionalSecondDigits - 3)));
                    var v2 = Math.floor(tm2.millisecond * Math.pow(10, (fractionalSecondDigits - 3)));
                    if (!SameValue(v1, v2)) {
                        dateFieldsPracticallyEqual = false;
                    }
                }
                else {
                    var v1 = tm1[fieldName];
                    var v2 = tm2[fieldName];
                    if (!SameValue(v1, v2)) {
                        dateFieldsPracticallyEqual = false;
                    }
                }
            }
        }
    }
    if (dateFieldsPracticallyEqual) {
        var result_2 = FormatDateTimePattern(dtf, PartitionPattern(pattern), x, implDetails);
        for (var _a = 0, result_1 = result_2; _a < result_1.length; _a++) {
            var r = result_1[_a];
            r.source = RangePatternType.shared;
        }
        return result_2;
    }
    var result = [];
    if (rangePattern === undefined) {
        rangePattern = rangePatterns.default;
        /** IMPL DETAILS */
        // Now we have to replace {0} & {1} with actual pattern
        for (var _b = 0, _c = rangePattern.patternParts; _b < _c.length; _b++) {
            var patternPart = _c[_b];
            if (patternPart.pattern === '{0}' || patternPart.pattern === '{1}') {
                patternPart.pattern = pattern;
            }
        }
    }
    for (var _d = 0, _e = rangePattern.patternParts; _d < _e.length; _d++) {
        var rangePatternPart = _e[_d];
        var source = rangePatternPart.source, pattern_1 = rangePatternPart.pattern;
        var z = void 0;
        if (source === RangePatternType.startRange ||
            source === RangePatternType.shared) {
            z = x;
        }
        else {
            z = y;
        }
        var patternParts = PartitionPattern(pattern_1);
        var partResult = FormatDateTimePattern(dtf, patternParts, z, implDetails);
        for (var _f = 0, partResult_1 = partResult; _f < partResult_1.length; _f++) {
            var r = partResult_1[_f];
            r.source = source;
        }
        result = result.concat(partResult);
    }
    return result;
}
