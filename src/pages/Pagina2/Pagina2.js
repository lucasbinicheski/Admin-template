import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React from "react";

// components
import PageTitle from "../../components/PageTitle/PageTitle";

// data

const datatableData = [
   ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  
];

 

export default function Pagina2() {
   return (
    <>
      <PageTitle title="Tela2" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      {/*   <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
      </Grid>
    </>
  );
}
