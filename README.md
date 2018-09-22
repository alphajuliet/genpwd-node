# genpwd-node

Port of the veritable [GenPwd](https://github.com/alphajuliet/GenPwd) app from client-side to server-side on Node JS.

The HTML5 front end is gone, and is replaced by a simple function called
`generate(...)` in the `src/genpwd.js` source file. It returns a list of
randomly-generated words, based on the chosen generator, and in accordance with
the provided options. See `src/index.js` for how to use it.

This is a step on the journey to turning this into a (serverless) function-as-a-service with a
fully decoupled front-end.

# Instructions

To install and run, clone this repo, run `npm install` and the `npm run gen`. It
uses `src/index.js` as a simple client, so adjust your parameters to `generate()` there.

There are currently four different generators, numbered 0-3 as the `genId`
parameter. The others are self-explanatory.

The only external dependency is on the awesome [Ramda JS](https://ramdajs.com/).

