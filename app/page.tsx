import Blog from './_components/Blog';
import Email from './_components/Email';
import Hero from './_components/Hero';
import Service from './_components/Service';
import Testimonials from './_components/Testimonials';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service />
      <Testimonials />
      <Blog />
      <Email />
    </div>
  );
}
