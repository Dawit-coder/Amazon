import React from 'react'
import {FadeLoader} from 'react-spinners'

function Loader() {
  return (
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
    }}
    >

        <FadeLoader color="#ff9900" />      

    </div>
  )
}

export default Loader
