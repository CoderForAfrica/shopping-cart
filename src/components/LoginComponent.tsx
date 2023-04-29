import { useState } from 'react';
import { ButtonTwo } from '@ui/btn/btn';
import { Input } from '@ui/input/input';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { API } from '../constant/constant';

type FormValues = {
  email: string;
  password: string;
};

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<FormValues>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/auth/local`, {
        identifier: userData.email,
        password: userData.password,
      });
      localStorage.setItem('accessToken', response.data.jwt);
      // redirect to profile page
      router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-full w-full">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="w-34">
          <Input
            label="Email"
            name="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            value={userData.email}
          />
          <Input
            label="Password"
            name="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            value={userData.password}
          />
          {error && <p>{error}</p>}
          <Link href="/forgot-password">
            <p>Forget password</p>
          </Link>
          <ButtonTwo size="md" variant="secondary">
            Submit
          </ButtonTwo>
        </div>
        <p>
          create an account ?<Link href="/register">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;
