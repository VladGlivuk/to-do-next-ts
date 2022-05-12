import { FC } from "react";
//styles
import styles from "./NoTodo.module.scss";

const NoTodo: FC = () => {
  return <h1 className={styles.noTodo}>Please, Add Todo</h1>;
};

export default NoTodo;