import { Box } from "@mui/material";
import styled from "@emotion/styled";
import MortgageCalcForm from "./MortgageCalcForm";
import React from "react";
import * as Yup from "yup";
import Helmet from "react-helmet";

const Wrapper = styled.div`
  text-align: center;
  background: transparent;

`;

const MortgageCalc = () => {


  const handleFormSubmit = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
  };

  return (
    <Wrapper>
      <Helmet title="Mortgage Calculator" />
      <Box py={1}>
        <MortgageCalcForm
          validationSchema={validationSchema}
          handleFormSubmit={handleFormSubmit}
        />
      </Box>
    </Wrapper>
  );
};

function requiredWhenDefined(v) {
  return this.nullable() // Allow the value to be null
    .default("") // If undefined, set the value to something that will pass validation
    .required(v); // Make it required so that "" or null will yield an error
}

Yup.addMethod(Yup.string, "requiredWhenDefined", requiredWhenDefined);

const validationSchema = Yup.object().shape({
  price: Yup.number().min(10000).required("Required"),
  deposit: Yup.number()
    .min(0)
    .test(
      "test-deposit",
      "Deposit should be less than price",
      function checkEnd(end) {
        const { price } = this.parent;
        if (end < price) {
          return true;
        }
        return false;
      }
    )
    .required("Deposit required"),
  repaymentterm: Yup.number().min(1).required("Required"),
  interestrate: Yup.number().positive().required("Required"),
});

export default MortgageCalc;
