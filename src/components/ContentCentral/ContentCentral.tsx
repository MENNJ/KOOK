import ContentBody from "@/components/ContentCentral/ContentBody";
import ContentBottom from "@/components/ContentCentral/ContentBottom";
import ContentHeader from "@/components/ContentCentral/ContentHeader";
import ContentRight from "@/components/ContentCentral/ContentRight";
import ContentUserList from "@/components/ContentCentral/ContentUserList";

const ContentCentral = () => {
  return (
    <div className="origin-[0] flex-[842px] sm:flex hidden">
      <div className="border-[rgba(0,0,0,0.08)] border-r-1 flex flex-col flex-1">
        <ContentHeader />
        <div className="flex-1 flex relative overflow-hidden flex-col w-full h-full bottom-0">
          <ContentBody />
          <ContentBottom />
        </div>
      </div>
      <ContentUserList className="xl:flex hidden" />
      <ContentRight className="2xl:flex hidden" />
    </div>
  );
};
export default ContentCentral;
