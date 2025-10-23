import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BourbonHub from '@/components/BourbonHub';
import Timeline from '@/components/Timeline';
import WhereToBuy from '@/components/WhereToBuy';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <BourbonHub />
      <Timeline />
      <WhereToBuy />
    </div>
  );
}
