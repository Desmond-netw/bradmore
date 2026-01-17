
import Image from "next/image"
import Button from "./lib/Button";
import Pretitle from "./lib/Pretitle";
import Slider from "./lib/Slider";



const Testimonials = () => {
  return (
    <section className="pt-14 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative"> {/* content wrapper */}
          {/*  ------- Text ------ */}
          <div className="flex-1 max-w-[484px] xl:pt-[54px] xl:mb-0">
            <Pretitle text="Testimonails"/>
            <h2 className=" h2 mb-6">Built On Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commecial , our clients sharer their experineces of working with us, See how we've helped them bring their dreams to live with exper craftmanship.
            </p>
            <Button text="Work with Us" />
          </div>

          {/* -------- Img & Slider ---- */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image src="/assets/img/testimonials/img.jpg"
              fill
              className="object-cover"
              quality={100}
              alt=""
              />
            </div>
            {/* slider */}
            <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max "><Slider/></div>
          </div>
        </div>
      </div>

    </section>

  )
};

export default Testimonials;
