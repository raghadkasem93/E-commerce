import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Navbar2 from './Navbar2';


const MainLayout = () => {
  const [search, setSearch] = useState('');

  return (
 <div className="min-h-screen flex flex-col">
      <Navbar />
      <Navbar2 search={search} setSearch={setSearch} />

      <main className="flex-grow">
      <Outlet context={{ search }} />
</main>    
      <Footer />
    
</div>
  );
};

export default MainLayout;
