import { useState } from "react";

import styles from "./styles.module.scss";

import { File } from "./types";
import { allFilesSelected, getRowId } from "./utils";

import { ColDef, Table } from "../DesignSystem/Table/Table";
import { DownloadFilesButton } from "./DownloadFilesButton/DownloadFilesButton";
import { Checkbox } from "../DesignSystem/Checkbox/Checkbox";
import { InputSize } from "../DesignSystem/Input/Input";
import { FileStatusCell } from "./FileStatusCell/FileStatusCell";

export type FilesProps = {
  files: File[];
};

const COL_DEF: ColDef[] = [
  { field: "id", label: "", allowsSelection: true, style: { width: "30px" } },
  {
    field: "name",
    label: "Name",
  },
  {
    field: "device",
    label: "Device",
  },
  {
    field: "path",
    label: "Path",
  },
  {
    field: "status",
    label: "Status",
    cellRenderer: FileStatusCell,
  },
];

export const Files: React.FC<FilesProps> = props => {
  const { files } = props;

  const [selected, setSelected] = useState<string[]>([]);

  const isAllSelected = allFilesSelected(files, selected);

  const onRowSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected => selected.filter(sid => sid !== id));
    } else {
      setSelected(selected => [...selected, id]);
    }
  };

  const onSelectAll = () => {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(files.map(getRowId));
    }
  };

  return (
    <div className={styles.files}>
      <div className={styles.header}>
        <Checkbox
          label={`Selected ${selected.length}`}
          onChange={onSelectAll}
          checked={isAllSelected}
          indeterminate={!isAllSelected && selected.length > 0}
          inputSize={InputSize.Large}
          reverse
        />
        {selected.length > 0 && <DownloadFilesButton devicesInfo={selected} />}
      </div>
      <Table
        colDef={COL_DEF}
        rowData={files}
        onRowSelect={onRowSelect}
        getRowId={getRowId}
        selection={selected}
      />
    </div>
  );
};
