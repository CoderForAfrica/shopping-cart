import { useState } from 'react';
import { ButtonTwo } from '@ui/btn/btn';
import { Input } from '@ui/input/input';
import { useRouter } from 'next/router';

import { registerUser } from '../api/register';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const RegisterComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<FormValues>({
    email: '',
    password: '',
    username: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await registerUser(userData);
    router.push('/');
  };

  return (
    <div className=" h-full w-full">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="w-34">
          <Input
            label="Username"
            name="username"
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            type="text"
            value={userData.username}
          />
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
          <ButtonTwo size="md" variant="secondary">
            Submit
          </ButtonTwo>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
