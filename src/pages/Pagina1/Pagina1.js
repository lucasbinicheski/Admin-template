import { Grid } from "@material-ui/core";
import React from "react";

// styles

// components
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Pagina1() {
 
  const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
    ["James Houston", "Example Inc.", "Dallas", "TX"],
    ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
    
  ];

  
  return (
    <>
      <PageTitle title="Tela1" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
        <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
     
      </Grid>
    </>
  );
}
