# genpwd-node

Port of the vertiable [GenPwd](https://github.com/alphajuliet/GenPwd) app from client to server on Node JS.

This is a learning journey to making this into a serverless function-as-a-service with a
fully decoupled front-end.

# Instructions

To install and run, clone this repo, run `npm install` and the `npm run gen`. It
uses `src/index.js` as a simple client, so adjust your parameters to `generate` there.

There are currently four different generators, numbered 0-3 as the `genId`
parameter. The others are self-explanatory.

The only external dependency is on the awesome [Ramda JS](https://ramdajs.com/).

