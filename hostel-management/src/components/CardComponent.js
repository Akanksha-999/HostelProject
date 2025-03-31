import React from "react";

export function Card({ children, className, onClick }) {
  return (
    <div
      className={`border rounded-lg shadow-md p-4 transition hover:shadow-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`flex flex-col items-center ${className}`}>{children}</div>;
}
