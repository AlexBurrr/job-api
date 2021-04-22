import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/home.scss'

const appID = '0e76c85d'
const apiKey = '750e1851861bbe29485f4db1b3927288'
const results = 20


//.replace(/<\/?[^>]+>/gi, '')
/* 
{jobs.map((job, index) => (
                <p key={index}>{job.title.replace(/<\/?[^>]+>/gi, '')}</p>
            ))}

*/

const Home = () => {

    const [jobs, setJobs] = useState('')
    const [city, setCity] = useState('')
    const [result, setResult] = useState([])

    let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appID}&app_key=${apiKey}&results_per_page=${results}&what=${jobs}&where=${city}`






    const jobHandler = (e) => {
        setJobs(e.target.value)
    }

    const cityHandler = (e) => {
        setCity(e.target.value)
    }

    const searchHandler = () => {
        axios.get(url)
            .then(res => {
                setResult(res.data.results);
            })

        console.log(result);

    }





    console.log(jobs);
    console.log(city);


    return (
        <div>
            <div className="container">
                <span className="logo">...</span>
                <div className="searchContainer">
                    <input className='job-input' type="" placeholder='search job...' onChange={jobHandler} />
                    <input className='city-input' type="text" placeholder='search city...' onChange={cityHandler} />
                    <button className="search-button" type='submit' onClick={searchHandler} >Go</button>

                </div>
                <div className="results">
                    {result.map((r, index) => (
                        <p key={index}>{r.title.replace(/<\/?[^>]+>/gi, '')}</p>
                    ))}

                </div>



            </div>



        </div>
    )
}

export default Home
