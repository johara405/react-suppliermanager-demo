import React from 'react'
import PropTypes from 'prop-types'

const PageHeading = props => {
    return (
        <div>
            <header className="bg-white shadow">
<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-bold text-gray-900">{props.title}</h1>
</div>
</header>
        </div>
    )
}

PageHeading.propTypes = {

}

export default PageHeading
