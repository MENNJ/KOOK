"use client";

import { AudioOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Tooltip } from "antd";
import Equalizer from "@/components/ContentSider/ui/Equalizer";
import Volume from "@/components/ContentSider/ui/Volume";

interface VoiceInputProps {
  visualizerBars?: number; // 可视化条数量，默认48
}

export function VoiceInput({ visualizerBars = 48 }: VoiceInputProps) {
  const [isRecording, setIsRecording] = useState(false); // 是否正在录音
  const [isSlideOutOpen, setIsSlideOutOpen] = useState(false); // 控制滑出div的显示
  const [barHeights, setBarHeights] = useState<number[]>(
    Array(visualizerBars).fill(0) // 可视化条高度数组
  );
  const [eqGains, setEqGains] = useState<number[]>([2, 1, -1, -3, 2]);
  const [volume, setVolume] = useState([25]);
  const streamRef = useRef<MediaStream | null>(null); // 媒体流引用
  const audioContextRef = useRef<AudioContext | null>(null); // 音频上下文引用
  const analyserRef = useRef<AnalyserNode | null>(null); // 分析器节点引用
  const animationFrameRef = useRef<number | null>(null); // 动画帧引用
  const audioElementRef = useRef<HTMLAudioElement | null>(null); // 音频元素引用
  const filtersRef = useRef<BiquadFilterNode[]>([]);

  // 处理音频流的获取、可视化和实时回放
  const handleGainChange = (index: number, value: number) => {
    const newGains = [...eqGains];
    newGains[index] = value;
    setEqGains(newGains);
  };

  // 更新滤波器增益
  useEffect(() => {
    if (filtersRef.current.length === eqGains.length) {
      filtersRef.current.forEach((filter, index) => {
        filter.gain.value = eqGains[index];
      });
    }
  }, [eqGains]);

  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (!isRecording) {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current.srcObject = null;
      }
      return;
    }

    const startAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: false,
            noiseSuppression: false,
            autoGainControl: false,
          },
        });
        streamRef.current = stream;

        const audioContext = new AudioContext({ sampleRate: 44100 });
        audioContextRef.current = audioContext;

        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyserRef.current = analyser;

        analyser.fftSize = 512;
        analyser.smoothingTimeConstant = 0.6;
        analyser.minDecibels = -100;
        analyser.maxDecibels = -10;

        // 创建均衡器滤波器
        const eqFrequencies = [60, 250, 1000, 4000, 16000];
        const filters = eqFrequencies.map((freq, index) => {
          const filter = audioContext.createBiquadFilter();
          filter.type = "peaking";
          filter.frequency.value = freq;
          filter.Q.value = 1.0; // Q值为√2，标准均衡器设置
          filter.gain.value = eqGains[index];
          return filter;
        });
        filtersRef.current = filters;

        // 连接音频节点
        source.connect(filters[0]);
        for (let i = 0; i < filters.length - 1; i++) {
          filters[i].connect(filters[i + 1]);
        }
        filters[filters.length - 1].connect(analyser);

        // 创建音频输出流
        const destinationNode = audioContext.createMediaStreamDestination();
        filters[filters.length - 1].connect(destinationNode);

        // 播放处理后的音频
        const audioElement = new Audio();
        audioElement.volume = volume[0] / 100;
        audioElement.srcObject = destinationNode.stream;
        audioElement.play().catch(console.error);
        audioElementRef.current = audioElement;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateVisualizer = () => {
          if (!isRecording || !analyserRef.current) return;

          analyserRef.current.getByteFrequencyData(dataArray);
          const heights = Array.from(dataArray)
            .slice(0, visualizerBars)
            .map((val) => Math.min((val / 255) ** 1.2 * 200, 100));

          setBarHeights(heights);
          animationFrameRef.current = requestAnimationFrame(updateVisualizer);
        };

        updateVisualizer();
      } catch (err) {
        console.error("Error accessing microphone:", err);
      }
    };
    startAudio();

    return () => {
      if (streamRef.current)
        streamRef.current.getTracks().forEach((track) => track.stop());
      if (audioContextRef.current) audioContextRef.current.close();
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current.srcObject = null;
      }
      filtersRef.current = [];
    };
  }, [isRecording, visualizerBars]);

  const handleClick = useCallback(() => {
    setIsRecording((prev) => !prev);
  }, []);

  const handleSlideOutClick = useCallback(() => {
    setIsSlideOutOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div
        className="border-x-[1px] border-t-[1px] dark:bg-white/20 bg-white/50 border-[#00000014] hover:bg-black/10 w-8 h-3.5 flex rounded-t-lg items-center justify-center mx-auto cursor-pointer"
        onClick={handleSlideOutClick}
      >
        {isSlideOutOpen ? <DownOutlined /> : <UpOutlined />}
      </div>
      <div className="border-[1px] border-[#00000014] px-2 py-1 mb-2 mx-2 bg-[#fefefe] dark:bg-[#35373d] rounded-3xl">
        <div
          className={cn(
            "overflow-hidden transition-all duration-500",
            isSlideOutOpen ? " opacity-100 max-h-96" : "max-h-0 opacity-0"
          )}
        >
          <Equalizer gains={eqGains} onGainChange={handleGainChange} />
          <Volume volume={volume} setVolume={setVolume} />
        </div>
        <div className="relative max-w-xl w-full mx-auto flex items-center flex-row m-1">
          <Tooltip title="试音">
            <button
              className={cn(
                "group w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer dark:text-[#e6eaf0] text-[#333436]",
                isRecording
                  ? "bg-none"
                  : "bg-none hover:bg-black/10 dark:hover:bg-white/10"
              )}
              type="button"
              onClick={handleClick}
            >
              {isRecording ? (
                // 录音中显示旋转指示器
                <div
                  className="w-6 h-6 rounded-sm animate-spin  dark:bg-[#dbdde1] bg-[#333436] cursor-pointer pointer-events-auto"
                  style={{ animationDuration: "2s" }}
                />
              ) : (
                // 非录音状态显示麦克风图标
                <AudioOutlined width={24} height={24} />
              )}
            </button>
          </Tooltip>

          {/* 音频可视化条容器 */}
          <div className="h-8 w-full flex items-center justify-between gap-0.5 p-2">
            {barHeights.map((height, i) => (
              <div
                key={i}
                className={cn(
                  "w-0.5 rounded-full transition-all duration-100",
                  isRecording
                    ? "bg-black/60 dark:bg-white/60" // 录音中颜色
                    : "bg-black/10 dark:bg-white/10 h-1" // 非录音状态颜色和高度
                )}
                style={isRecording ? { height: `${height}%` } : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
