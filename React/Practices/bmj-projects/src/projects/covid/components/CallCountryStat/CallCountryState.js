import React ,{useEffect, useState} from 'react';
import state1 from '../../content/images/states1.png';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import './style.css'

const ALLCases = () =>{
    const [callCountry, setCallCountry] = useState('')
    const [callData, setCallData] = useState({})
    
    useEffect( () =>{
        axios.get(`https://disease.sh/v3/covid-19/countries/${callCountry}?strict=true`)
        .then(res => {
          setCallData(res.data)
        })
        .catch((err)=> console.log(err))
      },[callCountry]) 
      const callCData= () =>{
          const getCountry = document.getElementById('countryData').value
          // console.log(getCountry)
        //   if(callCountry !== 'Pakistan'){
              setCallCountry(getCountry)
        //   }
      }
      const {cases, active, todayCases, recovered, deaths, critical, countryInfo, continent, country} = callData
      // if(callCountry == ''){
        // document.getElementsByClassName('mainBody').style.display='none'
      // }
    return(<div className='mainBody'>
    <h3 className='mainHeader'> Data in Country</h3>
    <div className='AllContainer'>
        <div className='callCountry AllContainer' >
        <div className='UpperContainer1  grow'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1'>Country</div>
        <div className='innerValue1'>{country}</div>
        </div>
      </div>
      <div className='UpperContainer1 danger'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1 primaryText'>Death</div>
        <div className='innerValue1 primaryText'>{deaths}</div>
        </div>
      </div>
        <div className='UpperContainer1'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1'>Cases</div>
        <div className='innerValue1'>{cases}</div>
        </div>
      </div>
      <div className='UpperContainer1'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1'>Active</div>
        <div className='innerValue1'>{active}</div>
        </div>
      </div>
      <div className='UpperContainer1'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1'>Today</div>
        <div className='innerValue1'>{todayCases}</div>
        </div>
      </div>
      <div className='UpperContainer1'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1'>Recovered</div>
        <div className='innerValue1'>{recovered}</div>
        </div>
      </div>
      
      <div className='UpperContainer1'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1'>Continent</div>
        <div className='innerValue1'>{continent}</div>
        </div>
      </div>
      <div className='UpperContainer1'>
        <img width='70' height='70' src={state1} />
        <div>
        <div className='innerText1'>Critical</div>
        <div className='innerValue1'>{critical}</div>
        </div>
      </div>
        </div>
        <div className='searchCountry'>
            <div className='desc'>Call For Weather</div>
            <input type='text' id='countryData' placeholder='Country Name'/>
            <button onClick={callCData}>Call Data</button>
        </div>
    </div>
    </div>)
}
export default ALLCases