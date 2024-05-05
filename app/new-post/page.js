import React from 'react'
import Header from '../components/Header';
import FormCreatePost from '../components/FormCreatePost';
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <FormCreatePost />
      <Footer/>
    </div>
  )
}

export default page
