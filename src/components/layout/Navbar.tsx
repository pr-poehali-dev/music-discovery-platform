
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center px-4 md:px-6">
      <div className="flex-1 flex items-center gap-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary text-xl">
          <Icon name="Music" className="h-6 w-6" />
          <span className="hidden md:inline-block">MusicFlow</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/popular" className="text-sm font-medium hover:text-primary transition-colors">
            Популярное
          </Link>
          <Link to="/genres" className="text-sm font-medium hover:text-primary transition-colors">
            Жанры
          </Link>
          <Link to="/library" className="text-sm font-medium hover:text-primary transition-colors">
            Библиотека
          </Link>
        </div>
        
        <div className="relative hidden md:flex flex-1 max-w-md">
          <Input
            placeholder="Поиск треков, исполнителей, альбомов..."
            className="pl-10"
          />
          <Icon 
            name="Search" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" 
          />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <Link to="/search" className="md:hidden">
            <Icon name="Search" className="h-5 w-5" />
          </Link>
          <Button variant="ghost" size="icon">
            <Icon name="Bell" className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/150?img=68" alt="Аватар" />
              <AvatarFallback>МП</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
