import React,{useState} from 'react';
import Accordion from './Components/Accordian';
import Search from './Components/Search';
import DropDown from './Components/DropDown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const App =()=>{

   const items=[
       {
           title:'What is React?',
           content:'React is JS lib'
       },
       {
           title:'Why to use React?',
           content:'It is good'
       },
       {
           title:'How to use it?',
           content:'I am still learning'
       }
   ]

   const options=[
       {
           label:'The color Red',
           value:'red'
       },
       {
           label:'The color green',
           value:'green'
       },
       {
           label:'The color blue',
           value:'blue'
       }
   ]

   const [selected,setSelected]=useState(options[0]);

   return(
       
       <div>
          <Header Accordion={Accordion} Search={Search} DropDown={DropDown} Translate={Translate}/>
          <Route path="/">
             <Accordion items={items}/>
          </Route>
          <Route path="/list">
             <Search/>
          </Route>
          <Route path="/dropdown">
             <DropDown label="color" options={options} selected={selected} setSelected={selected}/>
          </Route>
          <Route path="/translate">
             <Translate/>
          </Route>
       </div>
   );
};

export default App;