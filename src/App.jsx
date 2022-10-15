import Banner from './components/sections/Banner/Banner';
import Card from './components/sections/Card/Card';
import Navbar from './components/sections/Navbar/Navbar';
import Footer from "./components/sections/Footer/Footer";

function App() {
  return (
    <main className="min-h-screen relative bg-gray-50 pb-10">
      <Banner/>
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Card/>
          </div>
          <div className="w-full lg:w-2/3 ">
            <Navbar/>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
