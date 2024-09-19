import React, { useReducer, useState } from "react";
import UploadInput from "./UploadInput";
import Flex from "../Flex/Flex";

export default {
  title: "Form/UploadInput",
  component: UploadInput,
};

export const Default = () => {
  const initialState: Record<string, any> = {};
  const fileProgressReducer = (state: any, action: any) => {
    const { name, progress } = action;
    return { ...state, [name]: progress };
  };
  const [filesProgress, setProgress] = useReducer(
    fileProgressReducer,
    initialState
  );
  const [fileB, setFileB] = useState<string>("http://abc.com/image");

  const uploadFile = async (name: string, file: File) => {
    // simulate upload by incrementing upload progress by 20 every 1/2 second
    for (let idx = 1; idx <= 5; idx++) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          const newProgress = idx * 20;
          setProgress({ name, progress: newProgress });
          resolve();
        }, 500);
      });
    }
  };

  return (
    <Flex gap="20px" direction="column" width="">
      <UploadInput
        label="File A"
        onFileUpload={(f) => uploadFile("fileA", f)}
        onChange={(e) => null}
        handleReset={() => null}
        progress={filesProgress.fileA || 0}
      />
      <UploadInput
        label="File B"
        onFileUpload={(f) => uploadFile("fileB", f)}
        handleReset={() => setFileB("")}
        onChange={(e) => null}
        value={fileB}
        progress={filesProgress.fileB || 0}
      />
      <UploadInput
        label="File C"
        onFileUpload={(f) => uploadFile("fileC", f)}
        handleReset={() => null}
        onChange={(e) => null}
        progress={filesProgress.fileC || 0}
        uploadFailed={true}
        value="http://abc.com"
      />
    </Flex>
  );
};

export const Control = {
  args: {},
};
