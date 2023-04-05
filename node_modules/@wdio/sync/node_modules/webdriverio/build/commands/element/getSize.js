"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
/**
 *
 * Get the width and height for an DOM-element.
 *
 * <example>
    :getSize.js
    it('should demonstrate the getSize command', async () => {
        await browser.url('http://github.com')
        const logo = await $('.octicon-mark-github')

        const size = await logo.getSize()
        console.log(size) // outputs: { width: 32, height: 32 }

        const width = await logo.getSize('width')
        console.log(width) // outputs: 32

        const height = await logo.getSize('height')
        console.log(height) // outputs: 32
    })
 * </example>
 *
 * @alias element.getElementSize
 * @param {String=} prop     size to receive [optional] ("width" or "height")
 * @return {Object|Number}    requested element size (`{ width: <Number>, height: <Number> }`) or actual width/height as number if prop param is given
 * @type property
 *
 */
async function getSize(prop) {
    let rect = {};
    if (this.isW3C) {
        rect = await (0, utils_1.getElementRect)(this);
    }
    else {
        rect = await this.getElementSize(this.elementId);
    }
    if (prop && typeof rect[prop] === 'number') {
        return rect[prop];
    }
    return {
        width: rect.width,
        height: rect.height
    };
}
exports.default = getSize;
