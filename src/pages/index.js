import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [greeting, setGreeting] = useState('loading...');

  useEffect(() => {
    axios
      .get('/api/hello')
      .then((response) => response.data)
      .then((data) => setGreeting(data));
  }, []);

  return <div>{greeting}</div>;
}
