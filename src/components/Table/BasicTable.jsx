import * as React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, makeStyles } from '@material-ui/core';

const propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
      }),
    ).isRequired,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
    ).isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page:  PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
};

const useStyles = makeStyles({
  headerItem: {
    fontWeight: 600,
  },
  bodyRow: {
    cursor: 'pointer',
  },
});


const BasicTable = (props) => {
  const classes = useStyles();
  const { columns, rows, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, handleOpen } = props;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => {
                            return  <TableCell key={column.id} className={classes.headerItem}>{column.label}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                    <TableRow
                    className={classes.bodyRow}
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={() => handleOpen(row.id)}
                    >
                      {columns.map((column) => {
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </Paper>
  );
};

BasicTable.propTypes = propTypes;

export default BasicTable;