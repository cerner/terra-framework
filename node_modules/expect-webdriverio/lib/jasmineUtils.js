"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImmutableUnorderedSet = exports.isImmutableUnorderedKeyed = exports.hasProperty = exports.isUndefined = exports.fnNameFor = exports.isA = exports.equals = void 0;
function equals(a, b, customTesters, strictCheck) {
    customTesters = customTesters || [];
    return eq(a, b, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
exports.equals = equals;
const functionToString = Function.prototype.toString;
function isAsymmetric(obj) {
    return !!obj && isA('Function', obj.asymmetricMatch);
}
function asymmetricMatch(a, b) {
    var asymmetricA = isAsymmetric(a), asymmetricB = isAsymmetric(b);
    if (asymmetricA && asymmetricB) {
        return undefined;
    }
    if (asymmetricA) {
        return a.asymmetricMatch(b);
    }
    if (asymmetricB) {
        return b.asymmetricMatch(a);
    }
}
function eq(a, b, aStack, bStack, customTesters, hasKey) {
    var result = true;
    var asymmetricResult = asymmetricMatch(a, b);
    if (asymmetricResult !== undefined) {
        return asymmetricResult;
    }
    for (var i = 0; i < customTesters.length; i++) {
        var customTesterResult = customTesters[i](a, b);
        if (customTesterResult !== undefined) {
            return customTesterResult;
        }
    }
    if (a instanceof Error && b instanceof Error) {
        return a.message == b.message;
    }
    if (Object.is(a, b)) {
        return true;
    }
    if (a === null || b === null) {
        return a === b;
    }
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) {
        return false;
    }
    switch (className) {
        case '[object Boolean]':
        case '[object String]':
        case '[object Number]':
            if (typeof a !== typeof b) {
                return false;
            }
            else if (typeof a !== 'object' && typeof b !== 'object') {
                return Object.is(a, b);
            }
            else {
                return Object.is(a.valueOf(), b.valueOf());
            }
        case '[object Date]':
            return +a == +b;
        case '[object RegExp]':
            return a.source === b.source && a.flags === b.flags;
    }
    if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
    }
    if (isDomNode(a) && isDomNode(b)) {
        return a.isEqualNode(b);
    }
    var length = aStack.length;
    while (length--) {
        if (aStack[length] === a) {
            return bStack[length] === b;
        }
        else if (bStack[length] === b) {
            return false;
        }
    }
    aStack.push(a);
    bStack.push(b);
    var size = 0;
    if (className == '[object Array]') {
        size = a.length;
        if (size !== b.length) {
            return false;
        }
        while (size--) {
            result = eq(a[size], b[size], aStack, bStack, customTesters, hasKey);
            if (!result) {
                return false;
            }
        }
    }
    var aKeys = keys(a, className == '[object Array]', hasKey), key;
    size = aKeys.length;
    if (keys(b, className == '[object Array]', hasKey).length !== size) {
        return false;
    }
    while (size--) {
        key = aKeys[size];
        result =
            hasKey(b, key) &&
                eq(a[key], b[key], aStack, bStack, customTesters, hasKey);
        if (!result) {
            return false;
        }
    }
    aStack.pop();
    bStack.pop();
    return result;
}
function keys(obj, isArray, hasKey) {
    var allKeys = (function (o) {
        var keys = [];
        for (var key in o) {
            if (hasKey(o, key)) {
                keys.push(key);
            }
        }
        return keys.concat(Object.getOwnPropertySymbols(o).filter(symbol => Object.getOwnPropertyDescriptor(o, symbol)
            .enumerable));
    })(obj);
    if (!isArray) {
        return allKeys;
    }
    var extraKeys = [];
    if (allKeys.length === 0) {
        return allKeys;
    }
    for (var x = 0; x < allKeys.length; x++) {
        if (typeof allKeys[x] === 'symbol' || !allKeys[x].match(/^[0-9]+$/)) {
            extraKeys.push(allKeys[x]);
        }
    }
    return extraKeys;
}
function hasDefinedKey(obj, key) {
    return hasKey(obj, key) && obj[key] !== undefined;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
    return Object.prototype.toString.apply(value) === '[object ' + typeName + ']';
}
exports.isA = isA;
function isDomNode(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        typeof obj.nodeType === 'number' &&
        typeof obj.nodeName === 'string' &&
        typeof obj.isEqualNode === 'function');
}
function fnNameFor(func) {
    if (func.name) {
        return func.name;
    }
    const matches = functionToString
        .call(func)
        .match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return matches ? matches[1] : '<anonymous>';
}
exports.fnNameFor = fnNameFor;
function isUndefined(obj) {
    return obj === void 0;
}
exports.isUndefined = isUndefined;
function getPrototype(obj) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(obj);
    }
    if (obj.constructor.prototype == obj) {
        return null;
    }
    return obj.constructor.prototype;
}
function hasProperty(obj, property) {
    if (!obj) {
        return false;
    }
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
        return true;
    }
    return hasProperty(getPrototype(obj), property);
}
exports.hasProperty = hasProperty;
const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
const IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
function isImmutableUnorderedKeyed(maybeKeyed) {
    return !!(maybeKeyed &&
        maybeKeyed[IS_KEYED_SENTINEL] &&
        !maybeKeyed[IS_ORDERED_SENTINEL]);
}
exports.isImmutableUnorderedKeyed = isImmutableUnorderedKeyed;
function isImmutableUnorderedSet(maybeSet) {
    return !!(maybeSet &&
        maybeSet[IS_SET_SENTINEL] &&
        !maybeSet[IS_ORDERED_SENTINEL]);
}
exports.isImmutableUnorderedSet = isImmutableUnorderedSet;
