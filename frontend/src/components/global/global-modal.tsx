import React from "react";
interface Props {
  title?: string;
  content: React.ReactNode;
  onSubmit?: () => void;
  popupHandler: () => void;
  disable?: boolean;
}
const GlobalModal: React.FC<Props> = ({
  title = "Add Task",
  content,
  popupHandler,
  onSubmit,
  disable = false,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 transition-all">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <hr />
        <div className="py-4">{content}</div>
        <div className="flex justify-end gap-2">
          <button
            onClick={popupHandler}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            disabled={disable}
            onClick={() => {
              popupHandler();
              onSubmit && onSubmit();
            }}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md  ${
              disable ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalModal;
