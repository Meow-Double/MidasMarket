import { SvgIconProps, SvgIcon } from "../SvgIcons";

const CloseIcon = (props: SvgIconProps) => {
  return <SvgIcon {...props} className={props.className}>
    <path d="M14.8508 15.9764L0.437193 1.56281L1.63604 0.363965L16.0496 14.7776L14.8508 15.9764Z" fill="#B70000"/>
    <path d="M0.165475 14.9927L14.5791 0.579074L15.7779 1.77792L1.36432 16.1915L0.165475 14.9927Z" fill="#B70000"/>
  </SvgIcon>;
};

export default CloseIcon;