import { NextPage } from 'next';
//styles
import styles from './About.module.scss';

const About: NextPage = () => {
  return (
    <div>
      <h1 className='title'>About</h1>
      <span className={styles.text}>This site was created to start and finish your Todo tasks</span>
    </div>
  );
};

export default About;
