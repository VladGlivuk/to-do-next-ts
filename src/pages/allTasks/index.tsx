import { NextPage } from "next";
import { observer } from "mobx-react-lite";
//store
import TodoStore from "stores/TodoStore";
//components
import Todo from "components/AllTodo/Todo";
import CustomLink from "shared/components/CustomLink";
//styles
import styles from "./AllTasks.module.scss";
import MainLayout from "shared/components/MainLayout";

const AllTasks: NextPage = observer(() => {
  return (
    <MainLayout title="All Tasks">
      <div className={styles.wrapper}>
        {(!!TodoStore.allTodo.total &&
          TodoStore.allTodo.records.map((todo) => (
            <Todo key={todo.id} todo={todo} link={`/todo/${todo.id}`} />
          ))) || (
          <h1 className={styles.emptyPage}>
            Empty, please{" "}
            <CustomLink
              link="/"
              title="go back home"
              parentClassName={styles.link}
            />
          </h1>
        )}
      </div>
    </MainLayout>
  );
});

export default AllTasks;
