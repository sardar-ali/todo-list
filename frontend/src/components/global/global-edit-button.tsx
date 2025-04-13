import EditIcon from "../icons/edit-icon";

const GlobalEditButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 bg-[#3B82F6] hover:bg-[#3B82F6]/80 transition-transform duration-400 hover:scale-110 p-2 rounded-lg grid place-items-center cursor-pointer"
    >
      <EditIcon />
    </div>
  );
};

export default GlobalEditButton;
