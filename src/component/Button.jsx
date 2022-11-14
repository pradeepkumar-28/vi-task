import React from 'react'
import { EuiButton } from '@elastic/eui'

function Button({title, className, onClick, icon}) {
  return (
    <EuiButton className={className} onClick={onClick} iconType={icon}>{title} </EuiButton>
  )
}

export default Button