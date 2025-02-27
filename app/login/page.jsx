
"use client"
import { useRouter } from "next/navigation";
import { loginWithPassword, signup } from './actions'
import { useState, useEffect } from "react";
import { useUser } from "../context/context";

export default function SignUp() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [loginState, setLoginState] = useState(true);
    const { login, personalizedPlan } = useUser()
    const handleLogIn = async (e) => {
        e.preventDefault();
        const user = await login(email, password)
        console.log(personalizedPlan);

    }
    useEffect(() => {
        if (personalizedPlan) {
            console.log(personalizedPlan);
            router.push('/dashboard');
        }
    }, [personalizedPlan]);

    const handleSignUpWithEmailPassword = async (e) => {
        e.preventDefault();

        await signup(fullName, email, password)
        console.log("signup");
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <form onSubmit={loginState ? handleLogIn : handleSignUpWithEmailPassword}>
                {!loginState && (<div className="mb-4">
                    <label className="block text-sm font-semibold">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>)}
                <div className="mb-4">
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password (Minimum lenght 6)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <button
                    type="submit"

                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                >
                    <p>{login ? "LogIn" : "Signup"} </p>
                </button>

            </form>

            {/* <div className="mt-4 text-center">
                <button
                    onClick={handleGoogleSignUp}
                    className="w-full bg-red-500 text-white py-2 rounded-md"
                >
                    Sign Up with Google
                </button>
            </div> */}
            {login && (<div className="mt-4 text-center">
                <div onClick={() => setLoginState(false)}>Create an Account</div>
            </div>)
            }


        </div >
    );
}

// import React from "react";
// import Image from "next/image";
// import signupImage from "../../public/resources/images/signupImg.svg";
// const Signup = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [rePassword, setRePassword] = useState("");
//     const handleSignUpWithEmailPassword = async (e) => {
//         e.preventDefault();
//         if (password !== rePassword) {
//             alert("Passwords do not match")
//             return
//         }
//         await signup(email, password, rePassword)
//     };
//     return (
//         <div className="flex flex-col lg:flex-row min-h-screen w-full">
//             <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
//                 <h2 className="text-3xl font-bold mb-4 text-center">Sign up</h2>
//                 <p className="text-gray-600 mb-6 text-center">Grow Your Income and Brand. No Extra Effort.</p>

//                 <form className="w-full max-w-md " onSubmit={handleSignUpWithEmailPassword}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <input type="email" placeholder="Email-id" className="w-full p-2 border rounded"
//                             onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Password</label>
//                         <input type="password" placeholder="Password" className="w-full p-2 border rounded"
//                             onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Re-enter password</label>
//                         <input type="password" placeholder="Retype-password" className="w-full p-2 border rounded"
//                             onChange={(e) => setRePassword(e.target.value)} />
//                     </div>
//                     <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit"  >Sign Up</button>
//                 </form>

//                 <p className="mt-4 text-center">
//                     <a href="#" className="text-blue-600 hover:underline">Already have an account?</a>
//                 </p>
//             </div>

//             <div className="hidden lg:flex lg:w-1/2 relative">
//                 <Image src={signupImage} alt="Signup" layout="fill" objectFit="cover" />
//             </div>
//         </div>
//     );
// };

// export default Signup;





