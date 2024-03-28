import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Style.css'
import SearchIcon from '@mui/icons-material/Search';
function Home() {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                 setData(res.data)
                 setRecords(res.data);
                }
            )
            .catch(err => console.log(err));
    }, []);

    const Filter = (event)=>{
        setRecords(data.filter( f => f.name.toLowerCase().includes(event.target.value) ))
    }

    return (
        <>
            <div className='p-5 bg-light Main'>
                <div className='bg-white shadow border'>
                <center>
                    <span style={{fontFamily:'sans-serif',fontSize:'30px',color:'red'}}>Search Box</span>
                    <br></br>
                    <b style={{fontFamily:'sans-serif',fontSize:'15px'}}>  Create by  Sudhanshu Gaikwad </b>
                    </center>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                  
                                  <center>
                                    <input type='text' className='from-control mb-3' onChange={Filter}  placeholder='Search..!'/>  <SearchIcon/>
                                 </center>
                                </th>
                            </tr>
                            <tr style={{backgroundColor:'bisque',color:'red'}} >
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            {
                            records.map((Data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{Data.id}</td>
                                        <td>{Data.name}</td>
                                        <td>{Data.email}</td>
                                        <td>{Data.phone}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;
