'use client'
import Image from "next/image";
import { ArrowRight, Instagram, Twitter } from "lucide-react";
import image1 from "../../public/images/peach-goma-love.gif"
import { useState } from "react";
import Link from "next/link";



function Select() {
  const data = [
      {
          name: 'shivam Singh',
          image: image1,
          instaId: 'https://www.instagram.com/http.shivamsingh/',
          Xid: 'https://twitter.com/S_h_i_v_a_m_s_'
      },
      {
          name: 'shivam Singh',
          image: image1,
          instaId: 'https://www.instagram.com/http.shivamsingh/',
          Xid: 'https://twitter.com/S_h_i_v_a_m_s_'
      },
      
  ];

  const [count, setCount] = useState(0);

  function increaseCount() {
      setCount(count => count++);
  }

  return (
      <div className="bg-amber-100 w-[100vw] h-[100vh] ">
          <div className="bg-white w-[80%] h-full overflow-x-scroll absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className="text-xl my-3 font-bold text-center">Select Your Crush</h1>
              <div className="flex flex-wrap justify-evenly">

              {data.map((datas, index) => (
                <Card key={index} name={datas.name} image={datas.image} />
                ))}
                </div>
          </div>
      </div>
  );
}
function Card({image, name,instaId}){
    return(
        <div className="border-2 border-solid w-[200px] h-[260px] border-gray-600 rounded-md justify-between my-3 mx-3">
            <Image
            src={image}
            alt="Profile picture"
        ></Image>
            <h3 className="text-center">{name}</h3>
            <div className="flex gap-2 justify-center">
            <Link href='https://www.instagram.com/http.shivamsingh/'><Instagram></Instagram></Link>
            <Link href='https://twitter.com/S_h_i_v_a_m_s_'><Twitter></Twitter></Link>
            </div>
            <div className="flex justify-around my-2">


            <button
        className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        >
        view
      </button>
            <button
        className="w-[50%] select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        >
        Add
      </button>
          </div>
        </div>
    )
}
export default Select;
