
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(33);
  
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-background/80 backdrop-blur-md border-t border-border flex items-center px-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {/* Track info */}
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Обложка" 
            className="h-12 w-12 rounded-md object-cover"
          />
          <div>
            <h4 className="text-sm font-medium line-clamp-1">Летнее настроение</h4>
            <p className="text-xs text-muted-foreground line-clamp-1">Алексей Волков</p>
          </div>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Icon name="Heart" className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
        
        {/* Player controls */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Icon name="Shuffle" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="SkipBack" className="h-5 w-5" />
            </Button>
            <Button 
              onClick={togglePlay} 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full border-primary"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="SkipForward" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Icon name="Repeat" className="h-4 w-4" />
            </Button>
          </div>
          <div className="w-full hidden sm:flex items-center gap-2 mt-1">
            <span className="text-xs text-muted-foreground">1:47</span>
            <Slider
              value={[progress]}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">4:20</span>
          </div>
        </div>
        
        {/* Volume controls */}
        <div className="flex items-center justify-end gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Icon name="ListMusic" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Icon name="Mic2" className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-2 w-28">
            <Icon name="Volume2" className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={[volume]}
              max={100}
              step={1}
              onValueChange={(value) => setVolume(value[0])}
              className="flex-1"
            />
          </div>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Icon name="Maximize2" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
