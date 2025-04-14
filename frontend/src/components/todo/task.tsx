import React from "react";
import { formatDate } from "@/util/date-format";
import { TaskTypes } from "@/types/_task-types";
import GlobalEditButton from "../global/global-edit-button";
import GlobalDeleteButton from "../global/global-delete-button";

interface Props {
  data: TaskTypes;
  onDelete: (id: number) => void;
  onEdit: (data: TaskTypes) => void;
}

const Task: React.FC<Props> = ({ data, onDelete, onEdit }) => {
  return (
    <>
      <div className="flex justify-between items-center border-b p-4 hover:bg-grayish">
        <div>
          <p className="text-lg font-semibold">{data.title}</p>
          <p className="text-xs py-1">{formatDate(data.createdAt)}</p>
          <p>{data.description}</p>
        </div>
        <div className="flex gap-2">
          <GlobalEditButton onClick={() => onEdit(data)} />
          <GlobalDeleteButton onClick={() => onDelete(data.id)} />
        </div>
      </div>
    </>
  );
};

export default Task;
