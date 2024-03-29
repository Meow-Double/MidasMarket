import { SvgIconProps, SvgIcon } from "../SvgIcons";

const ArrowIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} className={props.className}>
        <path d="M1.19884 4.6013e-07L5.71295 4.51411L4.51411 5.71295L0 1.19884L1.19884 4.6013e-07Z" fill="white"/>
        <path d="M9.03 1.19884L4.51589 5.71295L3.31705 4.51411L7.83116 0L9.03 1.19884Z" fill="white"/>
    </SvgIcon>
  );
};


export default ArrowIcon;