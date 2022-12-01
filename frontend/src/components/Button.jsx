import React from 'react'

function Button({ type, disabled, name, message }) {
  return (
    <button
      type={type}
      disabled={disabled ? true : false}
      className={`btn btn-${name}`}
    >
      {message}
    </button>
  )
}

export default Button
