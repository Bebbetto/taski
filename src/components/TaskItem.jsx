import "./TaskItem.css";
export default function TaskItem({ list, setList, inputValue, setInputValue }) {
  return (
    <div className="task-item__container">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (inputValue.trim() !== "") {
            setList([...list, { text: inputValue, id: Date.now() }]);
          }
          setInputValue("");
          console.log(list);
        }}
      >
        AddTask
      </button>
    </div>
  );
}
