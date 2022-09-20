 import React, { useState } from "react";
 import { Button } from '@material-ui/core'
 import ModalDialog from "./ModalDialog";
 
 function SignUp() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

   return (
      <div className="signUp">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          SIGNUP
        </Button>

        <ModalDialog open={open} handleClose={handleClose}/>
      </div>
   )
 }
 
 export default SignUp