import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [greeting, setGreeting] = useState('loading...');

  useEffect(() => {
    axios
      .get('/.netlify/functions/hello')
      .then((response) => {
        console.log(response);

        return response.data;
      })
      .then((data) => setGreeting(data.message));
  }, []);

  return <div>{greeting}</div>;
}
