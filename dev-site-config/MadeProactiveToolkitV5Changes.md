# Proactively Make Toolkit v5 Changes While Using v4
Toolkit v5 will be introducing new test helpers, updating the chrome version being tested and will remove a global refresh in the wdio configuration which will change how tests need to be written. Most of the changes you will want to make can be made before updating to v5 because we have included these new test helpers in terra-toolkit v4.29.0 release.

## Can I Upgrade Yet?

- Are you using orion-toolkit-js?
- Are you using the Orion Jenkins infrastructure?
- Are you using the Orion Selenium Grid?

If you answered yes to any of these questions, then sadly _**NO**_, you cannot use terra-toolkit v5 at this time.

There is additional work to uplift the internal test tools but more information will be provided when these are available. We just wanted to provide v5 information so teams are aware of upcoming changes and can make iterative changes now.

Wait, I s

## So, What Are the Test Improvements?
These changes will:
1. enabled writing correct Mocha syntax 
2. improve test readability
3. allow for explicit control of the browser integration workflow being tests
4. improve test times 
4. decrease unnecessary test steps and viewport resizes

When uplifting terra-framework to toolkit v5, we reduced our total test time by 12 minutes! And we can still make further spec improvements!

## Why these changes?

It was not clear in `toolkit <v4` that the `Terra.should` tests helpers were actually Mocha `it` blocks. These caused "magical" test execution and unexpected browser behaviors and it affected how test could be written. 

Additionally, the global refresh decreased test stability and often 'hid' buggy behavior by chopping the browser integration testing into pieces rather than testing the behavior of full integration workflow.

<details>
<summary>How many time did you accidentally write the following in a wdio spec?</summary>


```js
const viewports = Terra.viewports(['tiny', 'small']);

describe('magical failure', () => {
  before(() => browser.url('#/raw/tests/open-popup'));

  Terra.should.matchScreenshot({ viewports });
  // result - the viewport resize collapsed the popup so the small screenshot is incorrect
});

describe('or different magical failure', () => {
  before(() => browser.url('#/raw/tests/popup'));

  browser.click('#triggerPopup');
  // the click is never executed because it needs to be in an Mocha it block
  // although Terra.should.matchScreenshot didn't need to be??
  browser.waitForExists('#popup');
  browser.moveToObject('#popupContent');

  Terra.should.matchScreenshot({ viewports });
  // result - the popup never opens so the screenshot is incorrect
});

describe('the resulting badly written test that works', () => {
  beforeEach(() => {
    browser.url('#/raw/tests/popup');
    browser.click('#triggerPopup');
    browser.waitForExists('#popup');
    browser.moveToObject('#popupContent');
  });
  
  Terra.should.matchScreenshot({ viewports });
  // possible result- failure in before hook, but we aren't sure which step
});

describe('well written test that is understandable ', () => {
  it('goes to test page', () => {
    browser.url('#/raw/tests/popup')
  });

  it('opens the popup', () => {
    browser.click('#triggerPopup');
    browser.waitForExists('#popup');
  });

  it('moves the mouse to prevent hover styles', () => {
    browser.moveToObject('#popupContent');
  });

  Terra.it.matchesScreenshot();
});
```
</details>

## What Can I Do Now?

### Step 1. Replace `Terra.should` Mocha-chai helpers
The `Terra.should` test helpers have been removed in toolkit v5, however we have provide two new test helper options with the same functionality: `Terra.it` and `Terra.validates`.

#### Replace with `Terra.it` Mocha-chai helpers
The `Terra.it` Mocha-chai helpers will be an almost 1-to-1 replacement of the `Terra.should` test helpers. To migrate to these helpers should be simple.

These new test helpers are:

- Terra.it.isAccessible()
- Terra.it.matchesScreenshot()
- Terra.it.validatesElement()

You can start using these new helpers now and can start updating existing specs to eliminate the need to make changes in the future. 

With these:
- `Terra.it.isAccessible()` no longers supports the `context` option.
- `Terra.it.matchesScreenshot()` no longers supports the `viewportChangePause` option.

If your current code utilizes these remove options, remove them to use the default values.


#### Or use `Terra.validates` chai helpers
An alternative to the `Terra.it` Mocha-chai helpers are the `Terra.validates` chai helpers. These are test helpers intended to be used in a Mocha `it` block directly.

These new test helpers are:
- Terra.validates.accessibility()
- Terra.validates.screenshot()
- Terra.validates.element()

This enables syntax like:
```js
it('open and check screenshot', () => {
    browser.click('#openToggle');
    Terra.validates.screenshot();
});
```

### Step 2. Remove passing `viewports` to test helpers
Currently several Terra test helpers support testing multiple viewports by passing a list of viewports to test helpers. **This is no longer a recommended option**. Passing viewport results in more viewport resizes than necessary, which slows down tests and can cause bizarre behaviors in some responsive UI tests. 

For example,
```js
const viewports = Terra.viewports('tiny', 'small', 'huge');
describe('test', () => {
  before(() => browser.url('/#/raw/tests/test'));

  Terra.should.beAccessible({ viewports });
  Terra.should.matchScreenshot({ viewports });
});
```
See the problem? The viewport was resized 6 times for this small spec, when it can be optimized to only preform 3 resizes. If you have a long spec, this can have a larger impact on test time.

So we recommend looping viewports instead like:
```js
const viewports = Terra.viewports('tiny', 'small', 'huge');
viewports.forEach((viewport) => {
  describe('test', () => {
    before(() => {
      browser.url('/#/raw/tests/test')
      browser.setViewport(viewport);
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  })
});
```

Thus, we have introduced the `Terra.describeViewports` Mocha `describe` helper!

#### Simplify with `Terra.describeViewports`
This helper is intended to be a top-level Mocha `describe` block. You pass the describe description, the test viewports and the test callback to execute and we will manger looping the viewports for you.

This helper:
- enables condense test code
- aligns how and when viewports resized in tests
- enable form factor testing that can be run in parallel in build systems

This enables syntax like:
```js
Terra.describeViewports('test', ['tiny', 'small', 'huge'], () => {
  before(() => browser.url('/#/raw/tests/test'));

  Terra.should.beAccessible();
  Terra.should.matchScreenshot();
});
```

This still allows test to be runs like:
```bash
> npm run wdio
```

But then, if your project supports locale and form factor testing, you can disable the formFactor options in the tt-wdio runner to run tests faster locally (yay):
```
> npm run tt-wdio --locales ['en', 'es', 'pt'] --formFactors ['undefined']
```

## References:
These are provided in docs throughout toolkit but here they are for quick reference:
- wdio api: http://v4.webdriver.io/api.html
- mocha test framework docs: https://mochajs.org/
- chai assertion library docs: https://www.chaijs.com/
- quick reference to mocha execution: https://gist.github.com/harto/c97d2fc9d0bfaf20706eb2acbf48c908