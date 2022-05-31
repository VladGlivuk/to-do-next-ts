import { NextPage } from 'next';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
//stores
import TodoStore from 'stores/TodoStore';
//types
import { Todo } from 'core/types/stores';
//components
import CustomLink from 'shared/components/CustomLink';
//styles
import styles from './Todo.module.scss';

const Todo: NextPage = () => {
  const { query } = useRouter();

  const todo = useMemo<Todo | undefined>(
    () => TodoStore.allTodo.records.find((todo) => todo.id === query.id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query.id, TodoStore.allTodo.records]
  );

  return (
    <div>
      <h1 className='title'>Todo</h1>
      {(!!todo && (
        <div className={styles.todo__wrapper}>
          <span>Name - {todo.title}</span>
          <span>Completed - {todo.completed ? 'yes' : 'no'}</span>
          {!!todo.timeToDo && <span>Time to finish - {todo.timeToDo}</span>}
          <span>{todo.description}</span>
        </div>
      )) || <div className={styles.todo__notFound}>Todo not found</div>}
      <CustomLink link='/' title='Go back home' parentClassName={styles.link} />
    </div>
  );
};

export default Todo;
