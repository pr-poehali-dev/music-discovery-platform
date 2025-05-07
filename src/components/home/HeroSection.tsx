
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[40vh] md:min-h-[60vh] overflow-hidden rounded-xl">
      <img 
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
        alt="Музыкальный плейлист" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/20"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
        <span className="text-sm font-medium text-primary-foreground/80 mb-2">Подборка недели</span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Летние хиты 2025</h1>
        <p className="text-primary-foreground/90 max-w-lg mb-6">
          Лучшие треки для твоего летнего настроения. Слушай новую музыку и открывай для себя талантливых исполнителей.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="rounded-full">
            <Icon name="Play" className="mr-2 h-4 w-4" />
            Слушать сейчас
          </Button>
          <Button variant="outline" className="bg-background/20 hover:bg-background/30 rounded-full">
            Добавить в плейлист
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
