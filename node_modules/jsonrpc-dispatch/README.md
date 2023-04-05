# JSONRPC Dispatch

[![NPM version](http://img.shields.io/npm/v/jsonrpc-dispatch.svg)](https://www.npmjs.org/package/jsonrpc-dispatch)
[![Build Status](https://travis-ci.org/cerner/jsonrpc-dispatch.svg?branch=master)](https://travis-ci.org/cerner/jsonrpc-dispatch)

JSONRPC is a module for managing [JSONRPC](http://json-rpc.org) requests and
responses in JavaScript.

This implementation is agnostic of the transport mechanism to send and receive
JSONRPC messages.  This means it can be easily integrated with XMLHttpRequests,
HTTPServer, and postMessage cross domain messaging.
A few of the features included are:

* Async request/response support using promises
* Method handling for JSONRPC requests
* Method not found handling

## Includng JSONRPC

Add `jsonrpc-dispatch` to your package.json

```
npm install jsonrpc-dispatch --save
```

Require the JSONRPC constructor into the module.

```js
import JSONRPC from 'jsonrpc-dispatch'
```
## Using JSONRPC

The JSONRPC takes 2 arguments: a dispatcher and an object mapping of
methods it will take requests for.


```js
const jsonrpc = new JSONRPC([dispatcher], [methods]);
```

| name       | type     | description                                                                                                                                 |
|------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| dispatcher | function | A handler which is passed the JSONRPC message object to send.                                                                               |
| methods    | object   | A mapping of method names to function objects which the JSONRPC instance will handle requests for. The functions **must** return a promise. |

### Example
The below example creates a JSONRPC instance which supports a single API to add
parameters together. The result is sent through the dispatcher to the parent
frame using the `postMessage` API.

```js
const methods = {
  add(x, y) {
    // Always return a promise
    return Promise.resolve(x + y);
  }
};

const dispatcher = (message) => {
  // Post a message to the parent frame
  parent.postMessage(message, 'https://trustedDomain.com');
};

const jsonrpc = new JSONRPC(dispatcher, methods);
```

### JSONRPC#request
http://www.jsonrpc.org/specification#request_object

Sends a JSONRPC request to the provided dispatcher. The request takes 2
parameters

| name       | type            | description                                          |
|------------|-----------------|------------------------------------------------------|
| name       | String          | The method name to send the request for              |
| parameters | Array or Object | (Optional) The parameters to pass to the method call |

Returns an instance of a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which is resolved or rejected when the response is received.

```js
jsonrpc.request('foobar', ['biz', 'baz']).then((result) => {
  // TODO: do something with result
});
```


### JSONRPC#notification
http://www.jsonrpc.org/specification#notification

Sends a JSONRPC notification request to the provided dispatcher.
Notifications are similar to requests but do not have any responses and thus
do not return a promise. Notifications take 2 parameters:


| name       | type            | description                                          |
|------------|-----------------|------------------------------------------------------|
| name       | String          | The method name to send the request for              |
| parameters | Array or Object | (Optional) The parameters to pass to the method call |

```js
jsonrpc.notification('foobar', ['biz', 'baz']);
```



### JSONRPC#handle

Processes incoming JSONRPC messages to be handled as requests, responses
or notifications. Handle takes a single argument:

| name    | type   | description                                                                                                                                         |
|---------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| message | Object | A JSONRPC [request](http://www.jsonrpc.org/specification#request_object) or [response](http://www.jsonrpc.org/specification#response_object) object |

```js
jsonrpc.handle({
  id: '1',
  method: 'add',
  params: [1, 2],
  jsonrpc: '2.0'
});

```

## Examples

### AJAX with jQuery

Here is an example usage using AJAX as a transport mechanism to call a JSONRPC
service which handles adding 2 numbers together.

```js
// 1. Create new JSONRPC instance which only makes requests.
// Pass a dispatcher to post the messages to a server using jQuery.
// Have the dispatcher pass the AJAX response to the jsonrpc#handle method.
const jsonrpc = new JSONRPC((message) => {
  $.post('/jsonrpc-service', message, jsonrpc.handle.bind(jsonrpc), 'json')
})

// 2. Send a JSONRPC request then print out the result
jsonrpc.request('add', [1,2]).then((result) => {
  console.log('1 + 2 = ', result)
});
```


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## LICENSE

Copyright 2016 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
