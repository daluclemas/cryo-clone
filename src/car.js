import {useEffect, useState} from 'react';

function Form() {

  const [state, setState] = useState({
    firstName: "",
    lastName: ""
  });

  useEffect(()=>{

        setTimeout(
            ()=>{
                console.log(state);
            }, 2000
        );
    });


  const handleChange = (evt)=> {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }



  return (

    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
    </form>

  );
    // const  [inpt, setInpt] = useState('');

    // useEffect(()=>{

    //     setTimeout(
    //         ()=>{
    //             console.log({inpt});
    //         }, 2000
    //     );
    // });

    // const handleSubmit =(e)=>{

    //     e.preventDefault();
    // }

    // const handleChange =(e)=>{

    //     setInpt(e.target.value);
    // }

    // return (
        
    //     <form onSubmit = {handleSubmit}>

    //         <input type = "text" value = {inpt} onChange = {handleChange} />
    //     </form>
    // )
  
}

export default Form;