
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/outline'

export default function EditSupplierButton({supplierId}) {
    return (
      <div>
                      <Link href={`/Details/${supplierId}`}>
                        <a className="text-gray-500 hover:text-gray-700">
                        <MenuIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </Link>
        
      </div>
    )
  }