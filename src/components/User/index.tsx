import { FC } from 'react';
//types
import { UserType } from 'core/types/stores';
//components
import CustomLink from 'shared/components/CustomLink';
//styles
import styles from './User.module.scss'

type UserProps = {
  user: UserType;
};

const User: FC<UserProps> = ({ user }) => {
  const {id, name, username, email, phone } = user;

  return (
    <div>
      <span>
        {name}, {username}, {email}, {phone} <CustomLink title="Show more" link={`user/${id}`} parentClassName={styles.link} />
      </span>
    </div>
  );
};

export default User;