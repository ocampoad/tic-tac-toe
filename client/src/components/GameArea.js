import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import Gameboard from './Gameboard'
import UserInfoBar from './UserInfoBar'


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid  display="flex" justifyContent="center" alignItems="center" flexDirection={'column'}>
        <Gameboard/>
        { false ?  <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Log In to track your wins
        </Typography> : <UserInfoBar/>}
       
        </Grid>
        
      </CardContent> 
    </Card>
  );
}
