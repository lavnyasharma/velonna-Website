import React from "react";

export default function LineBreak({
  lineBreakStyle,
  color = "#000",
  thickness = 1,
  marginHorizontal = 0,
  marginVertical = 0,
  innerTextEnable = false,
  innerText = "what's on your mind?",
  innerTextColor = "#",
  innerTextSize = 12,
}) {
  return (
    <div
      className={`relative mx-${marginHorizontal} my-${marginVertical} bg-inputborder ${lineBreakStyle}`}
      style={{
        height: thickness,
      }}
    >
      {innerTextEnable && (
        <p
          className={`absolute transform  -translate-y-2 bg-white px-2 text-${innerTextSize} text-[${innerTextColor}] font-semibold tracking-widest uppercase`}
          style={{ fontSize: innerTextSize }}
        >
          {innerText}
        </p>
      )}
    </div>
  );
}
