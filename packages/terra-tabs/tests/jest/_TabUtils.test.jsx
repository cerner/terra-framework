import '@testing-library/jest-dom/extend-expect';
import {
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  KEY_DOWN,
  KEY_HOME,
  KEY_END,
  KEY_RETURN,
  KEY_SPACE,
  KEY_ESCAPE,
} from 'keycode-js';

import {
  generateKeyDownSelection,
  enableFocusStyles,
  disableFocusStyles,
  nextFocus,
  previousFocus,
  firstFocus,
  lastFocus,
  handleArrows,
  handleMoreButtonArrows,
} from '../../src/common-tabs/_TabUtils';

describe('generateKeyDownSelection', () => {
  test('should return null if no callback provided', () => {
    expect(generateKeyDownSelection()).toBeUndefined();
  });

  test('should return callback with handlers for return key handling', () => {
    const mockHandler = jest.fn();
    const result = generateKeyDownSelection(mockHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_RETURN },
      preventDefault: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockHandler).toHaveBeenCalled();
  });

  test('should return callback with handlers for space key handling', () => {
    const mockHandler = jest.fn();
    const result = generateKeyDownSelection(mockHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_SPACE },
      preventDefault: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockHandler).toHaveBeenCalled();
  });

  test('should return callback that does not execute on arbitrary key presses', () => {
    const mockHandler = jest.fn();
    const result = generateKeyDownSelection(mockHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_HOME },
      preventDefault: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    expect(mockHandler).not.toHaveBeenCalled();
  });
});

describe('enableFocusStyles', () => {
  test('should enable attribute on current target', () => {
    const mockEvent = {
      currentTarget: document.createElement('div'),
    };

    enableFocusStyles(mockEvent);

    expect(mockEvent.currentTarget).toHaveAttribute('data-focus-styles-enabled', 'true');
  });
});

describe('disableFocusStyles', () => {
  test('should disable attribute on current target', () => {
    const mockEvent = {
      currentTarget: document.createElement('div'),
    };

    disableFocusStyles(mockEvent);

    expect(mockEvent.currentTarget).toHaveAttribute('data-focus-styles-enabled', 'false');
  });
});

describe('nextFocus', () => {
  test('should set focus to 0 index when provided index is below 0', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = -1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-0') {
        return mockElement;
      }
      return undefined;
    });

    nextFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should not blow up when 0 index id cannot be found', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = -1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation(() => undefined);

    nextFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).not.toHaveBeenCalled();
  });

  test('should set focus to n+1 index when provided index is not last', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 0;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-1') {
        return mockElement;
      }
      return undefined;
    });

    nextFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should set focus to 0 index when provided index is last', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 2;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-0') {
        return mockElement;
      }
      return undefined;
    });

    nextFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should not blow up when desired element cannot be found', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 0;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation(() => undefined);

    nextFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).not.toHaveBeenCalled();
  });
});

describe('previousFocus', () => {
  test('should set focus to last index when provided index is below 0', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = -1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-2') {
        return mockElement;
      }
      return undefined;
    });

    previousFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should not blow up when last index id cannot be found', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = -1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation(() => undefined);

    previousFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).not.toHaveBeenCalled();
  });

  test('should set focus to n-1 index when provided index is not last', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 2;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-1') {
        return mockElement;
      }
      return undefined;
    });

    previousFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should set focus to last index when provided index is 0', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 0;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-2') {
        return mockElement;
      }
      return undefined;
    });

    previousFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should not blow up when desired element cannot be found', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 0;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation(() => undefined);

    previousFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).not.toHaveBeenCalled();
  });
});

describe('firstFocus', () => {
  test('should set focus to first index when element is found and not already focused', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-0') {
        return mockElement;
      }
      return undefined;
    });

    firstFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should not set focus if index is already 0', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 0;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-0') {
        return mockElement;
      }
      return undefined;
    });

    firstFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).not.toHaveBeenCalled();
  });

  test('should not blow up if element cannot be found', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-0') {
        return undefined;
      }
      return null;
    });

    firstFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });
});

describe('lastFocus', () => {
  test('should set focus to last index when element is found and not already focused', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-2') {
        return mockElement;
      }
      return undefined;
    });

    lastFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).toHaveBeenCalled();
  });

  test('should not set focus if index is already last', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 2;
    const testIds = ['id-0', 'id-1', 'id-2'];

    const mockElement = {
      focus: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-2') {
        return mockElement;
      }
      return undefined;
    });

    lastFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockElement.focus).not.toHaveBeenCalled();
  });

  test('should not blow up if element cannot be found', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    const testIndex = 1;
    const testIds = ['id-0', 'id-1', 'id-2'];

    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'id-2') {
        return undefined;
      }
      return null;
    });

    lastFocus(mockEvent, testIndex, testIds);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });
});

describe('handleArrows', () => {
  describe('ltr', () => {
    beforeAll(() => {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    });

    afterAll(() => {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
    });

    test('should set focus on Next (right) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_RIGHT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus on Next (down) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_DOWN,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus on Previous (left) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_LEFT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-0') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus on Previous (up) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_UP,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-0') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus on Home key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_HOME,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-0') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus on End key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_END,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should not set focus on arbitrary key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_ESCAPE,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation(() => mockElement);

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(mockEvent.stopPropagation).not.toHaveBeenCalled();
      expect(mockElement.focus).not.toHaveBeenCalled();
    });
  });

  describe('rtl', () => {
    beforeAll(() => {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    });

    afterAll(() => {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
    });

    test('should set focus on Next (left) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_LEFT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus on Previous (right) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_RIGHT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-0') {
          return mockElement;
        }
        return undefined;
      });

      handleArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });
  });
});

describe('handleMoreButtonArrows', () => {
  describe('ltr', () => {
    beforeAll(() => {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    });

    afterAll(() => {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
    });

    test('should set focus to given index on Next (right) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_RIGHT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-1') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus to given index on Next (down) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_DOWN,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-1') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should not blow up when desired element could not be found', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_DOWN,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation(() => undefined);

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).not.toHaveBeenCalled();
    });

    test('should set focus to first index on Home key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_HOME,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-0') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus to last index on Previous (left) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_LEFT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus to last index on Previous (up) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_UP,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus to last index on End key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_END,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });
  });

  describe('rtl', () => {
    beforeAll(() => {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    });

    afterAll(() => {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
    });

    test('should set focus to given index on Next (left) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_LEFT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-1') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });

    test('should set focus to last index on Previous (right) key press', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        nativeEvent: {
          keyCode: KEY_RIGHT,
        },
      };

      const testIndex = 1;
      const testIds = ['id-0', 'id-1', 'id-2'];

      const mockElement = {
        focus: jest.fn(),
      };

      jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'id-2') {
          return mockElement;
        }
        return undefined;
      });

      handleMoreButtonArrows(mockEvent, testIndex, testIds);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockElement.focus).toHaveBeenCalled();
    });
  });
});
