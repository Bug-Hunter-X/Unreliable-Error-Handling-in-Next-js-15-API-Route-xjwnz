```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await res.json();
      setData(jsonData);
    };

    fetchData().catch(error => {
      console.error('Error fetching data:', error);
      // Handle error appropriately, e.g., show an error message to the user
    });
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call that might sometimes fail
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Failed to fetch data from the server' });
  } else {
    res.status(200).json({ message: 'Data fetched successfully' });
  }
}
```