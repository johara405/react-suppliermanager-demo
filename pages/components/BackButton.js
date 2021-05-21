import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const BackButton = props => {
    return (
        <div>
            <Link href={`/SuppliersList`}>
          <button  type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
              Back
            </button>
          </Link>
        </div>
    )
}

BackButton.propTypes = {

}

export default BackButton
