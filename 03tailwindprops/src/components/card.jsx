import React from 'react'

function card({userObject, btnText="Visit Link"}) {
    console.log("props - ",userObject.title);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline" >
            {userObject.title} </h1>
        <p className="text-lg text-gray-700"> {userObject.description}  </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {btnText}
        </button>
      </div>
    </>
  )
}

export default card
