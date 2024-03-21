import React from "react";
import "./GroupName.css";

const GroupName = ({ele, name, color ,data,setdata}) => {
  return (
    <div className="groupContainer" onClick={()=>{
      setdata(ele.id)
      console.log(data);
      console.log(ele.id);
    }}>
      <div
        style={{
          borderRadius: "100%",
          backgroundColor: color,
          minHeight: "40px",
          padding: "10px",
          minWidth: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffff",
        }} 
      >{`${name[0]}${name[name.length - 1]}`}</div>
      <div>{name}</div>
    </div>
  );
};

export default GroupName;
