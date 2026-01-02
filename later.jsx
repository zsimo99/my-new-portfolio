import { useRef, useEffect, useState } from "react";

const ElementInfo = () => {
  const boxRef = useRef(null);
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (!boxRef.current) return;

    const el = boxRef.current;
    const rect = el.getBoundingClientRect();

    const computedStyle = window.getComputedStyle(el);

    const data = {
      // Position relative to viewport
      rect: {
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
      },

      // Position relative to page (scroll)
      pageOffset: {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      },

      // Position relative to offset parent
      offset: {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight,
      },

      // Client size (inner size, padding included, border excluded)
      client: {
        width: el.clientWidth,
        height: el.clientHeight,
        paddingTop: parseFloat(computedStyle.paddingTop),
        paddingBottom: parseFloat(computedStyle.paddingBottom),
        paddingLeft: parseFloat(computedStyle.paddingLeft),
        paddingRight: parseFloat(computedStyle.paddingRight),
      },

      // Scroll info
      scroll: {
        scrollTop: el.scrollTop,
        scrollLeft: el.scrollLeft,
        scrollWidth: el.scrollWidth,
        scrollHeight: el.scrollHeight,
      },

      // Borders
      border: {
        top: parseFloat(computedStyle.borderTopWidth),
        bottom: parseFloat(computedStyle.borderBottomWidth),
        left: parseFloat(computedStyle.borderLeftWidth),
        right: parseFloat(computedStyle.borderRightWidth),
      },

      // Margin
      margin: {
        top: parseFloat(computedStyle.marginTop),
        bottom: parseFloat(computedStyle.marginBottom),
        left: parseFloat(computedStyle.marginLeft),
        right: parseFloat(computedStyle.marginRight),
      },

      // Transform info (CSS transforms)
      transform: computedStyle.transform,
    };

    setInfo(data);
  }, []);

  return (
    <div className="h-screen relative bg-gray-800 p-4">
      <div
        ref={boxRef}
        className="w-40 h-40 bg-blue-500 m-20 p-4 border-4 border-red-500"
      >
        Box
      </div>

      <pre className="text-white mt-4">{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

export default ElementInfo;
