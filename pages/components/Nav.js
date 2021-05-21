import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Nav() {
    return (
      <div>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="" style={{height: 35 + 'px'}}
                        src="/fclogo.png"
                        alt="Foods Connected"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        
                      <Link href={"/SuppliersList/"}>
                              <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                Supplier Manager
                              </a>   
                              </Link>
                              <Link href={"/Questionnaires/"}>
                              <a 
                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                              Questionnaires
                            </a>
                                </Link>                    
                            
                                <Link href={"/AuditManager/"}>
                              <a 
                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                              Audit Manager
                            </a>
                                </Link>    
                                <Link href={"/IncidentManager/"}>
                              <a 
                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                              Incident Manager
                            </a>
                                </Link>    
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    )
};