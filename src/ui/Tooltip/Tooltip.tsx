import cl from "./Tooltip.module.scss";

interface TooltipProps {
  type?: string;
  active?: boolean;
  text?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ type, text, active }) => {

  return (
    <div className={`${cl.wraper} ${active ? cl.active : ""}`}>
      {type === "success" ? (
        <div className={cl.success}>
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#2cc746"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
            />
          </svg>
        </div>
      ) : type === "error" ? (
        <div className={cl.error}>
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#a30909"
              d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"
            />
          </svg>
        </div>
      ) : (
        <div className={cl.info}>
          <span>{text}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1833ad" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>
        </div>
      )
      }
    </div>
  );
};


export default Tooltip;