import React,{useState,useContext} from 'react'
import { shayariContext } from './App'
import axios from 'axios'
function Create() {

    const [data,setData] = useState({})
    const [result,setResult] = useState();
    const {userid} = useContext(shayariContext)

    const create=()=>{

        setData({...data,uid:userid})
    console.log(data)

    axios.put("https://shayari-pvwz.onrender.com/shayari", data).then(function (response) {
      console.log(response.data)
  setResult("Shayari Added!!!")
     }).catch(function(err){
      setResult("Something Went Wrong !!!")
   })




    }

  return (
    <div>
    <h1>Create Shayari</h1>

 
  <br></br><input type="text" placeholder='Enter Category' onChange={ (e)=>{setData({...data,category:e.target.value})} } />
  <br></br><textarea placeholder='Enter content' onChange={ (e)=>{setData({...data,content:e.target.value})} } ></textarea>
  <br/>
  <button onClick={(e)=>{create()}}>Create</button>
  <br/>
  {result}
  </div>
  )
}

export default Create