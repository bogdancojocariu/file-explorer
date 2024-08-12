import { FileStatusEnum } from "../types";
import { capitalize } from "../../utils/utils";
import styles from "./styles.module.scss";
import { CellParams } from "../../DesignSystem/Table/Table";

export type FileStatusCellProps = CellParams<FileStatusEnum>;

export const FileStatusCell: React.FC<FileStatusCellProps> = props => {
  const { value } = props;
  const capitalizedStatus = capitalize(value);

  return (
    <div className={styles.fileStatus}>
      {value === FileStatusEnum.Available && (
        <div className={styles.availableIcon} />
      )}
      <span>{capitalizedStatus}</span>
    </div>
  );
};
