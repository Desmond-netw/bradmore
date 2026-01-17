import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full  max-w-[630px] h-[200px]">
      {/* --- SLIDER 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/assets/img/testimonials/avatar.png"
              fill
              alt="Client avatar"
              className="object-cover"
              quality={100}
            />
          </div>

          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p className="text-sm opacity-80 font-primary">
              Excellent service and professional delivery.
            </p>
            <h5 className="font-semibold">John Doe</h5>
          </div>
        </div>
      </SwiperSlide>
      {/* SLIDER 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/assets/img/testimonials/avatar1.png"
              fill
              alt="Client avatar"
              className="object-cover"
              quality={100}
            />
          </div>

          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p className="text-sm opacity-80 font-primary">
              Excellent service and professional delivery.
            </p>
            <h5 className="font-semibold">John Doe</h5>
          </div>
        </div>
      </SwiperSlide>
      {/* SLIDER 3 */}
       <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/assets/img/testimonials/avatar2.jpg"
              fill
              alt="Client avatar"
              className="object-cover"
              quality={100}
            />
          </div>

          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p className="text-sm opacity-80 font-primary">
              Excellent service and professional delivery.
            </p>
            <h5 className="font-semibold">John Doe</h5>
          </div>
        </div>
      </SwiperSlide>

    {/* slider btns */}
     
    </Swiper>
  );
};

export default Slider;
