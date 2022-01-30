import Head from 'next/head'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        {/*  sidebar */}
        <Sidebar />
        {/*  center */}
      </main>

      <div>{/* player*/}</div>
    </div>
  )
}
