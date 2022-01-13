import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import Imagecard from './components/imageCard/Imagecard';
import {motion} from 'framer-motion'


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
    
  },[]);

  	// framer variants
	const parent = {
		visible:{
    
			opacity:1,
			transition:{
				when:"beforeChildren",
				staggerChildren:'0.3',
				duration:0.5
			}
		},
		hidden:{
     
			opacity:0
		}
	}

	const child = {
		visible:{
			opacity: 1
		},
		hidden:{
			opacity:0
		}
	}





  return (
    <div className="App">

      {error ? (<h1 style={{color:'red', gridColumn:'span 12', margin:'100px auto',width: '100%',textAlign:'center',textTransform:'capitalize'}}>{error}</h1>)  : 
        (<div style={{gridColumn:'span 12',width: '100%'}}>

          <Searchbar searchTerm={(text)=>setDate(text)} />

          <div className="imagecardcontainer">
            <h2>nasa rover images</h2>
    
            
    
            {loading ? (<h1 className='loader'></h1>) : (
              <motion.div className='imagecards' 
                animate="visible"
                initial="hidden"
                variants={parent}
              >

              {apiData.length === 0 && (<h1>no data found...</h1>)}

              {apiData.map(item=>{
               return(

                <motion.div className='cardbody' variants={child}>

                  <Imagecard key={item.id} url={item.img_src} camera={item.camera.name} rover={item.rover.name} date={item.earth_date} full_name={item.camera.full_name} />


                </motion.div>

    

    
               );
             })}
             
              </motion.div>
            )
              
            } 
            
          </div>
        </div>)
    
      }



    </div>
  );
}

export default App;
