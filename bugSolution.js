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
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
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