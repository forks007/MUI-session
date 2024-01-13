import { FC, ReactNode } from "react";

export const Slide: FC<ReactNode> = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
      }}
    >
      {children}
    </div>
  );
};
