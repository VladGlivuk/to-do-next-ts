//styles
import { NextPage } from "next";
import MainLayout from "shared/components/MainLayout";
import styles from "./About.module.scss";

const About: NextPage = () => {
  return (
    <MainLayout title="About">
      <span className={styles.text}>
        This site was created to start and finish your Todo tasks
      </span>
    </MainLayout>
  )
}

export default About;