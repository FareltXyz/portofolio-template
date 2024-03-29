"use client"
import Navbar from "@/components/Navbar"
import "@/app/globals.css";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoDiscord } from "react-icons/io5"
import { MdCancel } from "react-icons/md";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function Pages() {
  useEffect(() => {
    document.getElementById("remove").addEventListener("click", remove)
  }, [])
  function SendMessage() {

    fetch("/api/sendcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: document.getElementById("name").value,
        email: document.getElementById("email").value,
        msg: document.getElementById("message").value,
      }),
    });
  }

  function check() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    document.getElementById("length").innerHTML = message.value.length + "/225"
    if (name.value || email.value || message.value) {
      document.getElementById("remove").classList.remove("translate-y-[-1000px]")
      document.getElementById("removexs").classList.remove("opacity-0")
    } else if (!name.value && !email.value && !message.value) {
      document.getElementById("remove").classList.add("translate-y-[-1000px]")
      document.getElementById("removexs").classList.add("opacity-0")
    }
  }

  function remove() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    name.value = null
    email.value = null
    message.value = null
    document.getElementById("remove").classList.add("translate-y-[-1000px]")
    document.getElementById("removexs").classList.add("opacity-0")
    document.getElementById("length").innerHTML = "0/225"
  }
  return (
    <>
      <Navbar menu1="Project" menu2="Portofolio" />
      <main className="flex justify-center items-center w-screen h-80 mt-10">
        <Toaster />
        <div className="w-2/5 md:w-2/4 h-full flex items-center flex-col static">
          <form onSubmit={SendMessage} >
            <h1 className="text-xl text-center font-extrabold text-[var(--txt)] ">Get In Touch 📮</h1>
            <div className="flex flex-row space-x-2.5 mt-2.5">
              <label htmlFor="name" >
                <p className="text-[var(--txt)]">
                  Name<span className="text-[#c62707] ml-1 text-lg">*</span>
                </p>
                <input
                  id="name"
                  name="from"
                  type="text"
                  onChange={check}
                  className="h-5 w-32 xs:w-52 md:w-56 mt-2.5 focus:outline-none pl-1.5 text-[var(--txt)] rounded-md bg-[#2a2a2a] py-4"
                  placeholder="Your name"
                  required />
              </label>
              <label htmlFor="Email" >
                <p className="text-[var(--txt)]">
                  Email<span className="text-[#c62707] ml-1 text-lg">*</span>
                </p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={check}
                  className="h-5 w-32 xs:w-52 md:w-56 mt-2.5 focus:outline-none pl-1.5 text-[var(--txt)] rounded-md bg-[#2a2a2a] py-4"
                  placeholder="Your email"
                  required />
              </label>
            </div>
            <div className="flex flex-col items-center ">
              <label htmlFor="message" className="w-full">
                <div className="flex flex-row justify-between">
                  <p className="text-[var(--txt)] mt-2">
                    Message<span className="text-[#c62707] ml-1 text-lg">*</span>
                  </p>
                  <p id="length" className="text-[var(--txt)] mt-2.5">0/225</p>
                </div>
                <textarea
                  id="message"
                  name="msg"
                  className="bg-[#2a2a2a] resize-none p-3 text-[var(--txt)] w-[99.5%] rounded-md h-40 mt-2 focus:outline-none "
                  maxLength={225}
                  onChange={check}
                  placeholder="Type Somethings..."
                  required
                >

                </textarea>
              </label>
              <div className="relative text-[var(--txt)] flex justify-end flex-row w-[100%]"><button id="removexs" onClick={remove} title="remove" className="absolute bottom-[138px] scale-150 right-3.5 transition-all opacity-0 ease-in-out duration-[600ms] md:hidden" type="button"><MdCancel /></button></div>
            </div>
            <div className="h-[1px] mt-2.5 w-full bg-white"></div>
            <div className="w-[75%] md:w-[44%]">
              <Link href="mailto:fareltxyz@gmail.com" className="flex flex-row text-[var(txt--)] mt-3 hover:scale-90 hover:translate-x-[-10px]">
                <MdOutlineEmail className="m-1.5 text-[var(--txt)]" />
                <p className="text-[var(--txt)]">
                  fareltxyz@gmail.com
                </p>
              </Link>
              <Link href="https://discordapp.com/users/823379272127348796" className="flex flex-row text-[var(txt--)] hover:scale-90 hover:translate-x-[-10px]">
                <IoLogoDiscord className="m-1.5 text-[var(--txt)]" />
                <p className="text-[var(--txt)]">
                  FareltXyz#2553
                </p>
              </Link>
            </div>
            <button id="remove" className="group hidden md:flex bg-red-600 rounded-full w-10 h-10 justify-center items-center right-10 bottom-20 mb-5 translate-y-[-1000px] transition-transform ease-in-out duration-200 fixed" type="button" title="remove"> <MdCancel className="text-2xl text-[var(--txt)]" /> </button>
            <button className="bg-green-600 rounded-full w-10 h-10 flex justify-center items-center right-10 bottom-10 fixed" type="submit" title="Send"> <IoMdSend className="text-2xl text-[var(--txt)]" /> </button>
          </form>
        </div>
      </main>
    </>
  )
}