import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
    <ContentLoader 
    speed={3}
    width={1099}
    height={355}
    viewBox="0 0 1099 355"
    backgroundColor="#d6d6d6"
    foregroundColor="#b8b8b8"
    {...props}
  >
    <rect x="16" y="85" rx="0" ry="0" width="200" height="295" /> 
    <rect x="271" y="87" rx="0" ry="0" width="213" height="37" /> 
    <rect x="526" y="87" rx="0" ry="0" width="80" height="37" /> 
    <rect x="271" y="142" rx="0" ry="0" width="452" height="52" /> 
    <rect x="271" y="216" rx="0" ry="0" width="452" height="52" /> 
    <rect x="271" y="320" rx="0" ry="0" width="48" height="48" /> 
    <rect x="343" y="320" rx="0" ry="0" width="705" height="48" />
  </ContentLoader>
)

export default Skeleton