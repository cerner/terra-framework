import utilityHelpers from '../../src/utils/utilityHelpers';

describe('utilityHelpers', () => {
  describe('getDefaultUtilityItems', () => {
    it('returns the default set of utility items', () => {
      const mockIntl = {
        formatMessage: jest.fn(messageData => (`mock-${messageData.id}`)),
      };

      const result = utilityHelpers.getDefaultUtilityItems(mockIntl, { name: 'test', detail: 'test detail' });

      const menuItem = result[0];
      expect(menuItem.key).toBe(utilityHelpers.defaultKeys.MENU);
      expect(menuItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.menu');
      expect(menuItem.childKeys).toEqual([utilityHelpers.defaultKeys.USER_INFORMATION, utilityHelpers.defaultKeys.SETTINGS, utilityHelpers.defaultKeys.HELP, utilityHelpers.defaultKeys.LOG_OUT]);

      const userInformationItem = result[1];
      expect(userInformationItem.key).toBe(utilityHelpers.defaultKeys.USER_INFORMATION);
      expect(userInformationItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.userInformation');
      expect(userInformationItem.content).toBeDefined();
      expect(userInformationItem.childKeys).toEqual([utilityHelpers.defaultKeys.CHANGE_PHOTO]);

      const settingsItem = result[2];
      expect(settingsItem.key).toBe(utilityHelpers.defaultKeys.SETTINGS);
      expect(settingsItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.settings');
      expect(settingsItem.childKeys).toEqual([utilityHelpers.defaultKeys.APPEARANCE, utilityHelpers.defaultKeys.SECURITY]);

      const logOutItem = result[3];
      expect(logOutItem.key).toBe(utilityHelpers.defaultKeys.LOG_OUT);
      expect(logOutItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.logOut');

      const helpItem = result[4];
      expect(helpItem.key).toBe(utilityHelpers.defaultKeys.HELP);
      expect(helpItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.help');
      expect(helpItem.childKeys).toEqual([utilityHelpers.defaultKeys.GETTING_STARTED, utilityHelpers.defaultKeys.ABOUT, utilityHelpers.defaultKeys.TERMS_OF_USE]);

      const changePhotoItem = result[5];
      expect(changePhotoItem.key).toBe(utilityHelpers.defaultKeys.CHANGE_PHOTO);
      expect(changePhotoItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.changePhoto');

      const appearanceItem = result[6];
      expect(appearanceItem.key).toBe(utilityHelpers.defaultKeys.APPEARANCE);
      expect(appearanceItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.appearance');

      const securityItem = result[7];
      expect(securityItem.key).toBe(utilityHelpers.defaultKeys.SECURITY);
      expect(securityItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.security');

      const gettingStartedItem = result[8];
      expect(gettingStartedItem.key).toBe(utilityHelpers.defaultKeys.GETTING_STARTED);
      expect(gettingStartedItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.gettingStarted');

      const aboutItem = result[9];
      expect(aboutItem.key).toBe(utilityHelpers.defaultKeys.ABOUT);
      expect(aboutItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.about');

      const termsOfUseItem = result[10];
      expect(termsOfUseItem.key).toBe(utilityHelpers.defaultKeys.TERMS_OF_USE);
      expect(termsOfUseItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.termsOfUse');

      expect(mockIntl.formatMessage.mock.calls.length).toBe(11);
    });

    it('returns the default set merged with custom items', () => {
      const mockIntl = {
        formatMessage: jest.fn(messageData => (`mock-${messageData.id}`)),
      };

      const result = utilityHelpers.getDefaultUtilityItems(mockIntl, { name: 'test', detail: 'detail' }, [{
        key: 'custom-item',
        title: 'CUSTOM ITEM',
        parentKey: utilityHelpers.defaultKeys.MENU,
      }, {
        key: 'custom-item-on-child',
        title: 'CUSTOM ITEM ON EXISTING SECURITY LEAF',
        parentKey: utilityHelpers.defaultKeys.SECURITY,
      }, {
        key: 'no-parent-key-item',
        title: 'I WONT SHOW UP CAUSE I HAVE NO PARENT KEY',
      }, {
        key: 'wrong-parent-key-item',
        title: 'I WONT SHOW UP CAUSE I HAVE A PARENT KEY THAT DOESNT MATCH',
      }]);

      expect(result.length).toBe(15);

      const menuItem = result[0];
      expect(menuItem.key).toBe(utilityHelpers.defaultKeys.MENU);
      expect(menuItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.menu');
      expect(menuItem.childKeys).toEqual([utilityHelpers.defaultKeys.USER_INFORMATION, utilityHelpers.defaultKeys.SETTINGS, utilityHelpers.defaultKeys.HELP, utilityHelpers.defaultKeys.LOG_OUT, 'custom-item']);

      const securityItem = result[7];
      expect(securityItem.key).toBe(utilityHelpers.defaultKeys.SECURITY);
      expect(securityItem.title).toBe('mock-Terra.applicationLayout.utilityDefaults.security');
      expect(securityItem.childKeys).toEqual(['custom-item-on-child']);

      const customItem = result[11];
      expect(customItem.key).toBe('custom-item');
      expect(customItem.title).toBe('CUSTOM ITEM');

      const customSecurityItem = result[12];
      expect(customSecurityItem.key).toBe('custom-item-on-child');
      expect(customSecurityItem.title).toBe('CUSTOM ITEM ON EXISTING SECURITY LEAF');

      expect(mockIntl.formatMessage.mock.calls.length).toBe(11);
    });
  });
});
