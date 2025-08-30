import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  const data = useLoaderData();
  console.log(data);

  // useEffect(() => {
  //     fetch('https://api.github.com/users/Sohail062003')
  //     .then(response => response.json())
  //     .then(data => {
  //        console.log(data);
  //        setData(data)
  //     })
  // },[])

  return (
    <div className="flex flex-col justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="flex justify-center text-center">
        <img
            src={data.avatar_url}
            alt="Git picture"
            width={300}
            className="text-center"
        />
      </div>
      <div>
        <p>Name: {data.name}</p>
        <p>Github followers: {data.followers}</p>
        <p>location: {data.location}</p>
        <p>Bio :{data.bio} </p>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sohail062003");
  return response.json();
};
