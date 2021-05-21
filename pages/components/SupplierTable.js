
import EditSupplierButton from './EditSupplierButton'
export default function SupplierTable({suppliers}) {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Country
                    </th>
                    <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Supplier Type
                    </th>
               
                    <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lead Technical
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {suppliers.map((supplier) => (
                    <tr key={supplier.Id}> 
                
                      <td className="px-6 py-4 w-100px overflow-ellipsis whitespace-nowrap">
                        <div >
                        <div className="text-sm font-semibold	 text-gray-900">{supplier.Company_Name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{supplier.Country}</div>

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{supplier.Supplier_Type}</div>
                        <div className="text-sm text-gray-500">{supplier.Sub_Category}</div>
                      </td>  
                     
                      <td className="px-6 py-4 whitespace-nowrap">

                        {supplier.Status == "Approved"  &&
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {supplier.Status}
                        </span>
                        }

                        {supplier.Status == "Delisted"  &&
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-green-800">
                        {supplier.Status}
                        </span>
                        } 

                        {supplier.Status == "In Progress"  &&
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                        {supplier.Status}
                        </span>
                        } 
                      
                      </td>  
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className=" italic text-sm text-gray-900">{supplier.Lead_Technical}</div>
                      </td>                  
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <EditSupplierButton supplierId={supplier.Id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }