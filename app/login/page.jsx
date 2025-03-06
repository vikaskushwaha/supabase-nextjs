
"use client"
import { useRouter } from "next/navigation";
import { loginWithPassword, signup } from './actions'
import { useState, useEffect } from "react";
import { useUser } from "../context/context";
import Image from "next/image";
import loginImage from "../../public/resources/images/signupImg.svg";
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

        <div className="flex items-center justify-center bg-[#f8f9ff] w-full h-full">
            <div className="w-full h-full bg-[#f8f9ff] rounded-lg shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                <div className="flex flex-col py-10 px-4 md:px-10 items-center justify-center"> {/* Added px-4 for smaller screens */}

                    <div className="w-full max-w-md mx-auto lg:mx-0"> {/* Centered on small screens, left-aligned on larger screens */}
                        <h1 className="text-3xl font-bold text-gray-900 tracking-wider">Patient Login</h1>
                        <p className="text-gray-600 mt-2 tracking-wide">
                            Best personalized care. Powered by the best healthcare providers.
                        </p>
                    </div>


                    <div className="flex flex-col justify-center h-full w-full max-w-md mx-auto lg:mx-0"> {/* Centered on small screens, left-aligned on larger screens */}
                        <form onSubmit={handleLogIn} className="flex flex-col gap-y-4 w-full">
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                                    required
                                />
                            </div>
                            <div className="mt-8 flex flex-col">
                                <button
                                    type="submit"
                                    className="w-full md:w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg"
                                >
                                    <p>Login</p>
                                </button>

                                <p className="mt-4 text-blue-600 text-sm cursor-pointer hover:underline">
                                    Forgot password?
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side (Image) - Hidden on tablet, visible on desktop */}
                <div className="hidden lg:block relative h-[600px]">
                    <Image
                        src={loginImage} // Change this to your actual image path
                        alt="Login Illustration"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-r-lg"
                    />
                </div>
            </div>
        </div>

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





