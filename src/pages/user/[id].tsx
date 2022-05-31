import { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
//API
import { API } from 'core/API';
//types
import { UserType } from 'core/types/stores';
//components
import CustomLink from 'shared/components/CustomLink';
//styles
import styles from './User.module.scss';

type UserProps = {
  user: UserType;
};

const User: NextPage<UserProps> = ({ user }) => {
  const { id, name, username, email, phone } = user;

  return (
    <div className={styles.wrapper}>
      <h1 className='title'>User - {id}</h1>
      <span>
        {name}, {username}, {email}, {phone}
      </span>
      <CustomLink title='go back' link='/allUsers'/>
    </div>
  );
};

export default User;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response: AxiosResponse<UserType> = await API.get(`users/${context.query.id}`);
  const user = response?.data;

  return {
    props: { user },
  };
};
