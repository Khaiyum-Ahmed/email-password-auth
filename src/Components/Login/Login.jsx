import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

const Login = () => {

    const handleLogIn = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
        console.log("Log me in", name, email, password)

    }
    return (
        <div className="my-12">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogIn}>
                                <fieldset className="fieldset">
                                    <label className="label">UserName</label>
                                    <input type="text" 
                                     name="name"
                                     className="input" placeholder="User-Name" />
                                    <label className="label">Email</label>
                                    <input type="email"
                                    name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input"
                                    name="password" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;