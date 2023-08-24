import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert as MuiAlert } from "@mui/material";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Alert = styled(MuiAlert)(spacing);

const repaymentTerm = [
  { label: "1 year", value: 1, id: 1 },
  { label: "2 years", value: 2, id: 2 },
  { label: "3 years", value: 3, id: 3 },
  { label: "4 years", value: 4, id: 4 },
  { label: "5 years", value: 5, id: 6 },
  { label: "6 years", value: 6, id: 6 },
  { label: "7 years", value: 7, id: 7 },
  { label: "8 years", value: 8, id: 8 },
  { label: "9 years", value: 9, id: 9 },
  { label: "10 years", value: 10, id: 10 },
  { label: "11 years", value: 11, id: 11 },
  { label: "12 years", value: 12, id: 12 },
  { label: "13 years", value: 13, id: 13 },
  { label: "14 years", value: 14, id: 14 },
  { label: "15 years", value: 15, id: 15 },
  { label: "16 years", value: 16, id: 16 },
  { label: "17 years", value: 17, id: 17 },
  { label: "18 years", value: 18, id: 18 },
  { label: "19 years", value: 19, id: 19 },
  { label: "20 years", value: 20, id: 20 },
  { label: "21 years", value: 21, id: 21 },
  { label: "22 years", value: 22, id: 22 },
  { label: "23 years", value: 23, id: 23 },
  { label: "24 years", value: 24, id: 24 },
  { label: "25 years", value: 25, id: 25 },
  { label: "26 years", value: 26, id: 26 },
  { label: "27 years", value: 27, id: 27 },
  { label: "28 years", value: 28, id: 28 },
  { label: "29 years", value: 29, id: 29 },
  { label: "30 years", value: 30, id: 30 },
  { label: "31 years", value: 31, id: 31 },
  { label: "32 years", value: 32, id: 32 },
  { label: "33 years", value: 33, id: 33 },
  { label: "34 years", value: 34, id: 34 },
  { label: "35 years", value: 35, id: 35 },
];

const MortgageCalcForm = (props) => {
  const { validationSchema, handleFormSubmit } = props;
  const [monthlyPayment, setMonthlyPayment] = useState(1658);

  //principal * (r(1+r)^n/((1+r)^n)-1)) = monthly payment
  const calculateMortgagePayment = (
    amountInput,
    lengthOfLoanInput,
    interestRateInput
  ) => {
    //amountInput = SalePrice - Deposit
    const borrowedMoney = amountInput; //principal
    const lengthOfLoan = lengthOfLoanInput * 12;
    const interestRate = interestRateInput; // Interés en bruto, sin preparar
    const calculedInterest = interestRate / 100; // Lo dividimos por 100
    const interesPreparado = calculedInterest / 12; // Y lo dividimos por 12 para prepararlo

    const percentage = interesPreparado; // 0.065 / 12 = 6.5% / 12
    const percentagePlusOne = interesPreparado + 1;
    const exponentiationOperator = percentagePlusOne ** lengthOfLoan;
    const firstDividend = percentage * exponentiationOperator;
    const secondDividend = exponentiationOperator - 1;
    if (firstDividend === 0 && secondDividend === 0) {
      return 0;
    }
    const division = firstDividend / secondDividend;
    const mortgage = borrowedMoney;
    const quotas = mortgage * division;

    return quotas;
  };

  return (
    <Card
      sx={{
        p: 1,
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          price: 300000,
          deposit: 30000,
          repaymentterm: 25,
          interestrate: 5.5,
          submit: false,
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          setFieldValue,
          setValues,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert mt={2} mb={1} severity="warning">
                {errors.submit}
              </Alert>
            )}

            <Grid container spacing={1}>
              <Grid container item xs={12}>
                <Card
                  variant="outlined"
                  sx={{
                    border: "solid 1px",
                    borderRadius: 1.5,
                    boxShadow: "2px 4px lightgray",
                    minWidth: 275,
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Mortgage Calculator"
                  />
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          type="number"
                          name="price"
                          label="Price"
                          value={values.price}
                          error={Boolean(touched.price && errors.price)}
                          fullWidth
                          helperText={touched.price && errors.price}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            handleChange(e);
                            let price = Number(e.target.value);
                            let payment = calculateMortgagePayment(
                              price - values.deposit,
                              values.repaymentterm,
                              values.interestrate
                            );
                            if (payment <= 0) {
                              payment = 0;
                            }
                            setMonthlyPayment(payment);
                          }}
                          InputProps={{
                            inputProps: { min: 0, step: 1000 },
                            startAdornment: (
                              <InputAdornment position="start">
                                £
                              </InputAdornment>
                            ),
                          }}
                          sx={{ m: 1, width: "25ch" }}
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          type="number"
                          name="deposit"
                          label={`Deposit (${(
                            (values.deposit * 100) /
                            values.price
                          ).toFixed(2)}%)`}
                          value={values.deposit}
                          error={Boolean(touched.deposit && errors.deposit)}
                          fullWidth
                          helperText={touched.deposit && errors.deposit}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            handleChange(e);
                            let deposit = Number(e.target.value);
                            let payment = calculateMortgagePayment(
                              values.price - deposit,
                              values.repaymentterm,
                              values.interestrate
                            );
                            if (payment <= 0) {
                              payment = 0;
                            }
                            setMonthlyPayment(payment);
                          }}
                          InputProps={{
                            inputProps: { min: 0, step: 1000 },
                            startAdornment: (
                              <InputAdornment position="start">
                                £
                              </InputAdornment>
                            ),
                          }}
                          sx={{ m: 1, width: "25ch" }}
                        ></TextField>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          select
                          type="number"
                          name="repaymentterm"
                          label="Repayment Term"
                          value={values.repaymentterm}
                          error={Boolean(
                            touched.repaymentterm && errors.repaymentterm
                          )}
                          helperText={
                            touched.repaymentterm && errors.repaymentterm
                          }
                          onBlur={handleBlur}
                          onChange={(e) => {
                            handleChange(e);
                            let term = Number(e.target.value);
                            let payment = calculateMortgagePayment(
                              values.price - values.deposit,
                              term,
                              values.interestrate
                            );
                            if (payment <= 0) {
                              payment = 0;
                            }
                            setMonthlyPayment(payment);
                          }}
                          InputProps={{
                            inputProps: { min: 1 },
                          }}
                          sx={{ m: 1, marginLeft: -10, width: "15ch" }}
                          SelectProps={{
                            MenuProps: {
                              anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                              },
                              getContentAnchorEl: null,
                            },
                          }}
                        >
                          {repaymentTerm.map((e, index) => (
                            <MenuItem
                              key={index}
                              value={e.value}
                              sx={{ fontSize: 12 }}
                            >
                              {e.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          type="number"
                          name="interestrate"
                          label="Interest Rate"
                          value={values.interestrate}
                          error={Boolean(
                            touched.interestrate && errors.interestrate
                          )}
                          fullWidth
                          helperText={
                            touched.interestrate && errors.interestrate
                          }
                          onBlur={handleBlur}
                          onChange={(e) => {
                            handleChange(e);
                            let interestrate = Number(e.target.value);
                            let payment = calculateMortgagePayment(
                              values.price - values.deposit,
                              values.repaymentterm,
                              interestrate
                            );
                            if (payment <= 0) {
                              payment = 0;
                            }
                            setMonthlyPayment(payment);
                          }}
                          InputProps={{
                            inputProps: { min: 1, step: 0.25 },
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                sx={{ marginLeft: -9 }}
                              >
                                %
                              </InputAdornment>
                            ),
                          }}
                          sx={{ m: 1, marginLeft: -10, width: "15ch" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" align="center">
                          <Box component="span" fontWeight="fontWeightMedium">
                            £{monthlyPayment.toFixed(0)}
                          </Box>{" "}
                          per month
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="info"
                          type="submit"
                          disabled={isSubmitting}
                          sx={{ marginTop: 4 }}
                        >
                          Back
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default MortgageCalcForm;
