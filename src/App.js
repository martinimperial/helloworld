import {
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Paper,
} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import React from 'react';
import RecipeReviewCard from "./Components/RecipeReviewCard";
import EnhancedTable from "./Components/EnhancedTable";
import MortgageCalc from "./Components/MortgageCalc";

function App() {
  const [page, setPage] = React.useState('home');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid item xs={false} sm={12}>
  <AppBar position="static">
    <Toolbar>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
        <CatchingPokemonIcon />
      </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit' id='resources-button' 
          onClick={handleClick}
          aria-controls={open ? 'resources-menu' : undefined}
          aria-aria-haspopup = 'true'
          aria-expanded = {open? 'true' : undefined}
          >Resources</Button>
          <Button color='inherit'>Login</Button>
        </Stack>
        <Menu id='resources-menu' anchorEl={anchorEl} open={open}
              MenuListProps={{'aria-labelledby': 'resources-button'}}
              onClose={handleClose}>
          <MenuItem onClick={()=>{
            setPage('home');
            handleClose();
          }}>home</MenuItem>
          <MenuItem onClick={()=>{
            setPage('table');
            handleClose();
          }}>Blog</MenuItem>
          <MenuItem onClick={()=>{
            setPage('card');
            handleClose();
          }}>Podcast</MenuItem>
        </Menu>

    </Toolbar>
  </AppBar>
  </Grid>
  <Grid container item xs={12}  direction="column"
  justifyContent="center"
  alignItems="center">
    <Grid item xs={12} >
    {page === 'home'? <RecipeReviewCard /> : page === 'table'? <EnhancedTable /> : <MortgageCalc />}        
  </Grid>
  </Grid>
</Grid>
  );
}

export default App;
