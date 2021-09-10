import React from "react";
import Image from "next/image";
import roosefyN from "../Public/image/roosefyN.png";
import naricon from "../Public/image/nariconPng.png";

function ContentItemNaricon() {
  return (
    <div className="naricon">
      <span className="naricon-header">Naricon</span>
      <p>Content design creation for social media</p>
      <Image className="roosfyN" src={roosefyN} />
      <div className="items-img">
        <Image className="roosefyP" src={naricon} />
      </div>
    </div>
  );
}

export default ContentItemNaricon;
