import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import CustomLink from '../../shared/components/CustomLink';
//styles
import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
  title?: string;
};
const MainLayout: NextPage<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>ToDo List</title>
        <meta name='keywords' content='next, to-do-list' />
        <meta name='description' content='application for creating to-do tasks' />
        <meta charSet='utf-8' />
      </Head>

      <nav className={styles.nav}>
        <CustomLink link='/' title='Home' />
        <CustomLink link='/about' title='About' />
        <CustomLink link='/allTasks' title='All Tasks' />
        <CustomLink link='/allUsers' title='All Users' />
      </nav>
      <h1 className={styles.title}>{title}</h1>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
