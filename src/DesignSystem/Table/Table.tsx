import { TableHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  columns: string[];
  rows: string[][];
};

export const Table: React.FC<TableProps> = props => {
  const { columns, rows, ...restOfProps } = props;

  return (
    <table className={styles.table} {...restOfProps}>
      <thead>
        <tr>
          {columns.map((column, ind) => (
            <th key={ind} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowInd) => (
          <tr key={rowInd}>
            {row.map((property, propInd) => (
              <td key={propInd}>{property}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
