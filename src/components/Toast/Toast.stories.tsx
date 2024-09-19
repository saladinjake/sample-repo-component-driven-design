import React, { useState } from "react";
import Toast from "./Toast";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";

export default {
  title: "Feedback/Toast",
  component: Toast,
};

const FailedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.2614 14.8792C23.6195 14.8792 23.9709 14.9463 24.2982 15.0774C23.6064 10.1759 19.339 6.35828 14.2603 6.35828C8.70753 6.35828 4.125 10.9377 4.125 16.5002C4.125 22.056 8.71417 26.642 14.2669 26.642C15.023 26.642 15.761 26.5573 16.4692 26.3901C16.3133 26.0378 16.2292 25.6457 16.2292 25.2334C16.2292 24.8527 16.3167 24.4593 16.4808 24.0969C15.7805 24.3052 15.0369 24.4137 14.2669 24.4137C9.87778 24.4137 6.36003 20.8892 6.36003 16.5002C6.36003 12.1111 9.87122 8.58667 14.2603 8.58667C18.1873 8.58667 21.4299 11.4081 22.0608 15.1486C22.4324 14.9716 22.842 14.8792 23.2614 14.8792ZM18.4198 13.9609C18.5546 13.7386 18.6656 13.503 18.6656 13.2798C18.6656 12.7556 18.2024 12.3994 17.7074 12.3994C17.39 12.3994 17.1098 12.5797 16.8879 12.9298L13.1985 18.8622L11.4744 16.6916C11.2318 16.3866 10.9899 16.2779 10.6806 16.2779C10.1727 16.2779 9.75862 16.6894 9.75862 17.2039C9.75862 17.4549 9.8523 17.6715 10.0317 17.9026L12.2747 20.616C12.5487 20.9554 12.8515 21.1256 13.2281 21.1256C13.5985 21.1256 13.9264 20.9391 14.1426 20.6036L18.4198 13.9609ZM28.6807 24.545L24.476 17.0181C24.1985 16.5274 23.7361 16.2914 23.2614 16.2914C22.7831 16.2914 22.308 16.5336 22.0432 17.0181L17.8355 24.545C17.7095 24.7713 17.6481 25.0038 17.6481 25.2333C17.6481 26.0094 18.2032 26.6419 19.047 26.6419H27.466C28.3098 26.6419 28.8747 26.0094 28.8747 25.2333C28.8747 25.0038 28.8133 24.7713 28.6807 24.545ZM23.2583 25.1726C22.7429 25.1726 22.3358 24.7881 22.3358 24.2784C22.3358 23.7754 22.746 23.3838 23.2583 23.3838C23.7772 23.3838 24.1869 23.7785 24.1803 24.2784C24.1803 24.7881 23.7799 25.1726 23.2583 25.1726ZM22.5538 22.0962L22.4729 19.4386C22.46 18.9811 22.7849 18.6655 23.2583 18.6655C23.7347 18.6655 24.0596 18.9781 24.0468 19.4386L23.9659 22.0962C23.9531 22.4825 23.6605 22.7561 23.2583 22.7561C22.8561 22.7561 22.5696 22.4825 22.5538 22.0962Z"
      fill="#F7685B"
    />
  </svg>
);

const ToastContent = ({ type = "error" }) => {
  const content = {
    colors: {
      information: "#1DCBEF",
      error: "#F7685B",
      success: "#40196D",
    },
    title: {
      success: "successful",
      error: "failed",
      information: "details",
    },
  };
  const color = content.colors[type];
  const title = content.title[type];

  return (
    <div>
      <Flex gap="10px">
        {type === "error" && <FailedIcon />}
        <Box>
          <Text color={color} fontWeight="900" mb={"2"}>
            Approval request {title}:
          </Text>
          {type !== "success" && (
            <Box color={"black"}>
              <Text fontSize="12px" opacity={"0.5"}>
                Please correct the following:
              </Text>
              <Text fontSize="12px" opacity={"0.5"}>
                Account number is duplicated
              </Text>
              <Text fontSize="12px" opacity={"0.5"}>
                BVN is missing
              </Text>
              <Text fontSize="12px" opacity={"0.5"}>
                Tenure date is missing
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </div>
  );
};

export const Success = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Toast show={showModal} closeModal={() => setShowModal(false)}>
        <ToastContent type="success" />
      </Toast>
      <Box height={"100vh"} pt={"10"}>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      </Box>
    </>
  );
};

export const Error = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Toast
        type="error"
        show={showModal}
        closeModal={() => setShowModal(false)}
      >
        <ToastContent type="error" />
      </Toast>
      <Box height={"100vh"} pt={"10"}>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      </Box>
    </>
  );
};

export const Information = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Toast
        type="information"
        show={showModal}
        closeModal={() => setShowModal(false)}
      >
        <ToastContent type="information" />
      </Toast>
      <Box height={"100vh"} pt={"10"}>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      </Box>
    </>
  );
};
