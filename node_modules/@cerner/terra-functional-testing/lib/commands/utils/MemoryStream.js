const stream = require('stream');

/**
 * MemoryStream is a PassThrough stream that keeps track of the length of the stream
 */
class MemoryStream extends stream.PassThrough {
  constructor(options) {
    super(options);
    this.length = 0;
  }

  // eslint-disable-next-line no-underscore-dangle
  _transform(chunk, encoding, callback) {
    this.length += chunk.length;
    // eslint-disable-next-line no-underscore-dangle
    super._transform(chunk, encoding, callback);
  }
}
module.exports = MemoryStream;