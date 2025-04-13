import DeleteIcon from "../icons/delete-icon";

const GlobalDeleteButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 bg-ruby hover:bg-ruby/90 transition-transform duration-400 hover:scale-110 p-2 rounded-lg grid place-items-center cursor-pointer"
    >
      <DeleteIcon />
    </div>
  );
};

export default GlobalDeleteButton;
