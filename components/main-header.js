import Link from "next/link";
// import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    // <header>
    //   <ul className={classes.nav}>
    //     <li>
    //       <Link href="/" className={classes.link}>
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/news" className={classes.link}>
    //         News
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/archive" className={classes.link}>
    //         Archive
    //       </Link>
    //     </li>
    //   </ul>
    // </header>
    <header id="main-header">
        <div id="logo">
            <Link href="/">
                NextJS News
            </Link>
        </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
