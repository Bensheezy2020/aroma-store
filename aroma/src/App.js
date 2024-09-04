/** @format */

// import logo from './logo.svg';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from './redux/actions/counterActions';
// import { addUserData, removeUserData } from './redux/actions/authActions';
// import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
// import Blogs from "./pages/Blogs";
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Signup from './pages/Signup.jsx';

function App() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const count = useSelector((state) => state.counter.count);
  // const myuser = useSelector((state) => state.auth.user);

  // const dispatch = useDispatch();
  return (
    // <div className='App'>
    //   <a>
    //     {myuser?.name} {myuser?.email}
    //   </a>

    //   <button onClick={() => dispatch(increment())}>Increment</button>

    //   <button onClick={() => dispatch(decrement())}>Decrement</button>

    //   <input
    //     value={name}
    //     type='text'
    //     placeholder='Enter name '
    //     onChange={(data) => setName(data.target.value)}
    //   />

    //   <input
    //     value={email}
    //     type='text'
    //     placeholder='Enter email '
    //     onChange={(data) => setEmail(data.target.value)}
    //   />
    //   <button onClick={() => dispatch(addUserData({ name, email }))}>
    //     add user
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch(removeUserData());
    //       setName('');
    //       setEmail('');
    //     }}>
    //     remove user
    //   </button>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
