/** @format */

import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/actions/counterActions';
import { addUserData, removeUserData } from './redux/actions/authActions';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const count = useSelector((state) => state.counter.count);
  const myuser = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  return (
    <div className='App'>
      <a>
        {myuser?.name} {myuser?.email}
      </a>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <input
        value={name}
        type='text'
        placeholder='Enter name '
        onChange={(data) => setName(data.target.value)}
      />

      <input
        value={email}
        type='text'
        placeholder='Enter email '
        onChange={(data) => setEmail(data.target.value)}
      />
      <button onClick={() => dispatch(addUserData({ name, email }))}>
        add user
      </button>
      <button
        onClick={() => {
          dispatch(removeUserData());
          setName('');
          setEmail('');
        }}>
        remove user
      </button>
    </div>
  );
}

export default App;
