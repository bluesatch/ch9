import React, { useState, Suspense, lazy } from 'react';
import Agreement from './components/Agreement';
// import Main from './components/Main';
import GridLoader from 'react-spinners/GridLoader';
import ErrorBoundary from './components/ErrorBoundary';
import Status from './components/Status';
import './App.css';
const Main = lazy(()=> import('./components/Main'));


const App=()=> {
  const [agree, setAgree] = useState(false);

  if(!agree)
    return <Agreement onAgree={()=> setAgree(true)} />;

  return (
    // <ErrorBoundary>
    //   <Suspense fallback={<ClimbingBoxLoader />}>
    //       <Main />
    //   </Suspense>
    // </ErrorBoundary>
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  )
}

export default App;
