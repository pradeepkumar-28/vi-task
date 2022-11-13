import React from 'react'
import { EuiButton } from '@elastic/eui'

function Button({title, className, onClick}) {
  return (
    <EuiButton className={className} onClick={onClick}>{title} </EuiButton>
  )
}

export default Button