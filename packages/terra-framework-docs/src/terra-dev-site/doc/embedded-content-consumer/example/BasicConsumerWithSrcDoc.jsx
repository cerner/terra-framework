import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();
const BasicConsumerWithSrcDoc = () => {
  const inlineHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>
        Example of iframe srcdoc for inline html
      </title>
    </head>

    <body>
    <p><span class=&quot;seoSummary&quot;>The <strong>HTML Inline Frame element (<code>&lt;iframe&gt;</code>)</strong> represents a nested <a href="https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context" target="_blank">browsing context</a>, embedding another HTML page into the current one.</span></p><p><span id=&quot;iframe&quot;></span><span id=&quot;iframe_tag&quot;></span><code class=&quot;html&quot; title=&quot;Inline Frame&quot; style=&quot;font-size:116%;&quot;><b style=&quot;color:#006633&quot;>&lt;iframe</b><b style=&quot;color:#006633&quot;>&gt;</b>...<b style=&quot;color:#006633&quot;>&lt;/iframe&gt;</b></code></p><p>An inline frame places another HTML document in a frame. Unlike an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;object /&gt;</code> element, an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;iframe&gt;</code> can be the &quot;target&quot; frame for links defined by other elements, and it can be selected by the user agent as the focus for printing, viewing its source, and so on.</dd><dd>The content of the element is used as alternative text to be displayed if the browser does not support inline frames.</dd><dd>First introduced by Microsoft Internet Explorer in 1997, <b>standardized</b> in HTML 4.0 Transitional, <b>allowed</b> in HTML5.</p>
    </body>
    </html>`;
  return (
    <EmbeddedContentConsumer
      src=""
      title="Basic Embedded Content Consumer using `srcdoc` inline HTML"
      options={
        {
          iframeAttrs:
          {
            id: 'iframe-inline-html', // Sets iframe id
            srcdoc: inlineHtml,
            width: '100%',
            height: '200px',
            scrolling: 'yes',
          },
        }
      }
    />
  );
};

export default BasicConsumerWithSrcDoc;
