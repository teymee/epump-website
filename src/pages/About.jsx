import React from 'react'

//components
import Layout from '../components/Layout'
import AboutBanner from '../components/About/Banner'
import AboutNote from '../components/About/AboutNote'
import Vision from '../components/About/Vision'
import Team from '../components/About/Team'

export default function About() {
  return (
   <Layout>
    <AboutBanner/>
    <AboutNote/>
    <Vision/>
    <Team/>
   </Layout>
  )
}
