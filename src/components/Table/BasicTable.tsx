import React, { FunctionComponent, MouseEventHandler } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, makeStyles } from '@material-ui/core';

interface Props {
  columns: any;
  rows: any;
  page: number;
  handleChangePage: ( event: React.MouseEvent<HTMLButtonElement> | null, newPage: number,) => void;
  handleOpen: (id: number) => void;
  count: number;
};

const useStyles = makeStyles({
  paper: {
    width: '100%', 
  },
  container: {},
  table: {
    minWidth: 650,
  },
  headerItem: {
    fontWeight: 600,
  },
  bodyRow: {
    cursor: 'pointer',
    th: {
      '&:last-child': {
        border: 0
      },
    },
    td: {
      '&:last-child': {
        border: 0
      },
    },
  },
});


const BasicTable: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const { columns, rows, page, handleChangePage, handleOpen, count } = props;

  return (
    <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column: any) => {
                            return  <TableCell key={column.id} className={classes.headerItem}>{column.label}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row: any) => (
                    <TableRow
                    className={classes.bodyRow}
                    key={row.id}
                    onClick={() => handleOpen(row.id)}
                    >
                      {columns.map((column: any) => {
                        const value = row[column.id];
                        return (
                          <TableCell component="th" scope="row" key={column.id}>
                              {value}
                          </TableCell>
                        )
                        })}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20]}
          component="div"
          count={count}
          rowsPerPage={20}
          page={page}
          onPageChange={handleChangePage}
    />
    </Paper>
  );
};

export default BasicTable;