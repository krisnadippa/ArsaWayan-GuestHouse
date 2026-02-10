import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import RoomList from "@/components/RoomList";
import Activities from "@/components/Activities";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Reveal>
        <Profile />
      </Reveal>
      <Reveal>
        <RoomList />
      </Reveal>
      <Reveal>
        <Activities />
      </Reveal>
      <Reveal>
        <Location />
      </Reveal>
      <Reveal>
        <Reviews />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}
