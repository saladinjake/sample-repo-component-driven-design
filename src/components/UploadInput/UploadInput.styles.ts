import styled from "styled-components";
import config from "../../libraryConfig";

const { colors } = config;

export const StyledLabel = styled.div`
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 9px;
`;

export const StyledUploadInput = styled.div<{ width?: string }>`
  box-sizing: border-box;
  width: ${({ width }) => width || "372px"};
  height: 46px;
  background: white;
  border-radius: 5px;
  border: 1px dashed #cccccc;
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;
  cursor: pointer;
  position: relative;

  p.placeholder {
    color: ${colors.kudaDarkGrey};
  }

  .browse-text {
    color: ${colors.kudaGreen};
  }
  .failed-icon,
  .rightmost-icon {
    position: absolute;
    right: 18px;
  }

  .rightmost-icon {
    top: 25%;
  }

  .success-icon {
    margin-right: 10px;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const StyledError = styled.small`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: ${colors.kudaRed};
`;

export const StyledErrorIcon = styled.img`
  display: inline-block;
  margin-right: 4px;
`;

export const ProgressBar = styled.div<{ failed: boolean }>`
  width: 208px;
  height: 2px;
  background-color: ${({ failed }) =>
    failed ? colors.kudaRed : colors.kudaBorderGrey};

  p {
    font-family: Mulish;
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
  }
`;

export const ProgressLevel = styled.div<{ level: number; failed: boolean }>`
  width: ${({ level, failed }) => (failed ? "0" : `${level}%`)};
  height: 100%;
  background: ${colors.kudaGreen};
`;
