import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
//stores
import TodoStore from "stores/TodoStore";
//helpers
import { makeNewTodo } from "./helpers";
//styles
import styles from "./AddTodoOptions.module.scss";

const AddTodoOptions: NextPage = () => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [dateValue, setDateValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");

  const onTitleValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitleValue(e.currentTarget.value);

  const onDateValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDateValue(e.target.value);

  const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescriptionValue(e.target.value);

  const addTodoClickHandler = () => {
    if (titleValue && dateValue) {
      const newTodo = makeNewTodo(titleValue, dateValue, descriptionValue);
      TodoStore.addTodo(newTodo);
      setTitleValue("");
      setDateValue("");
      setDescriptionValue("");
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <input
          type="date"
          onChange={onDateValueChange}
          value={dateValue}
          className={styles.input__date}
        />

        <input
          type="text"
          onChange={onTitleValueChange}
          value={titleValue}
          className={styles.input__title}
        />
        <button onClick={addTodoClickHandler} className={styles.button}>
          Add
        </button>
      </div>
      <div className={styles.description__wrapper}>
        <span>Optional description</span>
        <textarea
          className={styles.description}
          value={descriptionValue}
          onChange={onDescriptionChange}
        />
      </div>
    </div>
  );
};

export default AddTodoOptions;