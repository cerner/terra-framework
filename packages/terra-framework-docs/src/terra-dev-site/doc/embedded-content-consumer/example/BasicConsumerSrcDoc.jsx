import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from '../../../../../../../../xfc/src';

Consumer.init();
class BasicConsumerSrcDoc extends React.Component {
  constructor(props) {
    super(props);
    this.onMount = this.onMount.bind(this);
  }

  onMount(frame) {
    this.frame = frame;

    this.frame.iframe.contentWindow.addEventListener('focus', () => {
      this.frame.iframe.style['outline'] = "2px dashed blue";
    }, true);

    this.frame.iframe.contentWindow.addEventListener('blur', () => {
      this.frame.iframe.style['outline'] = "0px";
    }, true);
  }

  render() {
    const inlineHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>
          Example of iframe srcdoc for inline html
        </title>
      </head>

      <body>
      <p><span class=&quot;seoSummary&quot;>The <strong>HTML Inline Frame element (<code>&lt;iframe&gt;</code>)</strong> represents a nested <a href=&quot;https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context&quot;>browsing context</a>, embedding another HTML page into the current one.</span></p><p><span id=&quot;iframe&quot;></span><span id=&quot;iframe_tag&quot;></span><code class=&quot;html&quot; title=&quot;Inline Frame&quot; style=&quot;font-size:116%;&quot;><b style=&quot;color:#006633&quot;>&lt;iframe</b><b style=&quot;color:#006633&quot;>&gt;</b>...<b style=&quot;color:#006633&quot;>&lt;/iframe&gt;</b></code></p><dl><dd>An inline frame places another HTML document in a frame. Unlike an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;object /&gt;</code> element, an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;iframe&gt;</code> can be the &quot;target&quot; frame for links defined by other elements, and it can be selected by the user agent as the focus for printing, viewing its source, and so on.</dd><dd>The content of the element is used as alternative text to be displayed if the browser does not support inline frames.</dd><dd>First introduced by Microsoft Internet Explorer in 1997, <b>standardized</b> in <a href=&quot;#HTML401&quot;>HTML 4.0</a> Transitional, <b>allowed</b> in HTML5.</dd></dl>
      </body>
      </html>`;

    return (
      <EmbeddedContentConsumer
        src=""
        title="Basic Embedded Content Consumer using `srcdoc` inline HTML"
        options={{
          iframeAttrs:
          {
            id: 'iframe-inline-html', // Sets iframe id
            srcdoc: inlineHtml,
            width: '100%',
            height: '100px',
            scrolling: 'yes',
          },
        }}
        onMount={this.onMount}
      />
    );
  }
};

export default BasicConsumerSrcDoc;
