import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Center from '../components/center'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className='flex flex-grow'>
        {/*  sidebar */}
        <Sidebar />
        <Center />
        {/*  center */}
      </main>

      <div>{/* player*/}</div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  }
}
