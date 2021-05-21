import React from 'react'
import PropTypes from 'prop-types'

const FormField = props => {
    return (
        <div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  {props.title}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    defaultValue={props.value} onChange={event => props.onChange(event.target.value)}  style={{height: "35px"}}
                    className="max-w-lg p-3  block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
        </div>
    )
}

FormField.propTypes = {

}

export default FormField
