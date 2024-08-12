export enum FileStatusEnum {
  Available = "available",
  Scheduled = "scheduled",
}

export type File = {
  name: `${string}.${string}`;
  device: string;
  path: string;
  status: FileStatusEnum;
};
