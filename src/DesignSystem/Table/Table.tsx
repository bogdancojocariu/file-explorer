/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

import { RowSelectionCheckbox } from "./RowSelectionCheckbox/RowSelectionCheckbox";

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
  allowsSelection?: boolean | ((args: any) => boolean);
  selectionDisabledText?: string;
  // override the cell's styles
  style?: React.CSSProperties;
};

export type TableProps<TRow> = TableHTMLAttributes<HTMLTableElement> & {
  colDef: ColDef[];
  // Generic TRow type for the row data to be inferred by usage while keeping type safety by consumer
  rowData: TRow[];
  selection?: string[];

  onRowSelect: (id: string, row: TRow) => void;
  // used to compute an unique rowId if provided, will default to the row index otherwise
  getRowId?: (row: TRow) => string;
};

export const Table = <TRow extends Record<string, any>>(
  props: TableProps<TRow>
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
            <tr key={rowId} data-testid={rowId} className={rowClassName}>
              {colDef.map((column, fieldInd) => {
                // Get the cell value based on the column x row intersection and the `field` mapping
                const cellValue = row?.[column.field] || "";
                const isSelectable =
                  typeof column?.allowsSelection === "function"
                    ? column.allowsSelection(row)
                    : column?.allowsSelection;

                // cellRenderer takes priority over the default value
                const cellContent = column?.cellRenderer
                  ? column.cellRenderer({ value: cellValue })
                  : cellValue;

                return (
                  <td
                    key={fieldInd}
                    className={styles.cell}
                    style={column.style}
                  >
                    <div className={styles.cellContent}>
                      {column?.allowsSelection && (
                        <RowSelectionCheckbox
                          disabledSelectionContent={
                            column.selectionDisabledText
                          }
                          id={`${rowId}-select-checkbox`}
                          data-testid={`${rowId}-select-checkbox`}
                          checked={isRowSelected}
                          onChange={() => onRowSelect(rowId, row)}
                          disabled={!isSelectable}
                        />
                      )}

                      {cellContent}
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
