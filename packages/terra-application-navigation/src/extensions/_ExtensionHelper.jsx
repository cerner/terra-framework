import React from 'react';
import Extension from './_Extension';
import ExtensionWithPopup from './_ExtensionWithPopup';

const createExtensions = (extensionItems, onRequestClose, isHidden) => (
  extensionItems.map((item, index) => {
    const key = `${item.text}-${index}`;
    const notificationCount = item.notificationCount ? item.notificationCount : null;
    if (item.type === 'popup') {
      return (
        <ExtensionWithPopup
          content={item.content}
          notificationCount={notificationCount}
          key={key}
          image={item.image}
          text={item.text}
          onRequestClose={onRequestClose}
          isHidden={isHidden}
        />
      );
    }

    return (
      <Extension
        notificationCount={notificationCount}
        key={key}
        image={item.image}
        text={item.text}
        metaData={item.metaData}
        onSelect={item.onSelect}
        onRequestClose={onRequestClose}
        isHidden={isHidden}
      />
    );
  })
);

export default createExtensions;
