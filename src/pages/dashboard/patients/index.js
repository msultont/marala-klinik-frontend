import React from "react";
import Dashboard from "../../dashboard";
import TableLayout from "../../../components/layouts/table-layout";

const PatientsPage = props => {
  return (
    <Dashboard>
      <TableLayout>
        <div>This is patients page</div>
      </TableLayout>
    </Dashboard>
  );
};

export default PatientsPage;
