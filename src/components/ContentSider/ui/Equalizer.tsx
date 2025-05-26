// Equalizer组件修改
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface EqualizerProps {
  gains: number[];
  onGainChange: (index: number, value: number) => void;
}

export default function Equalizer({ gains, onGainChange }: EqualizerProps) {
  return (
    <div className="space-y-3 mx-3 my-2">
      <Label className="leading-6 dark:text-[#e6eaf0] text-[#333436]">均衡器</Label>
      <div className="flex h-48 justify-center gap-8 my-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <Slider
              value={[gains[index]]}
              onValueChange={(v) => onGainChange(index, v[0])}
              min={-12}
              max={12}
              orientation="vertical"
              className="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
              aria-label={["60 Hz", "250 Hz", "1k", "4k", "16k"][index]}
            />
            <Label className="text-muted-foreground flex w-0 justify-center text-xs">
              {["60", "250", "1k", "4k", "16k"][index]}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
