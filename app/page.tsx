"use client";

import { useEffect, useRef } from "react";

import "jspreadsheet-ce/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    import("jspreadsheet-ce").then((jspreadsheet) => {
      jspreadsheet.default(ref.current!, {
        worksheets: [
          {
            minDimensions: [50, 50], // fills screen feel
          },
        ],
      });
    });
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div ref={ref} className="w-full h-full" />
    </div>
  );
}
