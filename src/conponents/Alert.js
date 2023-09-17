import React from 'react'

export default function Alert(props) {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert" style={{display: props.obj.dis}}>
        {props.obj.message}
    </div>
  )
}
