 import React, { useState } from "react";
 import { Button, Dialog } from '@material-ui/core'
 import Form from "./Form";

 
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

        <Dialog open={open} onClose={handleClose}>
          <Form handleClose={handleClose}/>
        </Dialog>
      </div>
   )
 }
 
 export default SignUp