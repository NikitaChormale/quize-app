import React, { useState } from 'react'
import "./App.css"
import questions from './data'
import { ArrowBigRight } from 'lucide-react';
import { ArrowBigLeft } from 'lucide-react';
import toast,{Toaster} from 'react-hot-toast';

function App() {


  const [questionIndex,setquestionIndex]=useState(0);
  const [optionstyles,setoptionstyles]=useState({
    0:{},
    1:{},
    2:{},
    3:{},
  });

  const prevQuestion = () => {
  if (questionIndex > 0) {
    setquestionIndex(questionIndex - 1);
  }
};



  const currentquestion=questions[questionIndex];
  const checkAnswer=(selectoption,idx)=>{
    if(currentquestion.answer===selectoption){
      toast.success("Corrct Answer");
      setoptionstyles({
        ...optionstyles,
        [idx]: {backgroundColor:"lightgreen"},
      })
    }
    else{
      toast.error("Wrong Answer! the correct answer is:"+currentquestion.answer);
      setoptionstyles({
        ...optionstyles,
        [idx]:{backgroundColor:"lightcoral"},
      })
    }
  };
  
  return (
    <div>
      <h1 className='questions-heading'>Quize App</h1>
      <p className='text-questions-no'>question:{questionIndex+1}</p>
      <p className='text-questions'>{currentquestion.question}</p>
      
      {currentquestion.options.map((option,idx)=> {
        return <div className='option-card'
         key={idx} 
        onClick={()=>{
          checkAnswer(option,idx);
        }}
        style={optionstyles[idx]}
        >
          {option}</div>
        
})}
     


<ArrowBigRight
className='img-next-questions'
onClick={()=>{
  if (questionIndex < questions.length - 1){
  setquestionIndex(questionIndex+1);
  setoptionstyles({
    0:{},
    1:{},
    2:{},
    3:{},
  });
}
}}
 />
 <ArrowBigLeft className='img-back-questions'
 onClick={prevQuestion}/>

 
<Toaster/>
    </div>
  )
}

export default App
