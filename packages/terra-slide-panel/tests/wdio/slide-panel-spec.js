/* global browser, Terra, before */

describe('Slide panel end', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  beforeEach(() => browser.url('/#/raw/tests/slide-panel/slide-panel-end'));

  Terra.should.beAccessible();
});

// describe('Slide panel fill', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-fill');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
// describe('Slide panel fullscreen', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-fullscreen');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
// describe('Slide panel large', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-large');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
// describe('Slide panel no fill', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-no-fill');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
// describe('Slide panel overlay', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-overlay');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
// describe('Slide panel small', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-small');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
// describe('Slide panel squish', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-squish');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
// describe('Slide panel start', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-start');
//   });
//
//   Terra.should.matchScreenshot();
//   Terra.should.beAccessible();
// });
//
//
// describe('Large size squished slide panel', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-squish-large');
//   });

  // Terra.should.matchScreenshot();
  // Terra.should.beAccessible();
  // Terra.should.themeEachCustomProperty({
  //   '--terra-slide-panel-panel-width-large-scalar': '0.8',
  // });
//});
//
// describe('Toggle the slide panel and hidden styles', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-toggle');
//     browser.waitForExist('#test-slide [aria-hidden="true"]');
//   });
//
//   Terra.should.matchScreenshot();
// });
//
// describe('Toggle the slide panel click', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-toggle');
//     browser.click('#test-toggle');
//     browser.waitForExist('#test-slide [aria-hidden="false"]');
//     browser.pause(150);
//   });
//
//   Terra.should.matchScreenshot();
// });
//
// describe('Toggle the slide panel double click', () => {
//   before(() => browser.setViewportSize(Terra.viewports('large')[0]));
//   beforeEach(() => {
//     browser.url('/#/raw/tests/slide-panel/slide-panel-toggle');
//     browser.click('#test-toggle');
//     browser.waitForExist('#test-slide [aria-hidden="false"]');
//     browser.pause(150);
//     browser.click('#test-toggle');
//     browser.waitForExist('#test-slide [aria-hidden="true"]');
//     browser.pause(150);
//   });
//
//   Terra.should.matchScreenshot();
// });
