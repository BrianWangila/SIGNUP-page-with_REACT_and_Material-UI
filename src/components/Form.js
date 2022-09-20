import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "300px"
    },

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2)
    }
  }
}));

function Form() {

  const classes = useStyles();
  const [firstName, setFirstName] = useState("")

  return (
    <form className={classes.root}>
      <TextField label="First Name" variant="filled" required/>
      <TextField label="Last Name" variant="filled" required/>
      <TextField label="Email" variant="filled" type="email" required/>
      <TextField label="Password" variant="filled" type="password" required/>
      <div>
        <Button variant="contained">Cancel</Button>
        <Button variant="contained">Signup</Button>
      </div>
    </form>
  )
}

export default Form