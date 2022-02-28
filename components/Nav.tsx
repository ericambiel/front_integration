import Link from 'next/link';
import style from 'styles/Nav.module.css';

const Nav = (props: any) => {
  return (
    <div
      className={style.nav}
      style={{ backgroundColor: props.color ?? 'dodgerblue' }}
    >
      <Link href={props.destination}>{props.linkDescription}</Link>
    </div>
  );
};

export default Nav;
