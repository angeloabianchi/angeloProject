import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>My Portfolio</h1>
          <p>{message}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
