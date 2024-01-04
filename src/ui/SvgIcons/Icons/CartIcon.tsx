import { SvgIconProps, SvgIcon } from "../SvgIcons";

const CartIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} className={props.className}>
        <path d="M4.44457 25L1.6327 13.8197H0V7.50297H6.22844L9.2822 0L11.0358 0.682088L8.2542 7.53262H18.6853L15.9339 0.682088L17.6876 0L20.7413 7.50297H26.9698V13.8197H25.3371L22.5252 25H4.44457ZM21.0739 23.1613L23.4323 13.8493H3.56775L5.92609 23.1613H21.0739ZM25.0952 11.981V9.40095H1.90482V11.981H25.0952Z" fill="white"/>
        <path d="M14.4523 15.3914H12.5475V22.064H14.4523V15.3914Z" fill="white"/>
        <path d="M18.0806 15.3914H16.1758V22.064H18.0806V15.3914Z" fill="white"/>
        <path d="M10.8242 15.3914H8.91936V22.064H10.8242V15.3914Z" fill="white"/>
    </SvgIcon>
  );
};


export default CartIcon;