import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PostsContainer from './components/PostsContainer/PostsContainer';
import { useState } from 'react';

function App() {
  // integration of react hooks
  const [isSignedIn, setIsSignedIn] = useState(false);


  // rendering the App body here
  return (
    <main className="App">
      <Header isSignedIn={isSignedIn} />
      <Banner />
      <PostsContainer
        setIsSignedIn={setIsSignedIn}
        isSignedIn={isSignedIn}
      />
    </main >
  );
}

export default App;
