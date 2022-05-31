import { NextPage } from 'next';
import { observer } from 'mobx-react-lite';
//store
import TodoStore from 'stores/TodoStore';
//components
import Todo from 'components/AllTodo/Todo';
import CustomLink from 'shared/components/CustomLink';
//styles
import styles from './AllTasks.module.scss';

const AllTasks: NextPage = observer(() => {
  return (
    <div className={styles.wrapper}>
      <h1 className='title'>All Tasks</h1>
      {(!!TodoStore.allTodo.total && TodoStore.allTodo.records.map((todo) => <Todo key={todo.id} todo={todo} link={`/todo/${todo.id}`} />)) || (
        <h1 className={styles.emptyPage}>
          Empty, please <CustomLink link='/' title='go back home' parentClassName={styles.link} />
        </h1>
      )}
    </div>
  );
});

export default AllTasks;
