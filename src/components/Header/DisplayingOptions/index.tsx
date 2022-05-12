import { NextPage } from "next";
import { observer } from "mobx-react-lite";
import cx from "classnames";
//stores
import TodoStore from "stores/TodoStore";
//types
import { TODO__TO__SHOW } from "core/types/stores";
//styles
import styles from "./DisplayingOptions.module.scss";

const DisplayingOptions: NextPage = observer(() => {
  const setAllTodoClickHandler = () =>
    TodoStore.displayingState !== TODO__TO__SHOW.AllTodo &&
    TodoStore.changeDisplayingState(TODO__TO__SHOW.AllTodo);

  const setCompleteTodoClickHandler = () =>
    TodoStore.displayingState !== TODO__TO__SHOW.CompletedTodo &&
    TodoStore.changeDisplayingState(TODO__TO__SHOW.CompletedTodo);

  const setUncompletedTodoClickHandler = () =>
    TodoStore.displayingState !== TODO__TO__SHOW.UncompletedTodo &&
    TodoStore.changeDisplayingState(TODO__TO__SHOW.UncompletedTodo);

  return (
    <div className={styles.button__wrapper}>
      <button
        className={cx(styles.button, {
          [styles.button__active]: TodoStore.displayingState === TODO__TO__SHOW.AllTodo,
          [styles.button__inactive]: TodoStore.displayingState !== TODO__TO__SHOW.AllTodo,
        })}
        onClick={setAllTodoClickHandler}
      >
        All Todo
      </button>
      <button
        className={cx(styles.button, {
          [styles.button__active]: TodoStore.displayingState === TODO__TO__SHOW.CompletedTodo,
          [styles.button__inactive]: TodoStore.displayingState !== TODO__TO__SHOW.CompletedTodo,
        })}
        onClick={setCompleteTodoClickHandler}
      >
        Complete Todo
      </button>
      <button
        className={cx(styles.button, {
          [styles.button__active]: TodoStore.displayingState === TODO__TO__SHOW.UncompletedTodo,
          [styles.button__inactive]:
            TodoStore.displayingState !== TODO__TO__SHOW.UncompletedTodo,
        })}
        onClick={setUncompletedTodoClickHandler}
      >
        Incomplete Todo
      </button>
    </div>
  );
});

export default DisplayingOptions;
