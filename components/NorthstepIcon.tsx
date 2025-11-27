import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

interface NorthstepIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function NorthstepIcon({
  width = 55,
  height = 55,
  color,
}: NorthstepIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 1024 1024" fill="none">
      <Rect width="1024" height="1024" rx="165" fill="#C026D3" />
      <Circle cx="512" cy="512" r="257.5" stroke="white" strokeWidth="35" />
      <Path d="M512 57L553.569 272.25H470.431L512 57Z" fill="white" />
      <Rect x="512" y="512" width="512" height="239" fill="#C026D3" />
      <Rect y="273" width="512" height="239" fill="#C026D3" />
      <Path d="M512 964L470.431 748.75L553.569 748.75L512 964Z" fill="white" />
      <Path d="M561 717L682 752.5L505 998.5L561 717Z" fill="#C026D3" />
      <Path
        d="M467.499 291.5L327.5 283.5L520.5 13.5L467.499 291.5Z"
        fill="#C026D3"
      />
      <Circle cx="512" cy="512" r="241" fill="#C026D3" />
      <Circle cx="512" cy="512" r="137" fill="white" />
    </Svg>
  );
}
