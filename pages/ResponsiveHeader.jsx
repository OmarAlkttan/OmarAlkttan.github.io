import { useEffect } from "react";
import { useState } from "react";

function ResponsiveHeader(){

  const [name, setName] = useState("");
  const orgName = "I'm Omar Alktan."

  useEffect(()=>{
    if(name === orgName){
      return ;
    }
    const id = setInterval(()=>{
      setName(name => name.concat(orgName.at(name.length)))
    }, 150)
    
    return ()=> clearInterval(id);
  }, [name])

  return (
    <h1 className="text-white sm:text-7xl text-5xl lg:text-9xl font-bold text-center text-shadow-black text-shadow-lg">
      <span>{name}</span>
    </h1>
  )
}

export default ResponsiveHeader;