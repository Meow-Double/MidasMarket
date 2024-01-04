import ContentLoader from "react-content-loader";

export const LoaderCard = (props: any) => (
  <ContentLoader
    speed={2}
    width={230}
    height={440}
    viewBox="0 0 230 440"
    backgroundColor="#0D2650"
    foregroundColor="#1e58ba"
    {...props}
  >
    <rect x="0" y="250" rx="0" ry="0" width="230" height="40" />
    <rect x="180" y="134" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="0" rx="0" ry="0" width="230" height="230" />
    <rect x="0" y="300" rx="4" ry="4" width="60" height="20" />
    <rect x="0" y="330" rx="0" ry="0" width="230" height="50" />
    <rect x="1" y="396" rx="0" ry="0" width="92" height="42" />
    <rect x="186" y="396" rx="0" ry="0" width="42" height="42" />
  </ContentLoader>
);



export const LoaderCardDrawer = (props: any) => (
  <ContentLoader 
    speed={2}
    width={1500}
    height={180}
    viewBox="0 0 1500 180"
    backgroundColor="#0D2650"
    foregroundColor="#1e58ba"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="1500" height="180" />
  </ContentLoader>
)


