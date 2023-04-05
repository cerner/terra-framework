import Module from 'module';
import test from 'ava';
import sinon from 'sinon';
import overrideRequire from './../src/overrideRequire';

test('when isOverride evaluates to false: does not override require', (assert) => {
  // eslint-disable-next-line id-match
  Module._load = () => {};

  // eslint-disable-next-line max-statements-per-line
  overrideRequire(() => {
    return false;
  }, () => {});

  const spy = sinon.spy(Module, '_load');

  // eslint-disable-next-line global-require, import/no-extraneous-dependencies, import/no-unassigned-import
  require('foo');

  assert.true(spy.calledOnce);
  assert.true(spy.calledWith('foo'));
});

test('when isOverride evaluates to true: overrides require', (assert) => {
  // eslint-disable-next-line id-match
  Module._load = () => {};

  const resolveOverride = sinon.stub().returns('bar');

  // eslint-disable-next-line max-statements-per-line
  overrideRequire(() => {
    return true;
  }, resolveOverride);

  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const result = require('foo');

  assert.true(resolveOverride.calledOnce);
  assert.is(result, 'bar');
});

test('returns function used to restore the original module resolution logic', (assert) => {
  const originalLoad = Module._load;

  // eslint-disable-next-line max-statements-per-line
  const restoreOriginalRequire = overrideRequire(() => {}, () => {});

  assert.not(Module._load, originalLoad);

  restoreOriginalRequire();

  assert.is(Module._load, originalLoad);
});
