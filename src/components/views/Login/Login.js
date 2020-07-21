import React from 'react';
import styles from './Login.module.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// import { makeStyles } from '@material-ui/core/styles';

class Login extends React.Component {



  render() {

    return (
      <div className={styles.component}>

        <form className noValidate autoComplete="off">
          <Box p={5} display="flex" justifyContent="center" alignItems="center">
            <Box p={1}><TextField required id="standard-required" label="Login" />
            </Box>
            <Box p={1}>
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            <Box p={1}>
              <Button variant="contained" color="primary">
                Sign in
              </Button>
            </Box>
          </Box>
        </form>



      </div>


    );
  }
}

export default Login;
