import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const inlineHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>
        Example of iframe srcdoc for inline html
      </title>
    </head>

    <body>
    <p><span class=&quot;seoSummary&quot;>The <strong>HTML Inline Frame element (<code>&lt;iframe&gt;</code>)</strong> represents a nested, embedding another HTML page into the current one.</span></p><p><span id=&quot;iframe&quot;></span><span id=&quot;iframe_tag&quot;></span><code class=&quot;html&quot; title=&quot;Inline Frame&quot; style=&quot;font-size:116%;&quot;><b style=&quot;color:#006633&quot;>&lt;iframe</b><b style=&quot;color:#006633&quot;>&gt;</b>...<b style=&quot;color:#006633&quot;>&lt;/iframe&gt;</b></code></p><dl><dd>An inline frame places another HTML document in a frame. Unlike an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;object /&gt;</code> element, an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;iframe&gt;</code> can be the &quot;target&quot; frame for links defined by other elements, and it can be selected by the user agent as the focus for printing, viewing its source, and so on.</dd><dd>The content of the element is used as alternative text to be displayed if the browser does not support inline frames.</dd><dd>First introduced by Microsoft Internet Explorer in 1997, <b>standardized</b> in HTML 4.0 Transitional, <b>allowed</b> in HTML5.</dd></dl>
    </body>
    </html>`;

const BasicConsumerWithSrcDoc = () => (
  <div className={cx('consumer-content-wrapper')}>
    <h2>Embedded Content</h2>
    <p>The following is an embedded content within an iframe.</p>
    <EmbeddedContentConsumer
      className={cx('iframe')}
      title="Inline HTML Content"
      options={{
        iframeAttrs: {
          id: 'iframe-with-srcdoc', // unique id of this iframe
          srcdoc: inlineHtml,
          width: '100%', // fixed width of this iframe (no auto resize logic)
          height: '100px', // fixed height of this iframe (no auto resize logic)
          scrolling: 'yes',
        },
      }}
    />
  </div>
);

export default BasicConsumerWithSrcDoc;
