import React, { useState } from "react";

const AddTodo = ({dispatch}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault();
     dispatch({
      type : "ADD_TODO", 
      payload : input
    });
    setInput("");
  }
  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <input
        className="border border-black"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}    
      />
      <button type="submit" className="bg-black px-4 text-white ml-2">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
