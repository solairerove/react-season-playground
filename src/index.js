import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  let content;
  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Loader message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
