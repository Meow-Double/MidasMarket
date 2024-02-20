import { SVGProps } from "react";
import cl from "./SvgIcons.module.scss";

export const SvgIcon = ({
  width,
  height,
  size,
  viewBox,
  children,
}: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || "0 0 24 24"}
      width={size || width || 24}
      height={size || height || 24}
      className={cl.icon}
    >
      {children}
    </svg>
  );
};

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
