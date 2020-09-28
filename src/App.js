import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer'


const useStyles = makeStyles({
  root:{
    width:'100%',
    overflowX:"auto"
  },
  table:{
    minWidth: 1080
  }
})



const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '950712',
    'gender': '남자'

  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '몽크',
    'birthday': '000720',
    'gender': '남자'

  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '윤정',
    'birthday': '950730',
    'gender': '여자'

  }
]

export default function App(){
    const classes = useStyles;
    return (
        <Paper className={classes.root}>
          <TableHead className={classes.table}>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c =>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender}/>);})}
        </TableBody>
        </Paper>
    );
}
