/*
  async/await, needs this catch errors
  Instead of using try{} catch(e) {} in each controller, wrap and async function in catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

exports.catchAsyncErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

/*
  Not Found Error Handler
*/
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}

/*
  Development Error Handler
  In development, show error messages related to pug views
*/
exports.developmentErrors = (err, req, res, next) => {
  console.log('----error passed to dev errors. Message: ', err.message)
  err.stack = err.stack || ''
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
  }
  res.status(err.status || 500).json({'error': errorDetails})
}

/*
  Production Error Handler
  Keep stack traces from user
*/
exports.productionErrors = (err, req, res, next) => {
  console.log('----error passed to prodution errors. Message: ', err.message)
  err.stack = err.stack || ''
  const errorDetails = {
    message: err.message,
    status: err.status
  }
  res.status(err.status || 500).json({'error': errorDetails})
}
