// import logo from './logo.svg';
// import './App.css';cela=
import Navbar from './Components/Navbar';
import Filter from './Components/Filter'; 
import Cards from './Components/Cards';
import { apiUrl,filterData } from './data';
import Spinner from './Components/Spinner';
import { useEffect, useState } from 'react';
import {toast} from "react-toastify";
// import { useEffect } from 'react';

const App=()=> {

  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const [category, setCategory]=useState(filterData[0].title);


  async function fetchData(){
    setLoading(true); // we are making our loading true until our api is calling
    try{
      const res= await fetch(apiUrl);
      const output=await res.json();
      // console.log(data);
      setCourses(output.data); // data jo hmne variable ke aandr api ka response save kraya or uske aandr jo data ki key pdi h use hmne call kr diya
    }
    catch(error){
      toast.error("something went wrong");
    }
    setLoading(false); // we are making our loading false when api call fetch the data
  }
// fetch data ko hmne call to kra ni to hmne uske liye use effect likh diya ki jb bhi hmara component render hoga tb fetch data() function call hojaega

  useEffect(()=>{
  fetchData();
  },[])
  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
    <div >
      <Navbar/>
    </div>
    <div className='bg-bgDark2'>

    <div >
      <Filter
        filterData={filterData} category={category} setCategory={setCategory}//as a prop hmne send kr diya d
  />
    </div>

    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
    {
      loading ? (<Spinner/>): (<Cards courses={courses} category={category}/>)
    }
    </div>
    </div>  
    </div>
  );
}

export default App;
