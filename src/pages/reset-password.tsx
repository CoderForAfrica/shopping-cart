import { useState } from 'react';
import { ButtonTwo } from '@ui/btn/btn';
import { Input } from '@ui/input/input';
import { useRouter } from 'next/router';
import { updatePassword } from 'src/api/resetPassword';

type FormValues = {
  password: string;
  passwordConfirmation: string;
  code: string | string[] | undefined;
};

const ResetPassword = () => {
  const { query } = useRouter();
  const router = useRouter();

  const [passwordData, setPasswordData] = useState<FormValues>({
    code: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    passwordData.code = query.code;

    await updatePassword(passwordData);
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
            label="Password"
            name="password"
            onChange={(e) =>
              setPasswordData({ ...passwordData, password: e.target.value })
            }
            type="password"
            value={passwordData.password}
          />
          <Input
            label="Passsword Confirm"
            name="passwordConfirm"
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                passwordConfirmation: e.target.value,
              })
            }
            type="password"
            value={passwordData.passwordConfirmation}
          />
          <ButtonTwo size="md" variant="secondary">
            Submit
          </ButtonTwo>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
