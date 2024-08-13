import { Button, ButtonColorType, ButtonSize } from "@design-system";
import fileDownloadIcon from "@icons/FileDownload.svg";

import styles from "./styles.module.scss";

export type DownloadFilesButtonProps = {
  devicesInfo: string[];
};

export const DownloadFilesButton: React.FC<DownloadFilesButtonProps> = ({
  devicesInfo,
}) => {
  const onDownload = () => {
    const message = devicesInfo.join(",\n");
    alert(message);
  };

  return (
    <Button
      className={styles.fileDownloadButton}
      colorType={ButtonColorType.Secondary}
      size={ButtonSize.Large}
      aria-label="Download files button"
      onClick={onDownload}
    >
      <div className={styles.buttonContent}>
        <img
          className={styles.downloadIcon}
          src={fileDownloadIcon}
          alt="file download icon"
        />
        <span>Download Selected</span>
      </div>
    </Button>
  );
};
