/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

import { Checkbox } from "../Checkbox/Checkbox";
import { InputSize } from "../Input/Input";

// Generic type over what will be injected in a rendered component inside a row cell
export type CellParams<T> = {
  value: T;
};

export type ColDef = {
  // field is used as a key to access a row's entity property
  field: string;
  label: string;
  // use cellRenderer to override default behavior of outputting the property value
  cellRenderer?: React.FC<CellParams<any>>;
  // when allowSelection is true, a select row checkbox will be rendered together with the content
  allowsSelection?: boolean;
  // override the cell's styles
  style?: React.CSSProperties;
};

export type TableProps<RowType> = TableHTMLAttributes<HTMLTableElement> & {
  colDef: ColDef[];
  rowData: RowType[];
  selection?: string[];

  onRowSelect: (id: string, row: RowType) => void;
  getRowId?: (row: RowType) => string;
};

export const Table = <RowType extends Record<string, any>>(
  props: TableProps<RowType>
) => {
  const { colDef, rowData, selection, onRowSelect, getRowId, ...restOfProps } =
    props;

  return (
    <table className={styles.table} {...restOfProps}>
      <thead>
        <tr className={styles.headerRow}>
          {colDef.map((column, ind) => (
            <th
              key={ind}
              scope="col"
              className={`${styles.headerCell} ${styles.cell}`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, rowInd) => {
          const rowId = getRowId?.(row) || rowInd.toString();
          const isRowSelected = selection?.includes(rowId) || false;

          const rowClassName = classNames(styles.row, {
            [styles.rowSelected]: !!isRowSelected,
          });

          return (
            <tr key={rowInd} className={rowClassName}>
              {colDef.map((column, fieldInd) => {
                // Get the cell value based on the column x row intersection and the `field` mapping
                const cellValue = row?.[column.field] || "";

                return (
                  <td
                    key={cellValue + fieldInd}
                    className={styles.cell}
                    style={column.style}
                  >
                    <div className={styles.cellContent}>
                      {column?.allowsSelection && (
                        <Checkbox
                          inputSize={InputSize.Medium}
                          checked={isRowSelected}
                          onChange={() => onRowSelect(rowId, row)}
                        />
                      )}

                      {/* cellRenderer takes priority over the default value */}
                      {column?.cellRenderer
                        ? column.cellRenderer({ value: cellValue })
                        : cellValue}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
