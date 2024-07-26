import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/sadhvi1244')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <>
      <div className="text-center m-4 bg-gray-800 justify-center text-white p-4 text-3xl">
        Github followers: {data.followers}
      </div>
      <img
        className="p-8 size-60 mx-auto drop-shadow-2xl rounded-full "
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />

      <h1 className="text-center text-2xl font-serif">
        Hi 👋, I'm Sadhvi Kesarwani
      </h1>
      <p className="justify-center text-center m-6 text-lg font-serif">
        A passionate and driven to-be software engineer with expertise in Java
        programming, and Front-End web developer from India.
      </p>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sadhvi1244");
  return response.json();
};
