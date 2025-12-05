import "./styles.css";
import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";

export default function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  return (
    <>
      <TaskItem
        list={list}
        setList={setList}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TaskList
        list={list}
        setList={setList}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
}
