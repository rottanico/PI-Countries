import {useEffect} from 'react';
import axios from 'axios'
import Cards from './components/mainCountry/CardsCountry'
import Navbar from './components/navbar/NavBar'
import {Route} from 'react-router-dom'
import CardsDetail from './components/CountryDetail/CountryDetail'
import PaginationApp from './components/Pagination/pagination'
import Form from './components/Form/Form'

 function  App() {
 
   const getCountries = async function () {
      const result= await axios.get( `http://localhost:3001/Home` )
   const valor=result.statusText?'base de datos cargada':'no hermano'
    console.log(valor)
  }
    useEffect(() => {
      getCountries()
  },[])   
  return (
    <div className="App">
     <Navbar/>
      <Route exact path="/countries">
        <PaginationApp value={true}/>
      </Route> 
     
     <Route  path='/countries/search'>
        <PaginationApp value={false}/>
       </Route>
      
      <Route exact path='/country/:country' >
        <CardsDetail />
     </Route>
     
     <Route exact path='/activity' >
        <Form/>
     </Route>
    </div>
  );
}

export default App;
