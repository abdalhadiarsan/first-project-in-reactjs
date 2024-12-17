import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import HeroRegister from "../../components/heroRegister/HeroRegister";

const Hero = () => {
  const users = useSelector((state) => state.user.users);
  
  const [registerOr, setRegisterOr] = useState(false)
  
  
  function registerOr3() {
    if( users.length < 0 ){ 
      return <HeroRegister />
    } else{ 
      console.log('sdf')
    }
  }
  const status = 
  useEffect(() => {
    registerOr3()
    console.log(users);
  }, [users]);
  return (
    <div>
      <div>

        {status}
      </div>
      <Outlet />
    </div>
  );
};

export default Hero;
