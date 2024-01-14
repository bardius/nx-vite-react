import styles from './tableRow.module.scss';

/* eslint-disable-next-line */
export interface TableRowProps {}

export function TableRow(props: TableRowProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TableRow!</h1>
    </div>
  );
}

export default TableRow;
