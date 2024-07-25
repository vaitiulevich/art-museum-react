import Hero from '@components/Hero/Hero';
import SearchBar from '@components/SearchBar/SearchBar';
import SpecialGallery from '@components/SpecialGallery/SpecialGallery';
import React from 'react';

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <SpecialGallery />
    </>
  );
}

export default Home;
