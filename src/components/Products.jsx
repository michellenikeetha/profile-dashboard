import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <p>this is products page</p>
        <Link to="/" className='underline'>go to Dashboard</Link>
    </div>
  )
}
