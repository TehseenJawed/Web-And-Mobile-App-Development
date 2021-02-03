let AllAPI = ()=>{
    useEffect( () =>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`)
        .then(res => {
          
          const newWeather = res.data
          setWeatherData(newWeather)
          
        })
        .catch((err)=> console.log(err))
      },[flag])   
}
export {AllAPI};