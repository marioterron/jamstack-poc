import React, { useEffect, useState } from 'react';

export default function Home() {
  const [greeting, setGreeting] = useState('loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setGreeting(data));
  }, []);

  return <div>{greeting}</div>;
}
