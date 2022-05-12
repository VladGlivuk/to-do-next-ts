import { NextPage } from "next";
import AddTodoOptions from "./AddTodoOptions";
import DisplayingOptions from "./DisplayingOptions";
import FetchTodo from "./FetchTodo";
//styles
import styles from "./Header.module.scss";

const Header: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <AddTodoOptions />
      <DisplayingOptions />
      <FetchTodo />
    </div>
  );
};

export default Header;
