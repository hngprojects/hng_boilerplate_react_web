import Image from "next/image";

import { blogHero } from "../../../../public/images/blogPage/utils";
import CustomButton from "~/components/common/button/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[80vh] text-white">
      <div className="absolute inset-0 z-20 bg-black/20"></div>
      <Image
        src={blogHero}
        fill
        className="absolute inset-0 object-center"
        alt="Hero Background"
      />
      <div className="relative z-30 flex h-full flex-col items-start justify-end px-[5%] pb-16 text-center md:text-left">
        <div className="w-full py-5 md:w-[60%]">
          <h1 className="mb-4 text-left text-3xl font-bold leading-[2.3rem] md:leading-[4.6rem] 2xl:text-6xl">
            Unlock Industry Insights: Get Essential Tips & Boilerplate Hacks
          </h1>
        </div>
        <CustomButton
          variant="primary"
          size="lg"
          ariaLabel="Read More"
          href="#"
        >
          Read More
        </CustomButton>
      </div>
    </div>
  );
};

export default HeroSection;