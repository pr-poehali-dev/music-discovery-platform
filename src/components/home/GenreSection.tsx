import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Genre {
  id: number;
  name: string;
  color: string;
  icon: string;
  image: string;
}

const genres: Genre[] = [
  {
    id: 1,
    name: "Поп",
    color: "bg-gray-800",
    icon: "Music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Рок",
    color: "bg-gray-900",
    icon: "Headphones",
    image:
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Электронная",
    color: "bg-black",
    icon: "Radio",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    name: "Хип-хоп",
    color: "bg-gray-800",
    icon: "Mic2",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    name: "Инди",
    color: "bg-gray-900",
    icon: "Music2",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    name: "Классика",
    color: "bg-black",
    icon: "Piano",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const GenreSection = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Популярные жанры</h2>
        <Button variant="link" className="gap-1">
          Показать все
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={genre.image}
              alt={genre.name}
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className={`absolute inset-0 opacity-75 ${genre.color}`}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <Icon name={genre.icon as any} className="h-8 w-8 mb-2" />
              <h3 className="font-bold text-center">{genre.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
