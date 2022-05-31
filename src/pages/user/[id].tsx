import { AxiosResponse } from 'axios';
import { API } from 'core/API';
import { UserType } from 'core/types/stores';
import { GetServerSideProps, NextPage } from 'next';

type UserProps = {
  user: UserType;
};

const User: NextPage<UserProps> = ({ user }) => {
  const { name, username, email, phone } = user;

  return (
    <div>
      <span>
        {name}, {username}, {email}, {phone}
      </span>
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
