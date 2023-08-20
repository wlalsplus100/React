import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const UserName = useContext(UserContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>{UserName}님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;
