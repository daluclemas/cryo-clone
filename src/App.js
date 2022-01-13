import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import Imagecard from './components/imageCard/Imagecard';


function App() {

  const [apiData, setApiData] = useState([]);

  const [date, setDate] = useState('2015-6-3');
  // 2015-6-3

  const [loading, setloading] = useState(true);

  const [error, setError] = useState('')

  useEffect(()=>{

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setApiData(data.photos);

      setloading(false)
    }).catch(err=>setError(`an error has occurred : ${err.message}`))
    
  },[])

  // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.REACT_APP_API_KEY}

  // https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}
  // <Imagecard url={apiData.url} title={apiData.title} explanation={apiData.explanation} date={apiData.date} />


  return (
    <div className="App">

      {error ? (<h1 style={{color:'red', gridColumn:'span 12', margin:'100px auto',width: '100%',textAlign:'center',textTransform:'capitalize'}}>{error}</h1>)  : 
        (<div style={{gridColumn:'span 12',width: '100%'}}>

          <Searchbar searchTerm={(text)=>setDate(text)} />

          <div className="imagecardcontainer">
            <h2>nasa rover images</h2>
    
            
    
            {loading ? (<h1>loading...</h1>) : (
              <div className='imagecards'>

              {apiData.length === 0 && (<h1>no data found...</h1>)}

              {apiData.map(item=>{
               return(
    
                <Imagecard key={item.id} url={item.img_src} camera={item.camera.name} rover={item.rover.name} date={item.earth_date} full_name={item.camera.full_name} />
    
               );
             })}
             
              </div>
            )
              
            } 
            
          </div>
        </div>)
    
      }



    </div>
  );
}

export default App;
