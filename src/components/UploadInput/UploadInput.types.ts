export interface IUploadInputProps {
  name?: string;
  label?: string;
  value?: string;
  progress?: number;
  maxSize?: number;
  width?: string;
  uploadFailed?: boolean;
  accepts?: string[];
  onChange: (event: Event) => void;
  handleReset: () => void;
  onFileUpload: (file: File) => void;
}
