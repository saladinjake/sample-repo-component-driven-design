import styled from "styled-components";
import libraryConfig from "../../libraryConfig";
import { IStatusProps } from "./Status.types";

const { colors } = libraryConfig;

const StyledStatus = styled.div<Omit<IStatusProps, "text">>`
  display: flex;
  align-items: center;
  color: #000;

  .status-icon {
    font-size: 8px;
    margin-right: ${({ spaceBetweenTextAndIcon = "5px" }) =>
      spaceBetweenTextAndIcon};

    color: ${({ status }) => {
      return (
        {
          active: colors.kGreen500,
          inactive: colors.kRed500,
          pending: colors.kudaYellow,
        }[status] || colors.kGreen500
      );
    }};
  }
`;

export default StyledStatus;
