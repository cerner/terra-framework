import { hideModalDomUpdates, showModalDomUpdates } from '../../src/inertHelpers';

describe('showModalDomUpdates', () => {
  const documentQuerySelector = document.querySelector;
  const mockGetAttribute = jest.fn();
  const mockSetAttribute = jest.fn();
  const mockModalElementFocus = jest.fn();
  const mockModalElement = {
    querySelector: jest.fn().mockReturnValue({ focus: mockModalElementFocus }),
    focus: mockModalElementFocus,
  };

  beforeAll(() => {
    document.querySelector = jest.fn().mockReturnValue({
      setAttribute: mockSetAttribute,
      getAttribute: mockGetAttribute.mockReturnValue('0'),
    });
  });

  afterAll(() => {
    document.querySelector = documentQuerySelector;
  });

  describe('when inert has not been set on root', () => {
    it('sets inert on root', () => {
      showModalDomUpdates(mockModalElement, '#root');
      expect(mockSetAttribute).toHaveBeenNthCalledWith(1, 'inert', 'true');

      // sets modal-overlay count to 1', () => {
      expect(mockSetAttribute).toHaveBeenNthCalledWith(2, 'data-abstract-modal-overlay-count', '1');
    });
  });

  describe('when inert has already been set on root', () => {
    it('does not resets inert on root', () => {
      mockGetAttribute.mockReturnValue('1');

      showModalDomUpdates(mockModalElement, '#root');
      expect(mockSetAttribute).not.toHaveBeenNthCalledWith(1, 'inert', 'true');

      // sets modal-overlay count to 1
      expect(mockSetAttribute).toHaveBeenNthCalledWith(1, 'data-abstract-modal-overlay-count', '2');
    });
  });

  describe('focus shifting to modal content', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('sets focus to modal when on browser', () => {
      showModalDomUpdates(mockModalElement, '#root');
      expect(mockModalElementFocus).toHaveBeenCalled();
    });

    it('sets focus to visually hidden text in modal when on iOS', () => {
      const defaultOnTouchStart = window.ontouchstart;
      window.ontouchstart = true;
      showModalDomUpdates(mockModalElement, '#root');
      expect(mockModalElementFocus).toHaveBeenCalled();
      window.ontouchstart = defaultOnTouchStart;
    });
  });
});

describe('hideModalDomUpdates', () => {
  const documentQuerySelector = document.querySelector;
  const mockGetAttribute = jest.fn();
  const mockSetAttribute = jest.fn();
  const mockRemoveAttribute = jest.fn();
  const mockBodyFocus = jest.fn();

  const mockModalTriggerElementFocus = jest.fn();
  const mockModalTriggerElement = {
    focus: mockModalTriggerElementFocus,
  };

  beforeAll(() => {
    document.querySelector = jest.fn().mockReturnValue({
      focus: mockBodyFocus,
      setAttribute: mockSetAttribute,
      getAttribute: mockGetAttribute.mockReturnValue('1'),
      removeAttribute: mockRemoveAttribute,
    });
  });

  afterAll(() => {
    document.querySelector = documentQuerySelector;
  });

  describe('when inert has been set once on root', () => {
    it('removes modal-overlay count', () => {
      hideModalDomUpdates(mockModalTriggerElement, '#root');
      expect(mockRemoveAttribute).toHaveBeenNthCalledWith(1, 'data-abstract-modal-overlay-count');

      // removes inert on root
      expect(mockRemoveAttribute).toHaveBeenNthCalledWith(2, 'inert');
    });
  });

  describe('when inert has been set multiple times on root', () => {
    it('reduces the modal-overlay count to 1', () => {
      mockGetAttribute.mockReturnValue('2');

      hideModalDomUpdates(mockModalTriggerElement, '#root');
      expect(mockSetAttribute).toHaveBeenNthCalledWith(1, 'data-abstract-modal-overlay-count', '1');

      // does not remove inert on root
      expect(mockRemoveAttribute).not.toHaveBeenNthCalledWith(1, 'inert');
    });
  });

  describe('focus shifting back to triggering element', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.useFakeTimers();
    });

    it('sets focus to triggering element', () => {
      hideModalDomUpdates(mockModalTriggerElement, '#root');
      jest.runAllTimers();
      expect(mockModalTriggerElementFocus).toHaveBeenCalled();
      expect(mockBodyFocus).not.toHaveBeenCalled();
    });

    it('sets focus to body when triggering element does not have focus callback', () => {
      hideModalDomUpdates({ }, '#root');
      jest.runAllTimers();
      expect(mockModalTriggerElementFocus).not.toHaveBeenCalled();
      expect(mockBodyFocus).toHaveBeenCalled();
    });

    it('sets focus to body when triggering element is not defined', () => {
      hideModalDomUpdates(undefined, '#root');
      jest.runAllTimers();
      expect(mockModalTriggerElementFocus).not.toHaveBeenCalled();
      expect(mockBodyFocus).toHaveBeenCalled();
    });
  });
});
