import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './views/CountriesList'
import CountriesList2 from './views/CountriesList2'
import CountryDetails from './components/CountryDetails';
import CountryDetails2 from './components/CountryDetails2';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/list" element={<CountriesList /> }>
          <Route path=":countryId" element={<CountryDetails />} />
        </Route>
        <Route path="/list2" element={<CountriesList2 /> }>
          
        </Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
