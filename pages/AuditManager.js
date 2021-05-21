
import Link from 'next/link'
import Head from 'next/head'
import { MenuIcon } from '@heroicons/react/outline'
import Nav from './components/Nav'


export default function Home() {
    return ( 
    <div>
      <Nav />
            <Head>
        <title>Audit Manager</title>
        </Head>
<header className="bg-white shadow">
<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-bold text-gray-900">Audit Manager</h1>
</div>
</header>
<main className="bg-gray-100">
<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
  
</div>
</main>
    </div>
    )
  }
