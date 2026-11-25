import Header from "./Header";

const Login = () => {
  return (
    <div className="relative">
      <img
        className="absolute w-36 mt-6 ml-25 mb-9 "
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAT4DsJqpLaLn4NdWj0hMqiS44NBBHsef6fJbMCXfInwFPyWRZWORRKIX6OoMypwFbV-skx1kkO0bw5qyPw4TGYECuHYwI_zw-n7CzjzEILCnaUNLQfmgkh-p1HzjExVEw9zDBrZd_di2.svg"
        alt="Netflix Logo"
      />
      <form className="3/12
      ">
        <div className="w-full absolute h-25 border-b border-amber-50">
          <div className=" ml-[30%] mt-10 w-full px-4 pt-30 text-white ">
            <h1 className="text-4xl pt-4 m-2 font-bold">
              Enter your info to sign in
            </h1>
            <h1 className="text-xl pt-2 m-2 align-baseline">
              Or get started with a new account.
            </h1>
            <div className="w-full">
              <input
                type="text"
                placeholder="Email or mobile number"
                className="bg-black p-4 m-2 text-xl rounded-xl pr-[15%] text-white-500 placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:border-white"
              />
            </div>
            <div className="w-full ml-1">
              <button className="bg-red-600 m-2 text-white font-bold py-3 px-2 text-center pr-[28%] rounded-xl hover:bg-red-500">
                Continue
              </button>
            </div>
            <p className="text-gray-500 text-m mt-4 ml-2">Get help?</p>
            <p>Forgot email or mobile number?</p>
            <p>Learn more about sign-in</p>
          </div>
        </div>
      </form>
      <Header />
    </div>
  );
};

export default Login;
