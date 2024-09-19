import React from "react";

export type ToastProps = {
  /**
   * Type of Input can be
   */
  type?: ToastType;
  show: boolean;
  children: any;
  closeModal: () => void;
};

export type ToastType = "success" | "information" | "error";
