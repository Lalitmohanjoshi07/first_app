import React from 'react'

export default function Alert(props) {
  return (
    props.msg && <div className="alert alert-success alert-dismissible fade show" role="alert">
      {props.msg}
    </div>
  )
}
