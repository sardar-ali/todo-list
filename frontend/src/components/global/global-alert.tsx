import React from "react";
interface Props {
  title?: string;
  message: string;
}
const GlobalAlert: React.FC<Props> = ({ title = "Task", message }) => {
  return (
    <div className="fixed top-6 right-20 z-50 border border-primary rounded-lg w-72">
      <div className="bg-white p-2 rounded-lg shadow-lg w-full  transition-all">
        <div className="py-2 px-4 text-sm text-primary">{message}</div>
      </div>
    </div>
  );
};

export default GlobalAlert;
