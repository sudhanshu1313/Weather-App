import React from 'react'
import { useParams } from 'react-router-dom'


    const Singlemovie = () =>{

        const { id } = useParams();
        return (

            <>
            
                <div>
                    <h1>Our single movie components { id }</h1>
                </div>
            
            </>
            )
    }
 


export default Singlemovie