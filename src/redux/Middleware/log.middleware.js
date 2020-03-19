const loggingMiddleware = state => next => action => {
  console.log("dispatching action>>>" + action.type)
  next(action)
}
export default loggingMiddleware