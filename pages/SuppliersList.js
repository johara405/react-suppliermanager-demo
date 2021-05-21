import {useState} from 'react'
import Head from 'next/head'
import Nav from './components/Nav'
import SupplierTable from './components/SupplierTable'
import PageHeading from './components/PageHeading'
export default function SupplierList() {
  const supplierList = require('./Suppliers.json');
  const [suppliers,setSuppliers] = useState(...supplierList)

  
  return ( 
    <div>
      <Nav />
            <Head>
        <title>Supplier Manager</title>
        </Head>
<PageHeading title="Supplier Manager"/>
<main className="bg-gray-100">
<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
  <SupplierTable suppliers={supplierList} />
</div>
</main>
    </div>
    )
  }

 