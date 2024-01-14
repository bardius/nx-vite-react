import styles from './tableCell.module.scss';

/* eslint-disable-next-line */
export interface TableCellProps {}

export function TableCell(props: TableCellProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TableCell!</h1>
    </div>
  );
}

export default TableCell;
