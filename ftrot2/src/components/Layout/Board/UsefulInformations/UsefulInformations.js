import { Grid, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const UsefulInformations = ({ Left, Right }) => {
  return (
    <StyledPaper>
      <Grid item container>
        <Grid item xs={12} md={6}>
          <Left />
        </Grid>
        <Grid item container xs={12} md={6}>
          <Right />
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default UsefulInformations;
