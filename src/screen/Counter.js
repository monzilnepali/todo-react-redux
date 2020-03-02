import React from 'react'

function Counter({ count, increament, decrement }) {
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increament}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
