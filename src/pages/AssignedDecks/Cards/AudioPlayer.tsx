import { MdOutlineReplay } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { PiPauseLight } from "react-icons/pi";
import ReactPlayer from "react-player";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  IoPlayBackOutline,
  IoPlayForwardOutline,
  IoPlayOutline
} from "react-icons/io5";

export function AudioPlayer({ isPlaying, setIsPlaying }: any) {
  return (
    <Popover>
      <PopoverTrigger>
        <span>
          <HiOutlineSpeakerWave />
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-fit px-4 py-2 my-1" align="center">
        <div className="element-center text-2xl text-gray-800">
          <div className="flex gap-3">
            <span className="cursor-pointer">
              <MdOutlineReplay />
            </span>
            <span className="cursor-pointer">
              <IoPlayBackOutline />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <PiPauseLight /> : <IoPlayOutline />}
            </span>
            <span className="cursor-pointer">
              <IoPlayForwardOutline />
            </span>
          </div>
          <ReactPlayer
            url="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
            playing={isPlaying}
            controls={false}
            config={{
              file: {
                forceAudio: true,
              },
            }}
            width="0"
            height="0" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
