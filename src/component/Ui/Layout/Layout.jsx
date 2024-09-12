import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from '../Top-header/TopHeader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function Layout() {
  return (
    <div>
      <header className=' w-full'>
        <TopHeader/>
        <Header/>
      </header>
      <main className=''>
        <div className=''>
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}