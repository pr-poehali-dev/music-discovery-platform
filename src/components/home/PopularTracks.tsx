
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: string;
  plays: number;
}

const PopularTracks = () => {
  const [tracks] = useState<Track[]>([
    {
      id: 1,
      title: "Летний дождь",
      artist: "Алексей Волков",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: "3:45",
      plays: 1230456
    },
    {
      id: 2,
      title: "Городские огни",
      artist: "Марина Лунная",
      cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: "2:58",
      plays: 890123
    },
    {
      id: 3,
      title: "Танцы до утра",
      artist: "DJ Максим",
      cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: "4:32",
      plays: 754321
    },
    {
      id: 4,
      title: "Дорога домой",
      artist: "Сергей Петров",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: "3:21",
      plays: 621903
    },
    {
      id: 5,
      title: "Океан чувств",
      artist: "Анна Морская",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: "3:05",
      plays: 589432
    }
  ]);

  const formatPlays = (plays: number) => {
    if (plays >= 1000000) {
      return `${(plays / 1000000).toFixed(1)} млн`;
    } else if (plays >= 1000) {
      return `${(plays / 1000).toFixed(1)} тыс`;
    }
    return plays.toString();
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Популярные треки</h2>
        <Button variant="link" className="gap-1">
          Показать все
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {tracks.map((track) => (
          <div key={track.id} className="group flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors">
            <div className="flex-shrink-0 relative">
              <img 
                src={track.cover} 
                alt={track.title} 
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                <Icon name="Play" className="h-5 w-5 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium line-clamp-1">{track.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{track.artist}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground hidden sm:block">
                {formatPlays(track.plays)} прослушиваний
              </span>
              <span className="text-sm text-muted-foreground">
                {track.duration}
              </span>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="Heart" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="MoreHorizontal" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="outline" className="rounded-full px-8">
          Показать больше
        </Button>
      </div>
    </div>
  );
};

export default PopularTracks;
