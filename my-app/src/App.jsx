import Banner from './components/sections/Banner/Banner';
import Card from './components/sections/Card/Card';
import './App.css';

function App() {
  return (
    <main>
      <Banner/>
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Card/>
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default App;
