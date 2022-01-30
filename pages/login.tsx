import { getProviders, signIn } from 'next-auth/react';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline';

function Login({ providers }) {
  return (
    <div
      className="text-center h-screen w-screen flex items-center flex-col justify-center relative"
      style={{ backgroundColor: 'black' }}
    >
      <div className="bg-black w-screen h-40 flex items-center justify-center relative">
        <img
          className="w-16 md-20 lg:w-24 bg-white rounded-full mr-7 md:mr-12 "
          src="https://links.papareact.com/9xl"
          alt="spotify logo"
        />
        <h1
          className="text-4xl lg:text-9xl md:text-7xl  uppercase font-bold"
          style={{
            color: '#1ed760',
          }}
        >
          spotify
        </h1>
        <small className="absolute top-[6.5rem] right-[30rem] font-extrabold uppercase text-lg text-white hidden lg:block">
          Clone
        </small>

        {Object.values(providers).map((provider: any) => (
          <div
            key={provider.name}
            className="absolute top-auto w-20 h-20 bg-transparent right-10 cursor-pointer"
          >
            <ChevronDoubleRightIcon
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="w-20 h-20 animate-pulse"
              style={{ color: '#1ed760' }}
            />
          </div>
        ))}
      </div>

      <footer className='w-100 h-100'>
        <div className="text-center text-white font-mono flex items-center">
          <p> &copy; 2022 spotify clone &nbsp; </p>
          <a href="https://www.linkedin.com/in/jhon-freiman-arias-b87021125/" rel='noopener noreferrer' target="_blank" className="text-white font-mono hover:cursor-pointer hover:underline underline-offset-4">By Jhon Freiman Arias</a>
        </div>
      </footer>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
