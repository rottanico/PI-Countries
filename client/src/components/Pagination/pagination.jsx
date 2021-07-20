import { getCountries, saveCurrent,searchCountries, getCountriesBy } from '../../redux/actions/countryActions'
import { connect, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import Button from './button'
import Cards from '../mainCountry/CardsCountry'
const PaginationApp = function ({ count,currentState, order,value,search,continent}) {
  const [current, setCurrent] = useState(currentState)

  const dispatch = useDispatch()
  useEffect(() => {!!value&& dispatch(getCountries(current, order)) },[order])

  const next = () => {
    if (current < count - 10) {
      setCurrent(current+10)
      dispatch(saveCurrent(current+10))
      if(!!value)dispatch(getCountries(current + 10, order))
      else{ 
        search.length === 0?dispatch(getCountriesBy(continent,current+10,order)):dispatch(searchCountries(search, order,current+10))
      }
    }
    else { window.alert('no hay mas paises') }
  }
  const previous = () => {
    if (current > 0) {
      setCurrent(current - 10)
      dispatch(saveCurrent(current-10))
      if(!!value)dispatch(getCountries(current - 10, order))
      else{
        search.length === 0?dispatch(getCountriesBy(continent,current-10,order)):dispatch(searchCountries(search, order,current-10))
       }
    }
    else { window.alert('no se puede retroceder') }
  }

  return <div>
    <div> <Button id={1} value='Next' mod={next} /> <Button id={2} value='Previous' mod={previous} /></div>
    <Cards />
    <div> <Button id={3} value='Next' mod={next} /> <Button id={4} value='Previous' mod={previous} /></div>
  </div>
}

const mapStateToProps = state => {
  return {
    currentState: state.current,
    count: state.count,
    order: state.order,
    search: state.search,
    continent:state.continent,
    countries:state.country
  }
}
export default connect(mapStateToProps, null)(PaginationApp)

