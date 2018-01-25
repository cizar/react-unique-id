import React from 'react'

let id = 0

export default (WrappedComponent) => (props) => (
  <WrappedComponent id={id++} {...props} />
)
