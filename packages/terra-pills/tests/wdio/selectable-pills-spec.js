// Terra.describeViewports('Selectable Pills', ['small'], () => {
//   describe('Keyboard Nav - ', () => {
//     describe('Single line pills', () => {
//       before(() => {
//         browser.url('/raw/tests/cerner-terra-framework-docs/pills/selectable-pills/collapsible-selectable-pills');
//       });

//       it('should render collapsed pill with rollup', () => {
//         Terra.validates.element('single line');
//       });

//       it('should focus the first pill', () => {
//         browser.keys('Tab');
//         Terra.validates.element('focus first pill');
//       });

//       it('should focus the roll up pill', () => {
//         browser.keys(['ArrowRight', 'ArrowRight']);
//         Terra.validates.element('focus roll up pill');
//       });

//       it('should reveal all collapsed pills', () => {
//         browser.keys('Enter');
//         Terra.validates.element('reveal pills');
//       });
//     });

//     describe('Removable Pills', () => {
//       before(() => {
//         browser.url('/raw/tests/cerner-terra-framework-docs/pills/selectable-pills/selectable-and-removable-pill');
//       });

//       it('should render removable pills', () => {
//         Terra.validates.element('removable');
//       });

//       it('deleting preceding pill should remove the pill and set the succeeding pill tabindex 0', () => {
//         browser.keys(['Tab', 'Delete']);
//         Terra.validates.element('remove first pill');
//         expect($('#terra-pills-removable-pill-bronchitis').getAttribute('tabindex')).toEqual('0');
//       });
//     });

//     describe('Selectable Pills keyboard nav', () => {
//       before(() => {
//         browser.url('/raw/tests/cerner-terra-framework-docs/pills/selectable-pills/single-selectable-pill');
//       });

//       it('should render selectable pill', () => {
//         Terra.validates.element('selectable');
//       });

//       it('should open the pop up', () => {
//         browser.keys(['Tab', 'Enter']);
//         Terra.validates.element('open pop up', { selector: '#root' });
//       });

//       it('should close the pop up of first pill', () => {
//         browser.keys(['Escape']);
//         Terra.validates.element('close pop up and focus pill');
//       });
//     });
//   });

//   let viewportSize;
//   describe('Single line pills responsive - ', () => {
//     before(() => {
//       viewportSize = browser.getWindowSize();
//       browser.url('/raw/tests/cerner-terra-framework-docs/pills/selectable-pills/collapsible-selectable-pills');
//     });

//     it('Should render 2 pills before resize', () => {
//       Terra.validates.element('single line before resize');
//     });

//     it('Should collapse pills', () => {
//       browser.setWindowSize(viewportSize.width - 200, 1000);
//       Terra.validates.element('single line after resize');
//     });
//   });

//   it('Should open pop up on pill click', () => {
//     browser.url('/raw/tests/cerner-terra-framework-docs/pills/selectable-pills/single-selectable-pill');
//     $('#selectableAsthma').click();
//     Terra.validates.element('open popup click', { selector: '#root' });
//   });

//   it('should remove pill on clicking remove button', () => {
//     browser.url('/raw/tests/cerner-terra-framework-docs/pills/selectable-pills/selectable-and-removable-pill');
//     $('[aria-labelledby="remove-button-terra-pills-removable-pill-asthma"]').click();
//     Terra.validates.element('remove on click');
//   });
// });
