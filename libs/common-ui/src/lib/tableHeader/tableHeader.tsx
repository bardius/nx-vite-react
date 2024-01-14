import styles from './tableHeader.module.scss';

/* eslint-disable-next-line */
export interface TableHeaderProps {}

export function TableHeader(props: TableHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TableHeader!</h1>
    </div>
  );
}

export default TableHeader;
