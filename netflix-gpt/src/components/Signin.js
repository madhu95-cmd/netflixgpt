import Header from "./Header";
import { useState } from "react";

const Signin = () => {
  const[IsSignUpForm, setIsSignUpForm] = useState(true);
  
  const toggleSignUpForm =() =>{
    setIsSignUpForm(!IsSignUpForm);
  }

  return (
    <div className="relative h-screen w-full">
     <div className="absolute p-4 m-4 z-20">
        <Header />
      </div>
      <img
        className="absolute inset-0 p-2 h-full w-full object-cover bg-opacity-10"
        src="https://occ-0-7146-993.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
        alt="background image"
      />

     <form
        className="absolute  z-10 flex w-1/4 top-1/4 left-1/3 p-2 flex-col rounded bg-opacity-50 bg-gray-900/70 text-white"
      >
        {IsSignUpForm ? ( <h1 className="text-2xl font-bold">Sign In</h1> ): (<h1 className="text-2xl font-bold">Sign Up</h1>)}
        <input type="text" className="p-2 m-2 rounded-xl bg-gray-600 " placeholder="Enter Email Address" />
        <input
          type="password"
          className="p-2 m-2 rounded-xl text-white bg-gray-600"
          placeholder="Enter Password"
        />
        { !IsSignUpForm && (
          <input
            type="password"
            className="p-2 m-2 rounded-xl text-white bg-gray-600"
            placeholder="Confirm Password"
          />
        )}
        {
          !IsSignUpForm && (
            <input type="text" className="p-2 m-2 rounded-xl bg-gray-600" placeholder="Enter Your Name" />
          )
        }
        <button type="submit" className="bg-red-600 rounded-xl text-white p-4 m-4">
          {IsSignUpForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm py-2 hover:underline cursor-pointer" onClick={toggleSignUpForm}>
          { IsSignUpForm ? ("New to Netflix?Sign up now"): ("Already have an account? Sign in")}
        </p>
      </form>
    </div>
  );
};

export default Signin;
