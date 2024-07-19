import React from "react"
import ContentLoader from "react-content-loader"

const MyLoaderHeader = (props: any) => (
  <ContentLoader 
    speed={3}
    width={307}
    height={52}
    viewBox="0 0 307 52"
    backgroundColor="#d6d6d6"
    foregroundColor="#b8b8b8"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="130" height="50" /> 
    <rect x="177" y="0" rx="20" ry="20" width="130" height="50" /> 
    <rect x="147" y="0" rx="0" ry="0" width="2" height="50" />
  </ContentLoader>
)

export default MyLoaderHeader