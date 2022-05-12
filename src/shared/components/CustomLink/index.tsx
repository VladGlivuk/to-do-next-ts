import { NextPage } from "next";
import Link from "next/link";

type CustomLink = {
  link: string;
  title: string;
  parentClassName?: string;
};

const CustomLink: NextPage<CustomLink> = ({ link, title, parentClassName }) => {
  return (
    <Link href={link}>
      <a className={parentClassName}>{title}</a>
    </Link>
  );
};

export default CustomLink;
