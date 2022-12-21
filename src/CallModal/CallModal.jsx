import React from 'react'
import './CallModal.css'

const CallModal = ({handleClose, name}) => {
  return (
    <div className='call-modal d-flex justify-content-center'>
      <div className="call_inner-modal text-center">
        <div className="close">
          <button onClick={() => handleClose()} className='btn-close'></button>
        </div>
        <h1 className='call-text'>Calling <span className='call-name'>{name}</span>...</h1>
      </div>
    </div>
  )
}

export default CallModal