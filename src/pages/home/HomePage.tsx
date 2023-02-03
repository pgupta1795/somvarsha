import { lazy } from 'react';
import Divider from '../../components/Divider';

const SectionAbout = lazy(() => import('./components/sections/About'));
const SectionFunds = lazy(() => import('./components/sections/Funds'));
const SectionHero = lazy(() => import('./components/sections/Hero'));
const SectionServices = lazy(() => import('./components/sections/Services'));
const SectionContactUs = lazy(() => import('./components/sections/ContactUs'));

const HomePage = () => (
  <main className="max-w-4xl mx-auto mt-10 sm:mt-24">
    <SectionHero />
    <Divider />
    <SectionFunds />
    <Divider />
    <SectionServices />
    <Divider />
    <SectionAbout />
    <Divider />
    <SectionContactUs />
  </main>
);
export default HomePage;
