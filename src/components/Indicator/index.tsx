import React, { FC } from "react";
import { IndicatorComponent } from "./Indicator.styles";
import { IndicatorProps } from "./Indicator.types";

const Indicator: FC<IndicatorProps> = ({
  title,
  indicatorClass = "online-indicator",
  blinkClass = "blink",
  onClick = (e) => null,
}) => {
  return (
    <IndicatorComponent>
      <div className={indicatorClass}>
        <span className={blinkClass}></span>
      </div>
      <h2 onClick={onClick} className="online-text">
        {title}
      </h2>
    </IndicatorComponent>
  );
};

export default Indicator;
