
import Navbar from "@/components/layout/Navbar";
import MusicPlayer from "@/components/music/MusicPlayer";
import HeroSection from "@/components/home/HeroSection";
import NewReleases from "@/components/home/NewReleases";
import PopularTracks from "@/components/home/PopularTracks";
import GenreSection from "@/components/home/GenreSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Навигационная панель */}
      <Navbar />
      
      {/* Основное содержимое */}
      <main className="container mx-auto px-4 pt-24 pb-28">
        {/* Героический баннер */}
        <HeroSection />
        
        {/* Новые релизы */}
        <NewReleases />
        
        {/* Популярные треки */}
        <PopularTracks />
        
        {/* Популярные жанры */}
        <GenreSection />
      </main>
      
      {/* Музыкальный плеер */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
