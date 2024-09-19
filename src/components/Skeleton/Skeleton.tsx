import React, { FC } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SkeletonWrapProps = {
  height?: string;
  circle?: boolean;
  width?: string;
  color?: string;
  count?: number;
  duration?: number;
  wrapper?: any;
};

const SkeletonWrap: FC<SkeletonWrapProps> = ({
  height,
  circle,
  width,
  color,
  count,
  duration,
  wrapper,
}) => {
  return (
    <SkeletonTheme baseColor={color}>
      <Skeleton
        height={height}
        circle={circle}
        width={width}
        count={count}
        duration={duration}
        wrapper={wrapper}
      />
    </SkeletonTheme>
  );
};
export { Skeleton, SkeletonWrap };
export default Skeleton;
