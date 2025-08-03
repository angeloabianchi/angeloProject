import './App.css';
import Home from './Components/Home/Home';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import React, { useState, useEffect } from 'react';


const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        {isLoading ? (
          <LoadingScreen />
            ) : (
              <div className="home-container">
                <Home />
              </div>
            )}
      </div>

    </div>
  );
};
export default App;
