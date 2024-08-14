import { useState } from "react";

import styles from "./styles.module.scss";

import { File } from "./types";
import { allFilesSelected, getRowId, isFileSelectable, testIds } from "./utils";

import { ColDef, Table, Checkbox, InputSize } from "@design-system";
import { DownloadFilesButton } from "./DownloadFilesButton/DownloadFilesButton";

import { FileStatusCell } from "./FileStatusCell/FileStatusCell";

export type FilesProps = {
  files: File[];
};

const COL_DEF: ColDef[] = [
  {
    field: "id",
    label: "",
    allowsSelection: isFileSelectable,
    selectionDisabledText: "Only files with Status Available can be selected",
    style: { width: "30px" },
  },
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

  // When select All checkbox is clicked, if any all eligible files are selected, deselect them,
  // otherwise select them.
  const onSelectAllAvailable = () => {
    const allFilesAvailableForSelection = files.filter(isFileSelectable);
    const isAllAvailableSelected = allFilesSelected(
      allFilesAvailableForSelection,
      selected
    );

    if (isAllAvailableSelected) {
      setSelected([]);
    } else {
      setSelected(allFilesAvailableForSelection.map(getRowId));
    }
  };

  const selectedCheckboxLabel =
    selected.length > 0 ? `Selected ${selected.length}` : "None Selected";

  return (
    <div className={styles.files}>
      <div className={styles.header}>
        <Checkbox
          id={testIds.selectAllCheckbox}
          name={testIds.selectAllCheckbox}
          data-testid={testIds.selectAllCheckbox}
          label={selectedCheckboxLabel}
          onChange={onSelectAllAvailable}
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
