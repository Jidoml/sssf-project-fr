import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";


export const GET_LOANS = gql`
    query Loans {
        loans {
            pickUp
            barrel {
                volume
                drink {
                    name
                }
                price
                id
            }
            user {
                username
            }
        }
    }
`;

interface barRes {
  volume: number;
  drink: {
    name: string;
  };
  price: number;
  id: string;
}

type loanData = {
  pickUp: string;
  barrel: barRes[];
  user: {
    username: string;
  };
}

function LoanTable () {
  const { loading, error, data } = useQuery(GET_LOANS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const loans: loanData[] = data.loans;

  return (
    /*<div>
      {
        loans.map((loan: loanData) => (
          <div>
            <h1>{loan.user.username}</h1>
            <p>{loan.pickUp}</p>
            {
              loan.barrel.map((barrel: barRes) => (
                <div>
                  <p>{barrel.drink.name}</p>
                  <p>{barrel.volume}</p>
                  <p>{barrel.price}</p>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>*/
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100, width: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">PickUp</TableCell>
            <TableCell align="right">Drink&nbsp;</TableCell>
            <TableCell align="right">Volume L&nbsp;</TableCell>
            <TableCell align="right">Price €&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans.map((row) => (
            <div>
            {row.barrel.map((barrel: barRes) => (
              <TableRow key={barrel.id} sx={{ '&:last-child td, &:last-child th': { border: 0} }}>
                <TableCell component="th" scope="row">
                  {row.user.username}
                </TableCell>
                <TableCell align="right">{row.pickUp}</TableCell>
                <TableCell align="right">{barrel.drink.name}</TableCell>
                <TableCell align="right">{barrel.volume}</TableCell>
                <TableCell align="right">{barrel.price}</TableCell>
              </TableRow>
              ))}
            </div>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LoanTable;
