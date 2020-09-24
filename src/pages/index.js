import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [greeting, setGreeting] = useState('loading...');

  useEffect(() => {
    axios
      .get('/api/greeting')
      .then((response) => response.data)
      .then((data) => setGreeting(data.message));
  }, []);

  return <div>{greeting}</div>;
}
