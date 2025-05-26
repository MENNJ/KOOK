import MenuItem from "@/components/ContentSider/HeaderMenu";
import FileTree from "@/components/ContentSider/textGrouping";
import { VoiceInput } from "@/components/ContentSider/voice-input";
import VoiceGrouping from "@/components/ContentSider/voiceGrouping";

const ContentLeft = () => {
  return (
    <div className="flex-col w-full sm:w-[280px] flex border-[#00000014] border-r-1">
      <div className="flex-1">
        <MenuItem title="CSGO" />
        <FileTree />
        <VoiceGrouping />
      </div>
      <VoiceInput visualizerBars={48} />
    </div>
  );
};
export default ContentLeft;
