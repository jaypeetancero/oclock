import React, { useState, useEffect } from "react";
require("./style.css");

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="circle">
        <p className="color-orange display-4 text-center">
          {time.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Clock;
