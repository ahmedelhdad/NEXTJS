import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";

const Footer = () => {
  return (

    <footer className=' bg-white shadow-2xl  pt-32 space-y-12 '>
      <div className='flex container mx-auto px-8 justify-between'>
        <h1 className='text-lg font-medium text-textColor w-96 leading-loose  '>Design amazing digital experiences that create more happy in the world.</h1>
        <div className='space-y-3'>
          <Link href='' className='text-2xl  font-bold text-links'>Product</Link>

          <div className='space-y-3 text-lg text-links font-medium'>
            <div>
              <Link href=''>Overview </Link>
            </div>
            <div>
              <Link href=''>Features </Link>
            </div>
            <div className='space-x-4'>
              <Link href=''>Solutions </Link>
              <span className='bg-blue-800 text-white rounded-2xl p-2 '>New</span>
            </div>
            <div>
              <Link href=''>Tutorials </Link>
            </div>
            <div>
              <Link href=''>Pricing </Link>
            </div>
            <div>
              <Link href=''>Releases </Link>
            </div>
          </div>


        </div>
        <div className='space-y-3'>
          <Link href='' className='text-2xl  font-bold text-links'>Company</Link>

          <div className='space-y-3 text-lg text-links font-medium'>
            <div>
              <Link href=''>About us </Link>
            </div>
            <div>
              <Link href=''>Careers </Link>
            </div>
            <div>
              <Link href=''>Press </Link>
            </div>
            <div>
              <Link href=''>News </Link>
            </div>
            <div>
              <Link href=''>Media kit </Link>
            </div>
            <div>
              <Link href=''>Contact </Link>
            </div>
          </div>


        </div>
        <div className='space-y-3'>
          <Link href='' className='text-2xl  font-bold text-links'>Resources</Link>

          <div className='space-y-3 text-lg text-links font-medium'>
            <div>
              <Link href=''>Blog </Link>
            </div>
            <div>
              <Link href=''>Newsletter </Link>
            </div>
            <div>
              <Link href=''>Events </Link>
            </div>
            <div>
              <Link href=''>Help centre </Link>
            </div>
            <div>
              <Link href=''>Tutorials </Link>
            </div>
            <div>
              <Link href=''>Support </Link>
            </div>
          </div>


        </div>
        <div className='space-y-3'>
          <Link href='' className='text-2xl  font-bold text-links'>Social</Link>

          <div className='space-y-3 text-lg text-links font-medium'>
            <div>
              <Link href=''>Twitter </Link>
            </div>
            <div>
              <Link href=''>LinkedIn </Link>
            </div>
            <div>
              <Link href=''>Facebook </Link>
            </div>
            <div>
              <Link href=''>GitHub </Link>
            </div>
            <div>
              <Link href=''>AngelList </Link>
            </div>
            <div>
              <Link href=''>Dribbble </Link>
            </div>
          </div>


        </div>
        <div className='space-y-3'>
          <Link href='' className='text-2xl  font-bold text-links'>Legal</Link>

          <div className='space-y-3 text-lg text-links font-medium'>
            <div>
              <Link href=''>Terms </Link>
            </div>
            <div>
              <Link href=''>Privacy </Link>
            </div>
            <div>
              <Link href=''>Cookies </Link>
            </div>
            <div>
              <Link href=''>Licenses </Link>
            </div>
            <div>
              <Link href=''>Settings </Link>
            </div>
            <div>
              <Link href=''>Contact </Link>
            </div>
          </div>


        </div>
  
      </div>
      <div className='bg-bgFooter  h-[120px] flex items-center'>
          <div className='flex items-center container mx-auto px-8 justify-between'>
          <div className='text-white text-md font-medium'>© 2077 Untitled UI. All rights reserved.</div>
          <div className='flex items-center space-x-6'>
            <FaTwitter className='text-4xl text-white '/>
            <FaLinkedinIn className='text-4xl  text-white' />  
            <RiFacebookCircleFill className='text-4xl  text-white' />  
            <FaGithub className='text-4xl text-white ' />  
            <SlSocialDribbble className='text-4xl  text-white' />  
          </div>
          </div>
      </div>
    </footer>

  )
}

export default Footer