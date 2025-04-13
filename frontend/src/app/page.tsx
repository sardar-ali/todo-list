import Image from "next/image";
import styles from "./page.module.css";
import TodoContainer from "../components/todo/todo-container";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center my-20">
      <TodoContainer />
    </div>
  );
}
