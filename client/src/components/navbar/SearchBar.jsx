import React, { useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchCountries, getCountriesBy, saveOrder, saveSearch, saveContinent } from '../../redux/actions/countryActions'
import style from './style.module.css'

function SearchBar({ searchCountries, searchCountriesBy, saveOrder, order }) {
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    toggleC: true,
    toggle: true,
    v: ''
  })
  useEffect(() => {
    if (value.toggle) {
      searchCountries(value.v, value.toggleC ? 'asc' : 'desc')
    }
    else {
      searchCountriesBy(value.v, (value.toggleC ? 'asc' : 'desc'))
    }

  }, [order])
  const handleClick = function (e) {
    if (e) {
      setValue({ toggle: !value.toggle, v: value.v, toggleC: value.toggleC })
      dispatch(saveSearch(''))
      dispatch(saveContinent(''))
    } else {
      setValue({ toggleC: !value.toggleC, v: value.v, toggle: value.toggle })
      saveOrder(!value.toggleC ? 'asc' : 'desc')
    }

    /* si a la funcion le pasamos si queremos modificar el filtrado por pais o por continente,
    si es true es por continente y modificamos el toggle a false,
    en cambio si es false modificamos el toggleC para ordenar ascendente o descendente */

  }
  const handleChange = function (e) {
    setValue({ v: e.target.value, toggle: value.toggle, toggleC: value.toggleC })

  }

  const handleSubmit = function (e) {
    e.preventDefault();
    if (value.toggle) {
      searchCountries(value.v, value.toggleC ? 'asc' : 'desc')
      dispatch(saveSearch(value.v))
    }
    else {
      dispatch(saveContinent(value.v))
      searchCountriesBy(value.v, (value.toggleC ? 'asc' : 'desc'))
    }


    /* explicacion: si toggle= true queremos buscar por continente y toggleC define si
     es ascendente o descendente, por default es ascendente */

  }

  return <div className={style.container} >
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <Link to='/countries/search'>
        <input
          type="text"
          placeholder="Country..."
          value={value.v}
          onChange={e => handleChange(e)}
        />
      </Link>
      <input type="submit" value="Search" className={style.buttom} ></input>
    </form>
    <div  >
      <button className={style.buttom}  onClick={e => { handleClick(false) }}>{value.toggleC ? 'ascending' : 'descending'}</button>
      <button  className={style.buttom} onClick={e => { handleClick(true) }}>{value.toggle ? 'country' : 'continent'}</button>
      < Link to='/countries'><button className={style.buttom} >Home</button></Link>
      <Link to='/activity'><button className={style.buttom}>Agregar</button> </Link>
    </div>
  </div>
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchCountries: (country, order) => dispatch(searchCountries(country, order, null)),
    saveOrder: (order) => dispatch(saveOrder(order)),

    searchCountriesBy: (continent, order) => dispatch(getCountriesBy(continent, null, order))
  }
}
const mapStateToProps = (store) => {
  return {
    order: store.order
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)