import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from  './components/Customer'

const customer = {
  'name' : '홍길동',
  'birthday' : '950730',
  'gender' : '남자'

}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
    />
  );
}

export default App;
