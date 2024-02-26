import React, { useEffect, useState } from "react";
import axios from 'axios'
const DashboardImpresion = () => {
    let [quiz,setquiz]=useState('')
    let [ques,setques]=useState('')
    let [impression,setimpression]=useState('')
    useEffect(()=>{
        let res=axios.get("/getDashboardData")
        console.log(res);
    },[])
  return (
    <>
     <div className="Dashboard1">
     <div className="DashboardImpressionCreatedQuiz">
        <h1>{quiz}</h1>
        <h3>Quiz</h3>
        <p>Created</p>
      </div>
      <div className="DashboardImpressionCreatedQuestion">
        <h1>{ques}</h1>
        <h3>Questions </h3>
        <p>Created</p>
      </div>
      <div className="DashboardImpressionCreatedImpression">
        <h1>{impression}</h1>
        <h3>Total</h3>
        <p>Impressions</p>
      </div>
     </div>
    </>
  );
};

export default DashboardImpresion;
