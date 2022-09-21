import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'


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

function Form( { handleClose } ) {

  const classes = useStyles();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSignup = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  }

  return (
      <form className={classes.root} onSubmit={handleSignup}>
        <TextField 
          label="First Name" 
          variant="filled" 
          required
          value={firstName}
          onChange = {(e) => setFirstName(e.target.value)}
        />

        <TextField 
          label="Last Name" 
          variant="filled" 
          required
          value={lastName}
          onChange = {(e) => setLastName(e.target.value)}
        />

        <TextField 
          label="Email" 
          variant="filled" 
          type="email" 
          required
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />

        <TextField 
          label="Password" 
          variant="filled" 
          type="password" 
          required
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Signup</Button>
        </div>
      </form>
  )
}

export default Form