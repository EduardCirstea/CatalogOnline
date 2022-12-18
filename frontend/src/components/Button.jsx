import React from 'react'

function Button({ onSubmit, type, disabled, name, message }) {
  return (
    <button
      onSubmit={() => onSubmit}
      type={type}
      disabled={disabled ? true : false}
      className={`btn btn-${name}`}
    >
      {message}
    </button>
  )
}

export default Button
