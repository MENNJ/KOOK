import { RightOutlined, HomeOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";

const SiderAvatar = () => {
  return (
    <div>
      <div className="bg-[#00000014] w-10 h-[1px] ml-5 mb-2" />
      <div className="flex items-center justify-center p-4">
        <Dropdown
          popupRender={() => (
            <div className="rounded-2xl w-[332px] ">
              <div className="h-[74px] bg-[url('https://static.kookapp.cn/app/static/media/userinfocard_banner.104027e2.png')] bg-center bg-cover rounded-tl-2xl rounded-tr-2xl" />

              <div className="bg-[#fefefe] shadow-sm rounded-2xl -mt-[15px] px-4 pb-3 relative">
                <div className="h-16 relative">
                  <div className="border-4 border-[#fefefe] bg-position-[50%] bg-cover rounded-[50%] w-[72px] h-[72px] absolute -top-5 left-1">
                    <Avatar
                      size={64}
                      src="https://img.kookapp.cn/avatars/2025-05/12/4lniDzVhiU04m04m.png?x-oss-process=style/icon"
                      className="object-cover rounded-[50%] w-full h-full block "
                    />
                  </div>
                </div>

                <div className="mb-5 ml-2 text-xl font-semibold leading-[26px]">
                  <div className="text-[#2e303a] flex items-center">
                    <div className="flex items-center">
                      <span className="whitespace-nowrap text-ellipsis max-w-[126px] inline-block overflow-hidden">
                        Kris_Wu
                      </span>
                      <span>#8763</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 h-[1px] mx-2 mb-2" />

                <div className="cursor-pointer flex items-center justify-between ml-0.5 pt-[9px] pb-[17px] pl-2 text-sm font-normal relative">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-green-400 rounded-md w-3 h-3" />
                    <div>在线</div>
                  </div>
                  <RightOutlined />
                </div>
                <div className="bg-gray-100 h-[1px] mx-2 mb-2" />

                <div className="w-full flex flex-col gap-0.5">
                  <div className="rounded-lg flex justify-between items-center h-9 px-2 text-sm font-normal leading-[38px]">
                    <span className="relative flex items-center gap-2">
                      <HomeOutlined />
                      <span className="text-[#2e303a]">昵称</span>
                    </span>
                  </div>

                  <div className="rounded-lg flex justify-between items-center h-9 px-2 text-sm font-normal leading-[38px]">
                    <span className="relative flex items-center gap-2">
                      <HomeOutlined />
                      <span className="text-[#2e303a]">昵称</span>
                    </span>
                  </div>

                  <div className="rounded-lg flex justify-between items-center h-9 px-2 text-sm font-normal leading-[38px]">
                    <span className="relative flex items-center gap-2">
                      <HomeOutlined />
                      <span className="text-[#2e303a]">昵称</span>
                    </span>
                  </div>

                  <div className="rounded-lg flex justify-between items-center h-9 px-2 text-sm font-normal leading-[38px]">
                    <span className="relative flex items-center gap-2">
                      <HomeOutlined />
                      <span className="text-[#2e303a]">昵称</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          placement="topRight"
          arrow
          trigger={["click"]}
        >
          <Avatar
            size={48}
            src="https://img.kookapp.cn/avatars/2025-05/12/4lniDzVhiU04m04m.png?x-oss-process=style/icon"
            className="cursor-pointer hover:opacity-80"
          />
        </Dropdown>
      </div>
    </div>
  );
};
export default SiderAvatar;
