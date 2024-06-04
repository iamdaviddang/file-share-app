import React from "react";
import UploadFormTemplate from "./_components/UploadFormTemplate";

function Upload() {
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start <strong className="text-primary">Uploading</strong> files and{" "}
        <strong className="text-primary">Share</strong> it
      </h2>
      <UploadFormTemplate />
    </div>
  );
}

export default Upload;
