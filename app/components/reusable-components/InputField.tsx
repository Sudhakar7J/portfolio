import React from 'react'

const InputField = ({ type, placeholder, required, isFullWidth }: any) => {
  const inputClassName = `max-lg:w-full text-sm text-gray-600 font-semibold bg-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400 ${
    isFullWidth ? 'md:w-full' : ''
  }`
  return <input className={inputClassName} type={type} placeholder={placeholder} required={required} />
}

export default InputField
