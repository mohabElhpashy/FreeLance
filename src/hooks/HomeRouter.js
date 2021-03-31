import React, { useState } from "react";

function Home() {
  const GoTo = () => {
    window.location = "http://localhost:3000/Home";
  };

  return [GoTo];
}
export default Home;
