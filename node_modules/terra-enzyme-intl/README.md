<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-enzyme-intl/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Enzyme Intl
</h1>

[![NPM version](https://badgen.net/npm/v/terra-enzyme-intl)](https://www.npmjs.org/package/terra-enzyme-intl)
[![License](https://badgen.net/github/license/cerner/terra-enzyme-intl)](https://github.com/cerner/terra-enzyme-intl/blob/master/LICENSE)
[![Build Status](https://badgen.net/travis/cerner/terra-enzyme-intl)](https://travis-ci.com/cerner/terra-enzyme-intl)
[![Dependencies status](https://badgen.net/david/dep/cerner/terra-enzyme-intl)](https://david-dm.org/cerner/terra-enzyme-intl)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-enzyme-intl)](https://david-dm.org/cerner/terra-enzyme-intl?type=dev)

Enzyme helpers for fortifying tests that depend on react-intl by decoupling the need for actual translations. See: [react-intl documentation](https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl#helper-function-1)

## Getting Started

Install with [npmjs](https://www.npmjs.com):

* `npm install --save-dev terra-enzyme-intl`
* `yarn add --dev terra-enzyme-intl`

## Usage

This package adds the following helpers for testing React components with [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) that use the [react-intl](https://github.com/yahoo/react-intl) APIs. Your `mount()`ed and `shallow()`ed components need access to the intl context to render properly.

In you Jest config, add the following config

```
 moduleNameMapper: {
    intlLoaders: 'terra-enzyme-intl',
    translationsLoaders: 'terra-enzyme-intl',
 },
```

### shallowWithIntl

The `shallowWithIntl` method is a decorated version of [enzyme's shallow](https://airbnb.io/enzyme/docs/api/shallow.html#shallow-rendering-api) that injects a mock version of the [react-intl](https://github.com/yahoo/react-intl/wiki/API#intlshape) `intl` object into your component as well as set up the required `intl` context for either `<Formatted* />` components or `format*()` methods through `injectIntl()`.

See:

* [react-intl documenation](https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl#helper-function-1)
* [enzyme shallow options](https://airbnb.io/enzyme/docs/api/shallow.html#shallownode-options--shallowwrapper)

#### shallowWithIntl Example

```jsx
import React from 'react';
import { injectIntl } from 'react-intl';
import { shallowWithIntl } from 'terra-enzyme-intl';

const CustomComponent = injectIntl(({
  intl,
  ...otherProps,
}) => (
  <div>
    <FormattedMessage id="TerraEnzymeIntl.helloWorld" />
    <Button text={intl.formatMessage({ id: 'TerraEnzymeIntl.buttonText' })} />
  </div>
));

const shallowWrapper = shallowWithIntl(<CustomComponent />);

expect(shallowWrapper).toMatchSnapshot(); // OK, doesn't depend on real translations

/* EXAMPLE SNAPSHOT BELOW */
<div>
  <FormattedMessage
    id="TerraEnzymeIntl.helloWorld"
    values={Object {}}
  />
  <Button
    text="TerraEnzymeIntl.buttonText"
  />
</div>
```

### mountWithIntl

The `mountWithIntl` method is a decorated version of [enzyme's mount](https://airbnb.io/enzyme/docs/api/mount.html) that injects a mock version of the [react-intl](https://github.com/yahoo/react-intl/wiki/API#intlshape) `intl` object into your component as well as set up the required `intl` context for either `<Formatted* />` components or `format*()` methods through `injectIntl()`.

See:

* [react-intl documenation](https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl#helper-function-1)
* [enzyme mount options](https://airbnb.io/enzyme/docs/api/mount.html#mountnode-options--reactwrapper)

#### mountWithIntl Example

```jsx
import React from 'react';
import { injectIntl } from 'react-intl';
import { mountWithIntl } from 'terra-enzyme-intl';

const CustomComponent = injectIntl(({
  intl,
  ...otherProps,
}) => (
  <div>
    <FormattedMessage id="TerraEnzymeIntl.helloWorld" />
    <Button text={intl.formatMessage({ id: 'TerraEnzymeIntl.buttonText' })} />
  </div>
));

const mountWrapper = mountWithIntl(<CustomComponent />);

expect(mountWrapper).toMatchSnapshot(); // OK, doesn't depend on real translations

/* EXAMPLE SNAPSHOT BELOW */
<div>
  <FormattedMessage
    id="TerraEnzymeIntl.helloWorld"
    values={Object {}}
  />
  <Button
    text="TerraEnzymeIntl.buttonText"
  />
</div>
```

### renderWithIntl

The `renderWithIntl` method is a decorated version of [enzyme's render](https://airbnb.io/enzyme/docs/api/render.html) that injects a mock version of the [react-intl](https://github.com/yahoo/react-intl/wiki/API#intlshape) `intl` object into your component as well as set up the required `intl` context for either `<Formatted* />` components or `format*()` methods through `injectIntl()`.

See:

* [react-intl documenation](https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl#helper-function-1)

#### renderWithIntl Example

```jsx
import React from 'react';
import { injectIntl } from 'react-intl';
import { renderWithIntl } from 'terra-enzyme-intl';

const CustomComponent = injectIntl(({
  intl,
  ...otherProps,
}) => (
  <div>
    <FormattedMessage id="TerraEnzymeIntl.helloWorld" />
    <Button text={intl.formatMessage({ id: 'TerraEnzymeIntl.buttonText' })} />
  </div>
));

const renderWrapper = renderWithIntl(<CustomComponent />);

expect(renderWrapper).toMatchSnapshot(); // OK, doesn't depend on real translations

/* EXAMPLE SNAPSHOT BELOW */
<div>
  <span>
    TerraEnzymeIntl.helloWorld
  </span>
  <button
    type="button"
  >
    TerraEnzymeIntl.buttonText
  </button>
</div>
```

### shallowContext

If you would wrather use [enzyme's shallow](https://airbnb.io/enzyme/docs/api/shallow.html#shallow-rendering-api), you can pass the `shallowContext` as the second argument to `shallow`.

#### shallowContext Example

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import { injectIntl } from 'react-intl';
import { shallowContext } from 'terra-enzyme-intl';

const CustomComponent = injectIntl(({
  intl,
  ...otherProps,
}) => (
  <div>
    <FormattedMessage id="TerraEnzymeIntl.helloWorld" />
    <Button text={intl.formatMessage({ id: 'TerraEnzymeIntl.buttonText' })} />
  </div>
));

const shallowWrapper = shallow(<CustomComponent />, shallowContext);

expect(shallowWrapper).toMatchSnapshot(); // OK, doesn't depend on real translations

/* EXAMPLE SNAPSHOT BELOW */
<div>
  <FormattedMessage
    id="TerraEnzymeIntl.helloWorld"
    values={Object {}}
  />
  <Button
    text="TerraEnzymeIntl.buttonText"
  />
</div>
```

### mountContext

If you would wrather use [enzyme's mount](https://airbnb.io/enzyme/docs/api/mount.html), you can pass the `mountContext` as the second argument to `mount`.

#### mountContext Example

```jsx
import React from 'react';
import { mount } from 'enzyme';
import { injectIntl } from 'react-intl';
import { mountContext } from 'terra-enzyme-intl';

const CustomComponent = injectIntl(({
  intl,
  ...otherProps,
}) => (
  <div>
    <FormattedMessage id="TerraEnzymeIntl.helloWorld" />
    <Button text={intl.formatMessage({ id: 'TerraEnzymeIntl.buttonText' })} />
  </div>
));

const mountWrapper = mount(<CustomComponent />, mountContext);

expect(mountWrapper).toMatchSnapshot(); // OK, doesn't depend on real translations

/* EXAMPLE SNAPSHOT BELOW */
<div>
  <FormattedMessage
    id="TerraEnzymeIntl.helloWorld"
    values={Object {}}
  />
  <Button
    text="TerraEnzymeIntl.buttonText"
  />
</div>
```

### mockIntl

If you have a method that depends on the [react-intl](https://github.com/yahoo/react-intl/wiki/API#intlshape) `intlShape` API, you can pass it the `mockIntl` object.

```js
import { mockIntl } from 'terra-enzyme-intl';

const foo = (id, intl) => {
  if (id) {
    return intl.formatMessage({ id });
  }

  return intl.formatMessage({ id: 'TerraEnzymeIntl.missingId' });
};

const id = 'Foo.id';
const result = foo(id, mockIntl);
expect(result).toMatchSnapshot(); // OK, doesn't depend on real translations
```
