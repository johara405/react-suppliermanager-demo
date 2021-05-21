import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const SaveButton = props => {
    return (
        <div>
             <button
              onClick={() => props.onClick()}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
        </div>
    )
}

SaveButton.propTypes = {

}

export default SaveButton
