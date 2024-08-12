import {
  Button,
  ButtonColorType,
  ButtonSize,
} from "../../DesignSystem/Button/Button";
import fileDownloadIcon from "../../assets/FileDownload.svg";
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
        <span>Download {devicesInfo.length} Selected</span>
      </div>
    </Button>
  );
};
