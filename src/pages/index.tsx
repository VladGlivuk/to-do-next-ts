import type { NextPage } from "next";
import { observer } from "mobx-react-lite";
//stores
import TodoStore from "stores/TodoStore";
//components
import Header from "components/Header";
import MainLayout from "shared/components/MainLayout";
import AllTodo from "components/AllTodo";
import NoTodo from "components/NoTodo";

const Home: NextPage = observer(() => {
  return (
    <MainLayout title="To do list">
      <Header />
      {(!!TodoStore.allTodo.total && <AllTodo />) || <NoTodo />}
    </MainLayout>
  );
});

export default Home;
