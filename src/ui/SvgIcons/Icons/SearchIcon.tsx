import { SvgIconProps, SvgIcon } from "../SvgIcons";

const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} className={props.className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.10932 18.2186C14.1403 18.2186 18.2186 14.1402 18.2186 9.10931C18.2186 4.07838 14.1403 0 9.10932 0C4.07834 0 0 4.07838 0 9.10931C0 14.1402 4.07834 18.2186 9.10932 18.2186ZM9.10932 16.0752C12.9565 16.0752 16.0753 12.9565 16.0753 9.10931C16.0753 5.26212 12.9565 2.14337 9.10932 2.14337C5.26214 2.14337 2.14337 5.26212 2.14337 9.10931C2.14337 12.9565 5.26214 16.0752 9.10932 16.0752Z" fill="white"/>
        <path d="M15.4475 13.9319L24 22.4844L22.4844 24L13.9319 15.4475L15.4475 13.9319Z" fill="white"/>
    </SvgIcon>
  );
};



export default SearchIcon;