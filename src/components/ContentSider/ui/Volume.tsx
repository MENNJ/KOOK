import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
interface VolumeProps {
  volume: number[];
  setVolume: (value: number[]) => void;
}

export default function Volume({ volume, setVolume }: VolumeProps) {
  return (
    <div className="space-y-3 mx-3 mb-2">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6  dark:text-[#e6eaf0] text-[#333436]">音量</Label>
        <output className="text-sm font-medium tabular-nums">
          {volume[0]}
        </output>
      </div>
      <div className="flex items-center gap-2">
        <VolumeXIcon
          className="shrink-0 opacity-60"
          size={16}
          aria-hidden="true"
        />
        <Slider
          value={volume}
          onValueChange={setVolume}
          aria-label="Volume slider"
        />
        <Volume2Icon
          className="shrink-0 opacity-60"
          size={16}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
