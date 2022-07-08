import React, { useEffect } from 'react'

const Alert = ({msg, type}) => {
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
