import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const [errorMassage, setErrorMassage] = useState(null);
    const[successMassage, setSuccessMassage] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const handleSignUp=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // reset userMassage
        setErrorMassage(null);
        setSuccessMassage(false);

        if(password.length <8){
            setErrorMassage('Password should be 8 or more characters');
            return;
        }
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!regex.test(password)){
            setErrorMassage('atleast one number, one lowercase, one upper case and one special charater');
            return;
        }

        // create user with email and password

        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user)
            setSuccessMassage(true)
        })
        .catch(error=>{
            setErrorMassage(error.message)
        })


        console.log(name, email, password,"signup me")
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Sign-Up now!</h1>
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset relative">
                                <label className="label">UserName</label>
                                <input type="text"
                                name='name' className="input w-full" placeholder="User-Name" />
                                <label className="label">Email</label>
                                <input type="email"
                                name='email' className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type={showPassword ? "text" : "password"} className="input w-full" 
                                name = "password" placeholder="Password" />
                                <button onClick={()=>setShowPassword(!showPassword)}
                                 className="btn btn-xs text-xl absolute right-2 top-44">
                                    {
                                        showPassword ? <FaEye /> : <FaEyeSlash />
                                    }
                                    
                                    </button>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignUp</button>
                            </fieldset>
                        </form>
                        {
                            errorMassage && <p className="text-red-500">{errorMassage}</p>
                        }
                        {
                            successMassage && <p className="text-green-500">Sign up successfully</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;