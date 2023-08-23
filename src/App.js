import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const [value, setValue] = React.useState("Hello World");
  const [valueContained, setValueContained] = React.useState("Hello World");


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Stack spacing={2} direction="row">
      <Button variant="text" onClick={()=>{
        setValue("Hello World, Martin!");
      }}>Hello</Button>
      <Button variant="contained" onClick={()=>{setValueContained("Hello World, Martin!")}}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
      </Grid>
      <Grid item xs={8}>
        <Item>{value}</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>{valueContained}</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>

      </Grid>
    </Grid>
  );
}

export default App;

