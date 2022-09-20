import React from 'react'
import { Dialog } from '@material-ui/core'
import Form from './Form'

function ModalDialog({ open, handleClose }) {


  return (
    <div>
      <Dialog open={open} onClose={handleClose}>

        <Form handleClose={handleClose}/>

      </Dialog>
    </div>
  )
}

export default ModalDialog

