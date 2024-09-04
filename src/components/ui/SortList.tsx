"use client";

import { ReactNode, useState } from "react";
import { ListFilter } from "lucide-react";

interface SortListProp {
  items: Array<{ name: string | ReactNode; onClick: () => void }>;
}

export function SortList({ items }: SortListProp) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button className="flex my-2" onClick={() => setShow(!show)}>
        <h2>Sort by</h2>
        <ListFilter />
      </button>
      {show && (
        <ul className="absolute bg-white p-4 z-50 -top-4 left-20 border border-slate-100 rounded-xl">
          {items?.map((itm, index) => (
            <li
              onClick={() => {
                itm.onClick();
                setShow(false);
              }}
              key={index}
              className="hover:scale-[1.1] my-2 transition-all"
            >
              <button>{itm.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
