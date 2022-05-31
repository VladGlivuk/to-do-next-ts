import type { NextPage } from 'next';
import { observer } from 'mobx-react-lite';
//stores
import TodoStore from 'stores/TodoStore';
//components
import Header from 'components/Header';
import AllTodo from 'components/AllTodo';
import NoTodo from 'components/NoTodo';

const Home: NextPage = observer(() => {
  return (
    <div>
      <h1 className='title'>To do list</h1>
      <Header />
      {(!!TodoStore.allTodo.total && <AllTodo />) || <NoTodo />}
    </div>
  );
});

export default Home;
