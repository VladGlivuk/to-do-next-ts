import { NextPage } from 'next';
import Head from 'next/head';
//components
import CustomLink from 'shared/components/CustomLink';
//styles
import styles from './ErrorPage.module.scss';

const ErrorPage: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>404</title>
      </Head>

      <h1 className='title'>Error 404</h1>
      <span className={styles.description}>
        This url not found. You can <CustomLink link='/' title='go back home' parentClassName={styles.link} />
      </span>
    </div>
  );
};

export default ErrorPage;
