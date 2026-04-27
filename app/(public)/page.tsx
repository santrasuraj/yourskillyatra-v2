import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutHome from '@/components/AboutHome';
import Courses from '@/components/Courses';
import Stats from '@/components/Stats';
import WhoIsItFor from '@/components/WhoIsItFor';
import FAQ from '@/components/FAQ';

import { getContent } from '@/lib/getContent';

export default function Home() {
  const content = getContent();

  return (
    <>
      <Hero data={content?.hero} />
      <Features data={content?.features} />
      <AboutHome data={content?.aboutHome} />
      <Courses data={content?.courses} />
      <Stats data={content?.testimonials} mentors={content?.mentors} />
      <WhoIsItFor data={content?.audiences} />
      <FAQ data={content?.faqs} />
    </>
  );
}
