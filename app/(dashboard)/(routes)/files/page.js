import { UserButton } from "@clerk/nextjs";
import React from "react";

function Files() {
  return (
    <div>
      <h1>Files page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Files;
