import { Grid } from "@material-ui/core";
import React from "react";

// styles

// components
import MUIDataTable from "mui-datatables";
import PageTitle from "../PageTitle/PageTitle";

export default function Pagina3({ variant, ...props }) {
  const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ];

  return (
    <>
      <PageTitle title="Tela3" />
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
