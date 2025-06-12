import React from 'react'

const Selected = () => {
  return (
    <div className="grid mt-10 max-w-screen-lg grid-cols-7 gap-4  p-4 rounded-lg  mx-auto">
    <select className="select rounded-full  w-auto bg-gray-100">
      <option disabled>HeadPhone Type</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
    <select  className="select rounded-full  w-auto bg-gray-100">
      <option disabled>Price</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
    <select  className="select rounded-full  w-auto bg-gray-100">
      <option disabled>Review</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
    <select  className="select rounded-full w-auto bg-gray-100">
      <option disabled>Color</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
    <select className="select rounded-full  w-auto bg-gray-100">
      <option disabled>Material</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
    <select  className="select rounded-full w-auto bg-gray-100">
      <option disabled>Offer </option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
    <select className="select rounded-full w-auto bg-gray-100">
      <option disabled>All Filters</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
  </div>
  
  )
}

export default Selected