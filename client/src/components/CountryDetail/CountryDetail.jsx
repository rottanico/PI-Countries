
import style from './style.module.css'
import {connect} from 'react-redux'
import CardActivity from './CardActivity'


function CardDetail({ country}) {


    return <>
        <div className={style.container} id={country.id} >
            <img className={style.img}  src={country.img} alt={country.name} />
            <h2 className={style.texto}> {country.name}</h2>
            <h4 className={style.texto}>Continent:{country.continent}</h4>
            <h4 className={style.texto}>Capital:{country.capital}</h4>
            <h4 className={style.texto}>Subregion:{country.subregion}</h4>
            <h4 className={style.texto}>Area:{country.area}</h4>
            <h4 className={style.texto}>Populations:{country.population}</h4>
            <h4 className={style.texto}>Code(ISO3166):{country.id}</h4>
            <div>{country.touristActivities&&country.touristActivities.map((activity) => <CardActivity activity={activity} />)}</div>
        </div>
    </>
}
const mapStateToProps = (state) => {
    return {
        country: state.countryDetail
    }
}


export default connect(mapStateToProps,null)(CardDetail)