// const ignoredA11y = {
//   'aria-roles': { enabled: false },
// };
// let viewportSize;
// Terra.describeViewports('Truncated', ['medium'], () => {
//   before(() => {
//     viewportSize = browser.getWindowSize();
//     browser.url('/raw/tests/cerner-terra-framework-docs/pills/pills/single-pill-truncated-label');
//   });

//   it('display a long-text pill', () => {
//     Terra.validates.element('not truncated', { rules: ignoredA11y });
//   });

//   it('display a long-text pill truncated', () => {
//     browser.setWindowSize(viewportSize.width - 400, 1000);
//     Terra.validates.element('truncated');
//   });

//   it('validates focus on tab press', () => {
//     browser.keys('Tab');
//     Terra.validates.element('focused');
//   });

//   it('validates pop up open on pressing enter', () => {
//     browser.keys('Enter');
//     Terra.validates.element('popup open', { selector: '#root' });
//   });

//   it('validates pop up open on clicking pill', () => {
//     browser.keys('Escape');
//     $('#longLabelPill').click();
//     Terra.validates.element('popup open mouse click', { selector: '#root' });
//   });
// });

// Terra.describeViewports('Pills', ['small'], () => {
//   it('display a basic pill', () => {
//     browser.url('/raw/tests/cerner-terra-framework-docs/pills/pills/single-pill');
//     Terra.validates.element('basic pill', { rules: ignoredA11y });
//   });

//   it('should render multiple pills with long text', () => {
//     browser.url('/raw/tests/cerner-terra-framework-docs/pills/pills/pills-truncated-text');
//     Terra.validates.element('long text truncated', { rules: ignoredA11y });
//   });

//   describe('Single line pills', () => {
//     before(() => {
//       browser.url('/raw/tests/cerner-terra-framework-docs/pills/pills/collapsible-pills');
//     });

//     it('should render a collapsed pill with rollup', () => {
//       Terra.validates.element('single line', { rules: ignoredA11y });
//     });

//     it('should focus the first pill', () => {
//       browser.keys('Tab');
//       Terra.validates.element('focus first pill', { rules: ignoredA11y });
//     });

//     it('should focus the roll up pill', () => {
//       browser.keys('ArrowRight');
//       Terra.validates.element('focus roll up pill', { rules: ignoredA11y });
//     });

//     it('should reveal the collapsed pills', () => {
//       browser.keys('Enter');
//       Terra.validates.element('trigger roll up', { rules: ignoredA11y });
//     });
//   });

//   describe('Removable Pills', () => {
//     before(() => {
//       browser.url('/raw/tests/cerner-terra-framework-docs/pills/pills/removable-pill');
//     });

//     it('should render removable pills', () => {
//       browser.url('/raw/tests/cerner-terra-framework-docs/pills/pills/removable-pill');
//       Terra.validates.element('removable', { rules: ignoredA11y });
//     });

//     it('should focus the first focusable-pill', () => {
//       browser.keys('Tab');
//       Terra.validates.element('focus first removable-pill', { rules: ignoredA11y });
//     });

//     it('validates removing pill on pressing delete key ', () => {
//       browser.keys('Delete');
//       Terra.validates.element('delete focused pill ', { rules: ignoredA11y });
//     });
//   });
// });
