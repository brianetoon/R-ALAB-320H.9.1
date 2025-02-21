import React, { useState } from "react";

const TodoItem = ({ item,dispatch }) => {
  const [completed, setCompleted] = useState(item.completed);

  const handleChange = () => {
    setCompleted(prev => !prev);
    dispatch({type : "CHECKBOX", payload : {...item, completed}})
  };
  return (
    <div className="border flex gap-4 m-4 p-4 items-center ">
      <input
        type="checkbox"
        name=""
        id=""
        checked={completed}
        onChange={handleChange}
      />
      <h4 className="text-lg font-medium">{item.title}</h4>
      <button className="bg-black text-white px-4 py-1 rounded text-xs">
        Edit
      </button>
      <button className="bg-black text-white px-4 py-1 rounded text-xs">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
