import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PostsContainer from './components/PostsContainer/PostsContainer';

function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
      <PostsContainer />
    </main >
  );
}

export default App;
