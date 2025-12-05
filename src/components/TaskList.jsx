import "./TaskList.css";
export default function TaskList({ list, setList }) {
  return (
    <>
      <ul className="list">
        {list.map((item, index) => {
          return (
            <li className="list-item" key={index}>
              {item.text}
              <button
                className="delete-task__button"
                onClick={() => {
                  const upd = list.filter((item, i) => {
                    return index !== i;
                  });
                  return setList(upd);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
