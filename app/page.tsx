import Blog from './_components/Blog';
import Connect from './_components/Connect';
import Email from './_components/Email';
import Hero from './_components/Hero';
import Service from './_components/Service';
import Testimonials from './_components/Testimonials';
import React from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Testimonials />
      <Connect/>
      <Blog />
      <Email />
    </>
  );
}
