import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, SkipForward } from 'lucide-react';
import { motion } from 'framer-motion';

const playlist = [
  {
    url: 'https://music.youtube.com/watch?v=sQtnhwU2R9Y',
    title: 'All of Me - John Legend'
  },
  {
    url: 'https://music.youtube.com/watch?v=uOdphGs5uN0&list=RDAMVMsQtnhwU2R9Y',
    title: 'Perfect - Ed Sheeran'
  }
];

export const MusicPlayer = () => {
  // Altera o estado inicial para true para tocar automaticamente
  const [playing, setPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-xl"
    >
      <ReactPlayer
        url={playlist[currentSong].url}
        playing={playing}
        height="0"
        width="0"
        onProgress={(state) => setProgress(state.played * 100)}
      />
      
      <div className="flex items-center gap-4">
        <button
          onClick={() => setPlaying(!playing)}
          className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <div className="flex-1">
          <p className="text-sm text-white/80">{playlist[currentSong].title}</p>
          <div className="w-full bg-white/20 rounded-full h-1 mt-2">
            <div 
              className="bg-pink-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleNextSong}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <SkipForward size={20} />
        </button>
      </div>
    </motion.div>
  );
};
