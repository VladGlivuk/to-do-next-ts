import { GetStaticProps, NextPage } from 'next';
import { AxiosResponse } from 'axios';
//API
import { API } from 'core/API';
//components
import User from 'components/User';
//types
import { UserType } from 'core/types/stores';
//styles
import styles from './AllUsers.module.scss';

type AllUsersProps = {
  allUsers: Array<UserType>;
};

const AllUsers: NextPage<AllUsersProps> = ({ allUsers }) => {
  return (
    <div>
      <h1 className='title'>All Users</h1>
      <div className={styles.wrapper}>{!!allUsers.length && allUsers.map((user) => <User key={user.id} user={user} />)}</div>
    </div>
  );
};

export default AllUsers;

export const getStaticProps: GetStaticProps = async () => {
  const response: AxiosResponse<Array<UserType>> = await API.get('users');
  const allUsers = response?.data;
  return {
    props: { allUsers },
  };
}
