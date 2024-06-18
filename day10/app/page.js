'use client'
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { BsFillBagFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <header>
        <nav>
          <div>
            <h1>KingerCycle</h1>
          </div>
          <div>
            <h3>i want to rent </h3>
            <IoIosSearch />
          </div>
          <div>
            <ul>
              <li><h3>Wheels</h3></li>
              <li><h3>Banglore</h3></li>
              <li><h3>Divarage Raj</h3></li>
              <li><h3><BsFillBagFill /></h3></li>
            </ul>
          </div>
        </nav>
      </header>
      
    </main>
  );
}
