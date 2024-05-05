'use client'
import React from 'react'
import Header from '../components/Header'
import ItemsSearch from '../components/ItemsSearch'
import Footer from '../components/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'

const page = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
     <Header/>
     <ItemsSearch/>
     <Footer/>
    </QueryClientProvider>
  )
}

export default page
