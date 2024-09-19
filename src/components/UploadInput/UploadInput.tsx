import React, { useRef, useState } from "react";
import { IUploadInputProps } from "./UploadInput.types";
import {
  StyledLabel,
  StyledUploadInput,
  HiddenFileInput,
  StyledError,
  ProgressBar,
  ProgressLevel,
} from "./UploadInput.styles";
import { trimString } from "../../utilities/helperFuncs";
import { Svg } from "../../assets/svg";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";

const { Upload, CancelCircle, SuccessCircle, RefreshCircle } = Svg;

const UploadInput: React.FC<IUploadInputProps> = ({
  name,
  value,
  label,
  handleReset,
  progress,
  width,
  uploadFailed = false,
  maxSize = 1024, //1mb
  accepts = ["image/png", "image/jpeg"],
  onChange = (e) => null,
  onFileUpload = (file) => null,
}) => {
  const uploadRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [error, setError] = useState("");

  const fileName = selectedFile?.name || value;
  const localUploadFailed = fileName && uploadFailed;

  // input event handlers
  const handleChange = (event) => {
    const chosenFile = event.target.files?.[0] || event.dataTransfer.files?.[0]; // Handle file selection or drag-and-drop

    // reset the value
    handleReset();
    setError("");

    const fileSizeinKb = Math.ceil(chosenFile.size / 1024);
    if (fileSizeinKb > maxSize) {
      setError("File size is too large keep it lower than 1mb");
      throw Error("File size is too large keep it lower than 1mb");
    }

    onChange(event);
    setSelectedFile(chosenFile);
    onFileUpload(chosenFile);
  };

  const resetInputHandler = (e) => {
    e.stopPropagation();
    handleReset();
    setSelectedFile(null);
    uploadRef.current.value = null;
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.target.style.background = "#EFF1FF";
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.target.style.background = "transparent";
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.target.style.background = "transparent";

    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      handleChange(event);
    }
  };

  const handleReupload = (event) => {
    event.stopPropagation();
    onFileUpload(selectedFile);
  };

  return (
    <>
      <HiddenFileInput
        name={name}
        type="file"
        accept={accepts.join(", ")}
        onChange={handleChange}
        ref={uploadRef}
      />

      <div>
        <StyledLabel>{label}</StyledLabel>

        <StyledUploadInput
          onClick={() => uploadRef.current?.click()}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          width={width}
        >
          {(() => {
            if (localUploadFailed || (progress && progress < 100 && fileName)) {
              return (
                <Flex direction="column" gap="10px 0">
                  <Text fontSize={"12px"}>
                    {localUploadFailed ? "Failed" : "Uploading"}
                  </Text>
                  <ProgressBar failed={localUploadFailed}>
                    <ProgressLevel
                      level={progress}
                      failed={localUploadFailed}
                    />
                  </ProgressBar>
                </Flex>
              );
            } else if (
              (value && !selectedFile) ||
              (fileName && progress === 100)
            ) {
              return (
                <>
                  <img className="success-icon" src={SuccessCircle} />
                  <p>{trimString(fileName, 30)}</p>
                </>
              );
            } else {
              return (
                <p className="placeholder">
                  Drop your Doc, or <span className="browse-text">Browse</span>
                </p>
              );
            }
          })()}

          {localUploadFailed ? (
            <img
              className="failed-icon"
              src={RefreshCircle}
              onClick={handleReupload}
            />
          ) : (
            <img
              className="rightmost-icon"
              src={fileName ? CancelCircle : Upload}
              onClick={fileName ? resetInputHandler : null}
            />
          )}
        </StyledUploadInput>

        {error && <StyledError>{error}</StyledError>}
      </div>
    </>
  );
};

export default UploadInput;
