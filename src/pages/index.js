import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [greeting, setGreeting] = useState('loading...');

  console.log(process.env.URL);

  useEffect(() => {
    axios
      .get('jamstack-poc.netlify.app/.netlify/functions/hello')
      .then((response) => {
        console.log(response);

        return response.data;
      })
      .then((data) => setGreeting(data));
  }, []);

  return <div>{greeting}</div>;
}
