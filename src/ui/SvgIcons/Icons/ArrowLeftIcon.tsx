import { SvgIconProps, SvgIcon } from "../SvgIcons";

const ArrowLeftIcon = (props: SvgIconProps) => {
  return <SvgIcon {...props} className={props.className}>
      <g transform="rotate(180 8 8)"><path fill="currentColor" fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></g>
  </SvgIcon>;
};


export default ArrowLeftIcon;