import { ReactElement, useState } from 'react';
import { TfiUser } from 'react-icons/tfi';
import { ButtonTwo } from '@ui/btn/btn';
import { Button } from '@ui/button';
import { Input } from '@ui/input/input';
import Head from 'next/head';
import { Layout } from 'src/layouts';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="bg-gray-50">
        <div className="container mx-auto space-x-2">
          <Button variants="secondary">Submit</Button>
          <Button size="md">Submit</Button>
          <ButtonTwo block={true} size="sm" variant="success">
            Validate
          </ButtonTwo>
        </div>
        <div className="container mx-auto w-[300px] space-x-2">
          <Input
            LeftIcon={TfiUser}
            error="Invalid Address"
            label="Email Address"
          />
        </div>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
