import { NextPage } from "next";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
//stores
import TodoStore from "stores/TodoStore";
//types
import { TODO__TO__SHOW } from "core/types/stores";
//components
import Todo from "./Todo";
//styles
import styles from "./AllTodo.module.scss";

const AllTodo: NextPage = observer(() => {
  const allTodo = useMemo<Array<JSX.Element>>(() => {
    switch (TodoStore.displayingState) {
      case TODO__TO__SHOW.AllTodo: {
        return TodoStore.allTodo.records.map((todo) => (
          <Todo key={todo.id} todo={todo} link={`/todo/${todo.id}`} />
        ));
      }

      case TODO__TO__SHOW.CompletedTodo: {
        const completedTodo = TodoStore.allTodo.records.filter(
          (todo) => todo.completed
        );
        return completedTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} link={`/todo/${todo.id}`} />
        ));
      }

      case TODO__TO__SHOW.UncompletedTodo: {
        const uncompletedTodo = TodoStore.allTodo.records.filter(
          (todo) => !todo.completed
        );
        return uncompletedTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} link={`/todo/${todo.id}`} />
        ));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TodoStore.allTodo.records, TodoStore.displayingState]);

  return (
    <div className={styles.wrapper}>{!!TodoStore.allTodo.total && allTodo}</div>
  );
});

export default AllTodo;
