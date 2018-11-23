# jetblack-graphql-reconnect-client

This is work in progress

## Overview

A simple non-caching GraphQL client with reconnect for query, mutation and subscription.

This package adds reconnect capability to the GraphQL subscriber from @jetblack/graphql-client.

## Installation

Install from npm.

```bash
yarn add @jetblack/graphql-reconnect-client
```

# Usage

There are two functions:

 * `graphQLReconnectingSubscriber (url, options, callback, delay = 1000, maxRetries = 0, protocols = 'graphql-ws')`
 * `graphQLRetryFetch (url, query, variables = {}, operationName = null, headers = {}, method = 'post')`

The `graphQLReconnectingSubscriber` implements the `WebSocket` protocol. The function takes the
`url` for the `WebSocket`, an `options` object which is simply passed as JSON to the
server, and a `callback` with the prototype `(error, subscribe)`. A function is returned
which can be used to shutdown the subscriber.
If both `error` and `subscribe` are `null` the connection has been closed normally.

The `subscribe` argument is a function with the prototype `subscribe(query, variables, operationName, callback)`.
When `subscribe` is called it returns a function that can be called to unsubscribe.
The `callback` to the `subscribe` function has the prototype `callback(error, data)`. If
both `error` and `data` are `null` then connection hs been closed normally.
The `delay` is specified in milliseconds. The `maxRetries`
will limit the number of retries unless set to 0 which means unlimited.

The `graphQLRetryFetch` function is a simple `fetch` implementation for `query` and `mutation` operations.
The `method` defaults to `'post'`, but `'get'` is also valid.
The `protocols` defaults to `"graphql-ws"`. The documentation suggests this can be an array or strings, but the first should be the default.
The `delay` is specified in milliseconds. The `maxRetries`
 will limit the number of retries unless set to 0 which means unlimited.
 The `retryOn` argument is an array of status codes for which retry will be attempted.

# Examples

See the `graphQLSubscriber` from @jetblack/graphql-client for examples.