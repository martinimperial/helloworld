import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, IconButton, Grid, Paper, Stack, Tooltip } from "@mui/material";
import EnhancedTable from "./EnhancedTable";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import MortgageCalc from "./MortgageCalc";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [value, setValue] = React.useState("Hello World");
  const [valueContained, setValueContained] = React.useState("Hello World");


  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={5}
    >
      <Grid item xs={12}>
        <br />
        <br />
        <br />
        <br />
      </Grid>
      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <Stack spacing={2} direction="row">

        <Tooltip title="Wave">
          <IconButton
            variant="text"
            onClick={() => {
              setValue("Hello World, Martin!");
            }}
          >
            <WavingHandIcon />
          </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            onClick={() => {
              setValueContained("Hello World, Martin!");
            }}
          >
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Grid>

      <Grid item xs={12} sx={{ marginBottom: 5 }}>
        <Paper variant="outlined" elevation={3} sx={{ p: 6 }}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
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
        </Paper>
      </Grid>
      <Grid item xs={12}>
            <EnhancedTable />
            <MortgageCalc />
      </Grid>
    </Grid>
  );
}

export default App;
