import { File, X } from "lucide-react";
import React from "react";

function FilePreview({ file, removeFile }) {
  const units = [
    "bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  function niceBytes(x) {
    let l = 0,
      n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
      n = n / 1024;
    }

    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
  }
  return (
    <div className="flex items-center gap-2 justify-between mt-5 border rounded-md p-4 border-primary">
      <div className="flex items-center gap-2">
        <File alt="file" width={50} height={50} className="text-primary" />
        <div className="text-left">
          <h2>{file.name}</h2>
          <h2 className="text-gray-400 text-[12px]">
            {file?.type} / {niceBytes(file?.size)}
          </h2>
        </div>
      </div>
      <X className="text-red-600 cursor-pointer" onClick={() => removeFile()} />
    </div>
  );
}

export default FilePreview;
