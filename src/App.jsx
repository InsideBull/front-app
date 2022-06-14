import React, { useEffect, useState } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  
  const getlandingPageData = () => {
    setLandingPageData(JsonData)
  }

  useEffect(() => {
    getlandingPageData()
  }, [])

    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
    )
}

export default App;
