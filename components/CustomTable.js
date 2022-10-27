import { Fragment, useCallback, useMemo } from "react";
import {
  useExpanded,
  useGroupBy,
  useSortBy,
  useTable,
} from "react-table/dist/react-table.development";
import styles from "./CustomTable.module.css";

const CustomTable = () => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "world",
        col3: ["mriano", "tsiry"],
        col4: "world",
      },
      { col1: "react-table", col2: "rocks", col3: "world", col4: "world" },
      { col1: "whatever", col2: "you want", col3: "world", col4: "world" },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {!row.isGrouped
              ? row.isExpanded
                ? "x"
                : ">"
              : "(" + row.subRows.length + ")"}
          </span>
        ),
      },
      {
        Header: "nom",
        columns: [
          {
            Header: "First Name",
            accessor: "col1",
          },
          { Header: "name", accessor: "col2" },
        ],
      },
      {
        Header: "prenom",
        columns: [
          {
            Header: "First Name",
            accessor: "col3",
          },
          { Header: "name", accessor: "col4" },
        ],
      },
    ],
    []
  );

  const myComponent = useCallback(
    ({ row }) => <span>{row.values.col1}</span>,
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state: { groupBy, expanded },
  } = useTable({ columns, data }, useGroupBy, useSortBy, useExpanded);

  return (
    <table {...getTableProps()} className={styles.customTable}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.canGroupBy ? (
                  // If the column can be grouped, let's add a toggle
                  <span {...column.getGroupByToggleProps()}>
                    {column.isGrouped ? "🛑 " : "👊 "}
                  </span>
                ) : null}
                {column.render("Header")}{" "}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Fragment {...row.getRowProps()}>
              <tr>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.isGrouped ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <span {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ? "👇" : "👉"}
                          </span>{" "}
                          {cell.render("Cell")}
                        </>
                      ) : cell.isAggregated ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        cell.render("Aggregated")
                      ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
              {row.isExpanded && !row.isGrouped ? (
                <tr>
                  <td colspan={visibleColumns.length}>
                    {myComponent({ row })}
                  </td>
                </tr>
              ) : null}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
export default CustomTable;
