
import React from 'react'
import style from './style.module.css'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { searchByIdCountries } from '../../redux/actions/countryActions'
function Main({ country, searchById }) {
   const handleClick = function () {
      searchById(country.id)
   }

   return <div className={style.container} id={country.id} >
      <Link to={`/country/${country.id}`}><button  className={style.button} onClick={() => handleClick()}>More</button></Link>
   
      <img src={country.img} alt={country.name} />  
      <h3 className={style.texto}> {country.name}</h3>
      <h5 className={style.texto}>Continent:{country.continent}</h5>
   </div>
}
const mapDispatchToProps = (dispatch) => {
   return {
      searchById: id => dispatch(searchByIdCountries(id))
   }
}

export default connect(null, mapDispatchToProps)(Main)