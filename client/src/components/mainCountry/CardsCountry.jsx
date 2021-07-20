import { connect } from 'react-redux'
import Main from './CardCountry'
function cards({ countries }) {
  
  return <div>{
        countries&& countries.map(country => {
          return  <Main country={country} />
         })
         }
         <hr/>
     </div>}
     

const mapStateToProps = state => {
 return{
      countries: state.country
}
}

export default connect(mapStateToProps,null)(cards)