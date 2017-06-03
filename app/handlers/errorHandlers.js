/*
  async/await, needs this catch errors
  Instead of using try{} catch(e) {} in each controller, wrap and async function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

exports.catchAsyncErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  };
}

/*
  Not Found Error Handler
*/
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
};

/*
  Development Error Hanlder

  In development, show error messages related to pug views
*/
exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || ''
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
  }
  res.status(err.status || 500)
  res.format({
    // Based on the `Accept` http header
    'text/html': () => {
      res.json({'error': errorDetails})
    }, // Form Submit, Reload the page
    'application/json': () => res.json(errorDetails) // Ajax call, send JSON back
  })
};

/*
  Production Error Handler

  Keep stack traces from user
*/
exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
};
