import React,{useState,useEffect} from 'react';
import './index.css'
import Navbar from "@/scenes/navbar";
import {SelectedPage} from '@/shared/types.ts'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const links = ['Home', 'Benifts', 'Our Classes', 'Contact Us'];
  const [topofThePage, setTopofThePage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) {
        setTopofThePage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.screenY !== 0) { setTopofThePage(false); }
    
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },)
  

  console.log(topofThePage,'yeepie')
  return (
    <div className="app bg-gray-20">
      <Navbar
         isOnTop={topofThePage}
        menuLinks={links}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
 