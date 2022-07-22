const context = {}

function defineGetter(target, key) {
  context.__defineGetter__(key, function () {
    return this[target][key]
  })
}

function defineSetter(target, key) {
  context.__defineSetter__(key, function (value) {
    this[target][key] = value
  })
}

// 如果是request上取值，就代理到原生req。如果去ctx上取值，就代理到ctx.request -> req
defineGetter('request', 'query')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response', 'body')
module.exports = context
