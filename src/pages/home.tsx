export default function Home() {
  return (
    <div class="flex font-serif h-full text-white justify-center items-center">
      <div class=" text-sm tracking-[5px]  z-10 md:text-md md:tracking-[6px]">
        <h2 class="text-left">Justine</h2>
        <h1 class="text-center text-lg tracking-[10px] md:text-2xl md:tracking-[24px]">
          Kizhakkinedath
        </h1>
        <h2 class=" text-right ">Web Artist</h2>
      </div>
      <video
        id="bg-video"
        autoplay
        muted
        preload=""
        loop
        src="https://res.cloudinary.com/justinekizhak/video/upload/v1612441077/bg_a37rnc.mp4"
        poster="https://res.cloudinary.com/justinekizhak/video/upload/v1612441077/bg_a37rnc.jpg"
        class="h-screen object-cover w-screen inset-0 z-0 fixed"
      ></video>
    </div>
  )
}
