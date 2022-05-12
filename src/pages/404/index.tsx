import { NextPage } from "next";
import CustomLink from "shared/components/CustomLink";
//styles
import styles from "./ErrorPage.module.scss";

const ErrorPage: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Error 404</h1>
      <span className={styles.description}>This url not found. You can <CustomLink link="/" title="go back home" parentClassName={styles.link} /></span>
    </div>
  )
}

export default ErrorPage;