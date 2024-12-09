import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import ScrollTop from './components/6-scrollTop/ScrollTop'

const App = () => {
  return (
    <div id='up' className='container'>
      <Header />
      <Hero/>
      <div id='projects' className="divider" />
      <Main />
      <div id='contact' className="divider" />
      <Contact />
      <div className="divider" />
      <Footer /> 
      <ScrollTop />
    </div>
  )
}

export default App