import { useState } from 'react';
import { resetPassword } from '@ui/api/forgotPassword';
import { ButtonTwo } from '@ui/btn/btn';
import { Input } from '@ui/input/input';

type FormValues = {
  email: string;
};

const ForgetPassword = () => {
  const [emailData, setEmailData] = useState<FormValues>({ email: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await resetPassword(emailData.email);
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
              setEmailData({ ...emailData, email: e.target.value })
            }
            type="email"
            value={emailData.email}
          />

          <ButtonTwo size="md" variant="secondary">
            Submit
          </ButtonTwo>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
