import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './hooks/useLocation';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    return (
      <div>
        <p />
Error:
        {errorMessage}
        <p />
      </div>
    );
  }
  if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Loader message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
