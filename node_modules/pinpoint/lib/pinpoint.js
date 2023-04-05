module.exports = pinpoint;

function pinpoint(input, options) {
	if (!options) options = {};
	var showLines = options.showLines || 9;
	var tabSize = options.tabSize || 4;
	var indent = options.indent || '';
	var line = options.line - 1;
	var column = options.column - 1;

	var lines = input.split(/\r\n|[\r\n]/);
	var length = lines.length;
	var tabSpaces = repeat(' ', tabSize);

	var start = line;
	var end = line + 1;
	for (var i = 0; i < showLines - 1; ++i) {
		if (i % 2) {
			if (end < length) ++end;
			else if (start > 0) --start;
			else break;
		} else {
			if (start > 0) --start;
			else if (end < length) ++end;
			else break;
		}
	}

	var maxDigits = end.toString().length;
	var tabCount = 0;
	var pointedLine = line - start;
	lines = lines.slice(start, end).map(function (line, i) {
		if (i === pointedLine) {
			var pos = 0;
			while (pos = 1 + line.indexOf('\t', pos)) {
				if (pos <= column) ++tabCount;
			}
		}
		i += start + 1;
		return pad(i, maxDigits) + '| ' + line.replace(/\t/g, tabSpaces);;
	});
	var arrowLine = repeat('-', maxDigits + 2 + column + tabCount * (tabSize - 1)) + '^';
	lines.splice(pointedLine + 1, 0, arrowLine);

	return indent + lines.join('\n' + indent)
}

function pad(num, count) {
	return repeat(' ', count - num.toString().length) + num;
}

function repeat(str, count) {
	return new Array(count + 1).join(str);
}