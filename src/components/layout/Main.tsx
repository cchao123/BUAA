import { ReactNode } from 'react';
import styles from './Main.module.scss';

type MainProps = {
  children: ReactNode;
  customStyle?: React.CSSProperties;
};

export default function Main({ children, customStyle }: MainProps) {
  return (
    <div className={styles.main} style={customStyle}>
      {children}
    </div>
  );
}
