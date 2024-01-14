import styles from './tableFooter.module.scss';

/* eslint-disable-next-line */
export interface TableFooterProps {}

export function TableFooter(props: TableFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TableFooter!</h1>
    </div>
  );
}

export default TableFooter;
