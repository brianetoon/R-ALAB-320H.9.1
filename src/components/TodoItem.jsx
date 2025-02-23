const TodoItem = ({ item, dispatch }) => {

  const handleChange = () => {
    dispatch({
      type : "TOGGLE_COMPLETE", 
      payload : { ...item, completed: !item.completed }
    });
  };

  return (
    <div className="border flex gap-4 mb-4 p-4 items-center">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleChange}
      />
      <p className="text-lg font-medium">{item.title}</p>
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
