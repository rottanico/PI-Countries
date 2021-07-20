
export default function CardActivity({activity}){
    return<div id={activity.id}>
    <h4> {activity.name} </h4>
    <p>difficulty:{activity.difficulty}</p>
    <p>Term:{activity.term}</p>
    <p>Season:{activity.season}</p>
    </div>
}