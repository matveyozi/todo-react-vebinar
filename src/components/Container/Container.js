import React from 'react'
import cssModlue from './Container.module.css'


export default function Container({children}) {
  return (
	<div className={cssModlue.container}>{children}</div>
  )
}
