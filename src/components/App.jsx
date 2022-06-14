import React, { useEffect, useState } from 'react'
import Navigation from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';

const App = () => {
  const [resumeData, setResumeData] = useState({})

  const getResumeData = () => {
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        setResumeData(data);
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  useEffect(() => {
    getResumeData()
  }, [])

    return (
      <div>
        <Navigation />
        <Header data={resumeData.Header}/>
        <Features data={resumeData.Features}/>
        <About  data={resumeData.About}/>
        <Services  data={resumeData.Services}/>
        <Gallery />
        <Testimonials  data={resumeData.Testimonials}/>
        <Team  data={resumeData.Team}/>
        <Contact  data={resumeData.Contact}/>
      </div>
    )
}

export default App
