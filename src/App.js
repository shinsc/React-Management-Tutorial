import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '선덕',
    'birthday': '021222',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '011222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '허준',
    'birthday': '991222',
    'gender': '남자',
    'job': '대학생'
  }

]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              >
              </Customer>
            );
          })
        }
      </div>
      );
  }
}

export default App;
