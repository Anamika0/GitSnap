import ChatCamera from "@/components/chat/chat-camera";
import Image from "next/image";

export default function ChatRootPage() {
  return (
    <main className="flex-grow w-5/12 bg-sigMain items-center flex px-2">
      <div
        className="bg-chat bg-no-repeat bg-cover
				rounded-3xl w-full h-[96%] flex items-center justify-center px-6"
      >
        <ChatCamera />
        {/* <div className="hidden lg:block">
          <Image
            src={"/snapemoji.png"}
            width={500}
            height={600}
            alt="Snap avatar"
          />
        </div> */}
      </div>
    </main>
  );
}
