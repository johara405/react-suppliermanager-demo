import { PaperClipIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Nav from '../components/Nav'
import PageHeading from '../components/PageHeading'
import FormField from '../components/FormField'
import BackButton from '../components/BackButton'
import SaveButton from '../components/SaveButton'

export default function Example() {

  
  const router = useRouter();
  const supplierId = router.query.Id?.toString();
  let supplierList = require('../Suppliers.json');

  const supplier = supplierList.find(x=> x.Id === parseInt(supplierId));

  const [supplierName,setSupplierName] = useState(supplier.Company_Name)
  const [Id,setId] = useState(supplier.Id)
  const [factoryCode,setfactoryCode] = useState(supplier.Factory_Code)
  const [country,setCountry] = useState(supplier.Country)
  const [supplierType,setSupplierType] = useState(supplier.Supplier_Type)
  const [subCategory,setSubCategory] = useState(supplier.Sub_Category)
  const [twaApproval,setTWApproval] = useState(supplier.TWA_Approval)
  const [approvedForActivity,setApprovedForActivity] = useState(supplier.Approved_For_Activity)
  const [status,setStatus] = useState(supplier.Status)
  const [leadTechnical,setLeadTechnical] = useState(supplier.Lead_Technical)
  const [telephone,setTelephone] = useState(supplier.Telephone)
  const [email,setEmail] = useState(supplier.Email)
  const [locale,setLocale] = useState(supplier.Locale)
  const [website,setWebsite] = useState(supplier.Website)


  const updateJsonFile = () => {
        alert("Save Data " + supplierName);

        supplier.Id = Id;
        supplier.Company_Name = supplierName;
        supplier.Factory_Code = factoryCode;
        supplier.Country = country;
        supplier.Supplier_Type = supplierType;
        supplier.Sub_Category = subCategory;
        supplier.TWA_Approval = twaApproval;
        supplier.Approved_For_Activity = approvedForActivity;   
        supplier.Status = status;
        supplier.Lead_Technical = leadTechnical;
        supplier.Locale = locale;
        supplier.Website = website;

        const index = supplierList.findIndex(x => x === parseInt(supplierId))
        supplierList[index] = supplier;

        try {
         // TODO: Update json file here
          console.log("JSON data is saved.");
      } catch (error) {
          console.error(err);
      }

  };

    return (
      
<div >
<Nav />

<PageHeading title={supplierName}/>

  <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-8 sm:space-y-5">
          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Company Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <FormField title="Company Name" value={supplierName} onChange={setSupplierName}/>
              <FormField title="Status" value={status} onChange={setStatus}/>
              <FormField title="Locale" value={locale} onChange={setLocale}/>
              <FormField title="Factory Code" value={factoryCode} onChange={setfactoryCode}/>
              <FormField title="Country / Region" value={country} onChange={setCountry}/>
              <FormField title="Supplier Type" value={supplierType} onChange={setSupplierType}/>
              <FormField title="Sub Category" value={subCategory} onChange={setSubCategory}/>
              <FormField title="TWA Approval" value={twaApproval} onChange={setTWApproval}/>
              <FormField title="Approved For Activity" value={approvedForActivity} onChange={setApprovedForActivity}/>
              <FormField title="Lead Technical" value={leadTechnical} onChange={setLeadTechnical}/>
            </div>
          </div>
  
          <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Information</h3>
              
            </div>
            <FormField title="Email" value={email} onChange={setEmail}/>
            <FormField title="Telephone" value={telephone} onChange={setTelephone}/>
            <FormField title="Website" value={website} onChange={setWebsite}/>
          </div>
        </div>
  
        <div className="pt-5">
          <div className="flex justify-end">
          <BackButton />
          <SaveButton onClick={() => updateJsonFile()} />
            
           
          </div>
        </div>
      </div>


      </div>
    </div>
  </div>
</div>



      
    )
  }