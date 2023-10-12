import React from 'react'

//components
import Layout from '../components/Layout'
import Banner from '../components/Home/Banner'
import DarkSection from '../components/Home/DarkSection'
import Features from '../components/Home/Features'

export default function Home() {
  return (
  <Layout>
    <Banner/>
    <DarkSection/>
    <Features/>
  </Layout>
  )
}
