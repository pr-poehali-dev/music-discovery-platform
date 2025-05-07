
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
}

const NewReleases = () => {
  const [albums] = useState<Album[]>([
    {
      id: 1,
      title: "Летние дни",
      artist: "Мария Светлова",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Городские истории",
      artist: "Сергей Волков",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Электро",
      artist: "DJ Maksim",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Океан",
      artist: "Анна Морская",
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "Звездная пыль",
      artist: "Космик",
      cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 6,
      title: "Ретро",
      artist: "Группа Винтаж",
      cover: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ]);

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Новые релизы</h2>
        <Button variant="link" className="gap-1">
          Показать все
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
      >
        <CarouselContent>
          {albums.map((album) => (
            <CarouselItem key={album.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="group relative overflow-hidden rounded-md">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button 
                  size="icon" 
                  className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90 rounded-full shadow-lg"
                >
                  <Icon name="Play" className="h-4 w-4" />
                </Button>
              </div>
              <div className="pt-3">
                <h3 className="font-medium line-clamp-1">{album.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{album.artist}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default NewReleases;
