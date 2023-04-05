/** URI class for parsing URIs */
class URI {
  constructor(uri) {
    const a = document.createElement('a');
    a.href = uri;

    this.protocol = a.protocol;
    this.pathname = a.pathname;

    // In postMessage the default port for each protocol is stripped from
    // the event origin. Exclude it so the origins match up.
    const portMatch = this.protocol === 'http:' ? /(:80)$/ : /(:443)$/;
    this.host = a.host.replace(portMatch, '');

    this.origin = `${this.protocol}//${this.host}`;
  }
}

export default URI;
