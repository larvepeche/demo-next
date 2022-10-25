import MaterialTable from "material-table";
import Link from "next/link";

const MTable = ({ data, columns }) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns}
        data={data}
        options={{
          grouping: true,
          actionsColumnIndex: 0,
          columnsButton: true,
          showGroupingCount: true,
          exportButton: true,
        }}
        detailPanel={(rowData) => {
          return (
            <table border="1">
              <tr>
                <td>Name</td>
                <td>rating</td>
              </tr>
              <tr>
                <td>{rowData.authors}</td>
                <td>{rowData.rating}</td>
              </tr>
            </table>
          );
        }}
        actions={[
          (rowData) => ({
            icon: () => (
              <Link href={{ pathname: "posts/Details", query: rowData }}>
                <i class="material-icons">read_more</i>
              </Link>
            ),
          }),
        ]}
        title="dispositif de pilotage"
      />
    </div>
  );
};
export default MTable;
