import {useState,useEffect}from 'react'
import axios from 'axios'


const Form =function (){
   
const [value,setValue]= useState({
    name:'',
    difficulty:0,
    term:0,
    season:'',
    idCountry:[]
})

const[list,setList]=useState([])
 /* useEffect(()=>{
    if(list.length===0){
    axios.get('http://localhost:3001/country/AllNames')
    .then(list=>{      
      setList(list.data)
     })
  }  
 },[]) */

  const subir= ()=>{
      const valor={
          name:value.name,
          difficulty:value.difficulty,
          term:value.term,
          season:value.season,
          idCountry:value.idCountry.split(", ")
      }
    try {
         axios.post('http://localhost:3001/activity',valor)
    } catch (error) {
        console.log(error)
    }
   
 } 
 
    const handleSubmit=(e)=>{
        e.preventDefault()
        subir()
     //  console.log( setValue({...value,idCountry:value.idCountry.split(", ")}))
       
    }
    const onChange=(e)=>{
       setValue(()=>{return{...value,[e.target.name]:e.target.value}})
    }
        
    
    

    
 


    return <form onSubmit={e=>handleSubmit(e)}>
        <input type='text' placeholder='Activity' name='name' onChange={e=>onChange(e)}/>
        <input type="range" placeholder='Difficulty' name="difficulty" min="1" max="5" onChange={e=>onChange(e)}/>
        <input type='number'  placeholder='term(min)'name='term' onChange={e=>onChange(e)} />
        <select name="season" onChange={e=>onChange(e)} >
        <option value="summer">Summer </option>
        <option value="autumn" >Autumn</option>
        <option value="spring">Spring</option>
        <option value="winter">Winter</option>
        <option value={null} selected>Null</option> 
        </select>
        <input name="idCountry" placeholder="country" onChange={e=>onChange(e)}/>
        
        <input name='submit' type='submit' placeholder='upload'/>
    </form> 
}
export default Form
