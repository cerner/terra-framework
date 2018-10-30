import DisclosureManagerDelegate from '../../src/DisclosureManagerDelegate';

const disclose = () => {};
const dismiss = () => {};
const closeDisclosure = () => {};
const goBack = () => {};
const maximize = () => {};
const minimize = () => {};
const requestFocus = () => {};
const releaseFocus = () => {};
const registerDismissCheck = () => {};
const notSupported = () => {};
const disclosureManagerInstance = DisclosureManagerDelegate.create({
  disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck,
});

describe('propType', () => {
  it('should provide a defined PropType', () => {
    expect(DisclosureManagerDelegate.propType).not.toBe(undefined);
  });
});

describe('create', () => {
  it('should expose a create function that creates an AppDelegate instance', () => {
    const disclosureManagerLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck, notSupported,
    });

    expect(disclosureManagerLocalInstance.disclose).toBe(disclose);
    expect(disclosureManagerLocalInstance.dismiss).toBe(dismiss);
    expect(disclosureManagerLocalInstance.closeDisclosure).toBe(closeDisclosure);
    expect(disclosureManagerLocalInstance.goBack).toBe(goBack);
    expect(disclosureManagerLocalInstance.maximize).toBe(maximize);
    expect(disclosureManagerLocalInstance.minimize).toBe(minimize);
    expect(disclosureManagerLocalInstance.requestFocus).toBe(requestFocus);
    expect(disclosureManagerLocalInstance.releaseFocus).toBe(releaseFocus);
    expect(disclosureManagerLocalInstance.registerDismissCheck).toBe(registerDismissCheck);
    expect(disclosureManagerLocalInstance.thisIsATestWhatAmIDoing).toBe(undefined);
  });
});

describe('clone', () => {
  it('should override all possible functions if given', () => {
    const cloneDisclose = () => {};
    const cloneDismiss = () => {};
    const cloneCloseDisclosure = () => {};
    const cloneGoBack = () => {};
    const cloneMaximize = () => {};
    const cloneMinimize = () => {};
    const cloneRequestFocus = () => {};
    const cloneReleaseFocus = () => {};
    const cloneRegisterDismissCheck = () => {};

    const clonedDelegate = DisclosureManagerDelegate.clone(disclosureManagerInstance, {
      disclose: cloneDisclose,
      dismiss: cloneDismiss,
      closeDisclosure: cloneCloseDisclosure,
      goBack: cloneGoBack,
      maximize: cloneMaximize,
      minimize: cloneMinimize,
      requestFocus: cloneRequestFocus,
      releaseFocus: cloneReleaseFocus,
      registerDismissCheck: cloneRegisterDismissCheck,
    });

    expect(clonedDelegate.disclose).toBe(cloneDisclose);
    expect(clonedDelegate.dismiss).toBe(cloneDismiss);
    expect(clonedDelegate.closeDisclosure).toBe(cloneCloseDisclosure);
    expect(clonedDelegate.goBack).toBe(cloneGoBack);
    expect(clonedDelegate.maximize).toBe(cloneMaximize);
    expect(clonedDelegate.minimize).toBe(cloneMinimize);
    expect(clonedDelegate.requestFocus).toBe(cloneRequestFocus);
    expect(clonedDelegate.releaseFocus).toBe(cloneReleaseFocus);
    expect(clonedDelegate.registerDismissCheck).toBe(cloneRegisterDismissCheck);
  });

  it('should keep functions from original instance if not provided', () => {
    const cloneDisclose = () => {};
    const cloneDismiss = () => {};
    const clonedDelegate = DisclosureManagerDelegate.clone(disclosureManagerInstance, {
      disclose: cloneDisclose,
      dismiss: cloneDismiss,
    });

    expect(clonedDelegate.disclose).toBe(cloneDisclose);
    expect(clonedDelegate.dismiss).toBe(cloneDismiss);
    expect(clonedDelegate.closeDisclosure).toBe(closeDisclosure);
    expect(clonedDelegate.goBack).toBe(goBack);
    expect(clonedDelegate.maximize).toBe(maximize);
    expect(clonedDelegate.minimize).toBe(minimize);
    expect(clonedDelegate.requestFocus).toBe(requestFocus);
    expect(clonedDelegate.releaseFocus).toBe(releaseFocus);
    expect(clonedDelegate.registerDismissCheck).toBe(registerDismissCheck);
  });
});

describe('isEqual', () => {
  it('should return true when all attributes are equal', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(true);
  });

  it('should return true when refs are equal', () => {
    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, disclosureManagerInstance)).toBe(true);
  });

  it('should return false when disclose does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose: () => {}, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when dismiss does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss: () => {}, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when closeDisclosure does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure: () => {}, goBack, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when goBack does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack: () => {}, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when maximize does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize: () => {}, minimize, requestFocus, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when minimize does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize: () => {}, requestFocus, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when requestFocus does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus: () => {}, releaseFocus, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when releaseFocus does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus: () => {}, registerDismissCheck,
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when registerDismissCheck does not match', () => {
    const appDelegateLocalInstance = DisclosureManagerDelegate.create({
      disclose, dismiss, closeDisclosure, goBack, maximize, minimize, requestFocus, releaseFocus, registerDismissCheck: () => {},
    });

    expect(DisclosureManagerDelegate.isEqual(disclosureManagerInstance, appDelegateLocalInstance)).toBe(false);
  });

  it('should return false when either parameter is undefined', () => {
    expect(DisclosureManagerDelegate.isEqual(DisclosureManagerDelegate.create({}), undefined)).toBe(false);
    expect(DisclosureManagerDelegate.isEqual(undefined, DisclosureManagerDelegate.create({}))).toBe(false);
  });
});
