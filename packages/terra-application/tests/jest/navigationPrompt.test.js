import NavigationPrompt, { NavigationPromptCheckpoint, PromptRegistrationContext } from '../../src/navigation-prompt'; // eslint-disable-line import/named

describe('navigationPrompt', () => {
  it('should export NavigationPrompt', () => {
    expect(NavigationPrompt).toBeDefined();
  });

  it('should export NavigationPromptCheckpoint', () => {
    expect(NavigationPromptCheckpoint).toBeDefined();
  });

  it('should export PromptRegistrationContext', () => {
    expect(PromptRegistrationContext).toBeDefined();
  });
});
