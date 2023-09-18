import React from 'react'

//components
import Layout from '../components/Layout'
import Banner from '../components/Home/Banner'
import DarkSection from '../components/Home/DarkSection'

export default function Home() {
  return (
  <Layout>
    <Banner/>
    <DarkSection/>
  </Layout>
  )
}
