// import Link from "next/link";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Sign In Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Sign In Page for Startup Nextjs Template",
// };

// const SigninPage = () => {
//   return (
//     <>
//       <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]"> 
//                 <h3 className="mb-3 text-center text-2xl font-bold text-red-500 dark:text-red-500 sm:text-3xl">
//                   Sign in to your account
//                 </h3>
//                 <p className="mb-11 text-center text-base font-medium text-gray-500">
//                   Login to your account for a faster checkout.
//                 </p>

//                 {/* Google Sign-in Button */}
//                 <button className="...">
//                   <span className="mr-3">
//                     <svg ...>
//                       {/* SVG content */}
//                     </svg>
//                   </span>
//                   Sign in with Google
//                 </button>

//                 {/* Github Sign-in Button */}
//                 <button className="...">
//                   <span className="mr-3">
//                     <svg ...>
//                       {/* SVG content */}
//                     </svg>
//                   </span>
//                   Sign in with Github
//                 </button>

//                 <div className="mb-8 flex items-center justify-center">
//                   <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
//                   <p className="w-full px-5 text-center text-base font-medium text-body-color">
//                     Or, sign in with your email
//                   </p>
//                   <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
//                 </div>

//                 <form>
//                   <div className="mb-8">
//                     <label htmlFor="email" className="...">
//                       Your Email
//                     </label>
//                     <input type="email" name="email" placeholder="Enter your Email" className="..." />
//                   </div>

//                   <div className="mb-8">
//                     <label htmlFor="password" className="...">
//                       Your Password
//                     </label>
//                     <input type="password" name="password" placeholder="Enter your Password" className="..." />
//                   </div>

//                   <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
//                     <div className="mb-4 sm:mb-0">
//                       <label htmlFor="checkboxLabel" className="...">
//                         <div className="relative">
//                           <input type="checkbox" id="checkboxLabel" className="sr-only" />
//                           <div className="box ...">
//                             <span className="opacity-0">
//                               <svg ...></svg>
//                             </span>
//                           </div>
//                         </div>
//                         Keep me signed in
//                       </label>
//                     </div>
//                     <div>
//                       <a href="#0" className="text-sm font-medium text-red-500 hover:underline">
//                         Forgot Password?
//                       </a>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <button className="...">
//                       Sign in
//                     </button>
//                   </div>
//                 </form>

//                 <p className="text-center text-base font-medium text-body-color">
//                   Don’t you have an account?{" "}
//                   <Link href="/signup" className="text-red-500 hover:underline">
//                     Sign up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Background SVG */}
//         <div className="absolute left-0 top-0 z-[-1]">
//           <svg ...>
//             <mask id="mask0_95:1005" ...>
//               <rect width="1440" height="969" fill="#090E34" />
//             </mask>
//             <g mask="url(#mask0_95:1005)">
//               <path ... fill="url(#paint0_linear_95:1005)" />
//               <path ... fill="url(#paint1_linear_95:1005)" />
//             </g>
//             <defs>
//               <linearGradient id="paint0_linear_95:1005" ...>
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//               <linearGradient id="paint1_linear_95:1005" ...>
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SigninPage;
