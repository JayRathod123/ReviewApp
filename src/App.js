import React, { useState } from 'react'
import UserReview from './Components/UserReview'
import Navbar from './Components/Navbar'
import Reviews from './Components/Reviews'
import {BrowserRouter , Routes , Route} from 'react-router-dom'


function App() {

  const[list , setList] = useState([]);

  const addlist = (title , Description , Rating)=>{
    
    if(title.length === 0){
      alert("please Add Title ! its required field")
    }
    if(Rating===""){
      alert("please Add Rating ! its required field")
    }

    if(Rating>5){
      alert("please Add Rating less than 5 !")
    }

    else{
    setList([...list,{title:title , Rating:Rating , Description:Description} ]);
    title = "";
    Rating = "";
    Description ="";
    }
  }

  const deleteList = (key)=>{
      let newList = [...list];
      newList.splice(key,1);
      setList([...newList])
  }
  
 
  return (
 
   <BrowserRouter>
    <Navbar/>

      <Routes>
          
          <Route path="/" element={<UserReview  addlist={addlist}/>} />

        
          <Route path="/Reviews" element={
            <div >
              {list.map((e, i) => (
                <div key={i} className="container mb-[10px]">  
                  <Reviews  key={i}  title={e.title} index={i} rate={e.Rating} deleteList={deleteList} Description={e.Description} />
                </div>
              ))}
            </div>
            }
          />
          
      </Routes>

  
    </BrowserRouter>
  )
}


export default App



