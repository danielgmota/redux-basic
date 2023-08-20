import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: 'Daniel',
              age: 33,
              email: 'eu@danielmota.com.br',
            }),
          )
        }
      >
        Login
      </button>
    </div>
  );
}

export default Login;
