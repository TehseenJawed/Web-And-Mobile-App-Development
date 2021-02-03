import React ,{useEffect, useState} from 'react';
import state1 from '../../content/images/states1.png';
import axios from 'axios';
import './style.css'

const ALLCases = () =>{
    const [APIData, setAPIData] = useState({})
    useEffect( () =>{
        axios.get(`https://disease.sh/v3/covid-19/all`)
        .then(res => {
          setAPIData(res.data)
        })
        .catch((err)=> console.log(err))
      },[]) 
      const {activePerOneMillion, casesPerOneMillion, deathsPerOneMillion, recoveredPerOneMillion, todayDeaths} = APIData
      
    return(<>
    <h3 className='mainHeader'> World Wide Data</h3>
    <div className='AllContainer'>
      <div className='UpperContainer'>
        <img width='50' src={state1} />
        <div>
        <div className='innerText'>All Cases</div>
        <div className='innerValue'>{casesPerOneMillion}M</div>
        </div>
      </div>
      <div className='UpperContainer'>
        <img width='50' src={state1} />
        <div>
        <div className='innerText'>Active</div>
        <div className='innerValue'>{activePerOneMillion}M</div>
        </div>
      </div>
      <div className='UpperContainer danger'>
        <img width='50' src={state1} />
        <div>
        <div className='innerText primaryText'>All Death</div>
        <div className='innerValue primaryText'>{deathsPerOneMillion}M</div>
        </div>
      </div>
      <div className='UpperContainer'>
        <img width='50' src={state1} />
        <div>
        <div className='innerText'>Recovered</div>
        <div className='innerValue'>{recoveredPerOneMillion}M</div>
        </div>
      </div>
      <div className='UpperContainer primary'>
        <img width='50' src={state1} />
        <div>
        <div className='innerText primaryText'>Today</div>
        <div className='innerValue primaryText'>{todayDeaths}</div>
        </div>
      </div>
    </div></>)
}
export default ALLCases