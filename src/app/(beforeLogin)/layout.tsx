import { ReactNode } from 'react';
import styles from '@/app/page.module.css';
type Props = {
  children: ReactNode;
  modal: ReactNode;
};

const HomeLayout = ({ children, modal }: Props) => (
  <div className={styles.container}>
    {children}
    {modal}
  </div>
);

export default HomeLayout;
