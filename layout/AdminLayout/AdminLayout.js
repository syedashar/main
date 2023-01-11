import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Grid, Container } from "@mui/material";
const AdminLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Grid container spacing={1}>
        <Grid item xs={3} className="h-[100vh] shadow-lg rounded-lg ">
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
export default AdminLayout;
