import "./App.css";
import RecipeReviewCard from "./Components/RecipeReviewCard";
import Grid from "@mui/material/Grid";
import MediaControlCard from "./Components/MediaControlCard";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import React, { useState } from "react";
import { Button } from "@mui/material";
import BasicRating from "./Components/BasicRatings";
function App() {
  const  [page, setPage] = useState(0);
 
     
    const getPage = ()=>{
      if( page===0){
        return <RecipeReviewCard />
      }
      else if( page===1){
        return <MediaControlCard />
      }
      else if( page===2){
        return <BasicRating />
      }
      else if(page>2){
        setPage(0);
        return <RecipeReviewCard />
      }
  }
 
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sx={{ marginTop: 10, marginBottom: 20 }}>
        <Button onClick={()=>{setPage(page+1)}} >Menu</Button>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 10, marginBottom: 20 }}>
        {getPage()}
      </Grid>
    </Grid>
  );
}

export default App;
