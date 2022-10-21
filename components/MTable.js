import MaterialTable from "material-table";
import { data } from "../src/data";

const columns = [
  { title: "Title", field: "title" },
  { title: "Author", field: "authors" },
  { title: "Page Count", field: "num_pages" },
  { title: "Rating", field: "rating" },
];

const MTable = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns}
        data={data}
        options={{
          grouping: true,
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
        title="dispositif de pilotage"
      />
    </div>
  );
};
export default MTable;
