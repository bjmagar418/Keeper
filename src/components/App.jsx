
import '../index.css';
import Header from './Header';
import Note from "../components/Note.jsx"
import Footer from './footer'
function App() {

  return (
    <div className='flex flex-col '>
    <Header/>
    <Note/>
    <Footer/>
    </div>
  )
}

export default App
