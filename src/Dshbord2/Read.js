import React,{useState,useContext,useEffect} from 'react'
import { shayariContext } from './App'
import axios from 'axios'
function Read() {
  const {userid} = useContext(shayariContext)
  const [shayari,setShayari] = useState([])
useEffect(()=>{
  axios.post("https://shayari-pvwz.onrender.com/shayari", {uid:userid}).then(function (response) {
    console.log(response.data)
    setShayari(response.data)
   }).catch(function(err){
    console.log("Something Went Wrong !!!")
 })


},[])

  return (
    <div>
      
{shayari.map((item)=>{

return(
<h3><b>{item.category}</b> <br/>{item.content}  <br/></h3>

)

})}

    </div>
  )
}

export default Read