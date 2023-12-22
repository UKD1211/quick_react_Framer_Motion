/* eslint-disable no-undef */
import React,{useRef} from "react";
import Card from "./Card";


function Foreground() {
  

  const ref = useRef(null);
  

  const data = [
    {
      desc: "Lorem hello i am uttam,21 years old,studying at JU EE,3rd year 2nd sem",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "Lorem hello i am uttam",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },

    {
      desc: "Lorem hello i am uttam",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div ref = {ref}  className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
