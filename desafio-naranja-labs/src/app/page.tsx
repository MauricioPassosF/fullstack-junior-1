import BookingForm from "@/components/bookingForm";
import NavBar from "@/components/navbar";
import Title from "@/components/title";
import Image from "next/image";
import passportImg from "../../public/passport.svg";
import distanceImg from "../../public/distance.svg";
import signImg from "../../public/sign.svg";
import keyImg from "../../public/key.svg";
import planeDeco from "../../public/planeDeco.svg";
import lineDeco from "../../public/lineDeco.svg";
import girlDeco from "../../public/girlDeco.svg";
import worldDeco from "../../public/worldDeco.svg";
import ellipseDeco from "../../public/ellipseDeco.svg"
import circlesDeco from "../../public/circlesDeco.svg"
import callIcon from "../../public/callIcon.svg"

const contentDivClass = "flex flex-row items-center bg-[rgba(255,255,255,1)] shadow-booking rounded-lg gap-4 p-4 absolute"
const contentSpanClass = "font-poppins bg-none text-[rgba(46,46,46,1)] text-[24px] font-normal leading-[40px] w-[fit-content] h-[fit-content]"

export default function Home() {
  return (
    <main className="flex flex-col w-[1920px] mx-auto">
      <div className="relative">
        <div className="absolute top-[-187px] left-[629px] w-[1492px] h-[1492px] z-[-2]">
          <Image src={lineDeco} className='w-[715.6px] h-[292.24px] absolute top-[579px] left-[362px] z-[-3]' alt="Plane Decoration" />
          <Image src={planeDeco} className='w-[250px] h-[250px] absolute top-[630px] left-[321px] z-[-4]' alt="Line Decoration" />
          <Image src={girlDeco} className='w-[824px] h-[1234px] absolute top-[110px] left-[385px] z-[-4]' alt="Girl Decoration" />
          <Image src={worldDeco} className='w-[653px] h-[320px] absolute top-[586px] left-[413px] z-[-5]' alt="World Decoration" />
          <Image src={ellipseDeco} className='w-[640px] h-[640px] absolute top-[434px] left-[426px] z-[-6]' alt="Ellipse Decoration" />
          <Image src={circlesDeco} className='w-[1492px] h-[1492px] absolute top-[0px] left-[0px] z-[-6]' alt="Circles Decoration" />
        </div>
        <div className={`${contentDivClass} top-[277px] left-[1512px] z-[-1]`}>
          <Image src={passportImg} className={'w-10 h-auto'} alt="Flight Tickets" />
          <span className={contentSpanClass} >Flight Tickets</span>
        </div>
        <div className={`${contentDivClass} top-[333px] left-[929px] z-[-1]`}>
          <Image src={keyImg} className={'w-10 h-auto'} alt="Hotel Booking" />
          <span className={contentSpanClass} >Hotel Booking</span>
        </div>
        <div className={`${contentDivClass} top-[668px] left-[1610px] z-[-1]`}>
          <Image src={signImg} className={'w-10 h-auto'} alt="Tour Guide" />
          <span className={contentSpanClass} >Tour Guide</span>
        </div>
        <div className={`${contentDivClass} top-[724px] left-[1033px] z-[-1]` }>
          <Image src={distanceImg} className={'w-10 h-auto'} alt="Local Events" />
          <span className={contentSpanClass} >Local Events</span>
        </div>
        <div className={`${contentDivClass} top-[837px] left-[1450px] z-[-1]` }>
          <Image src={callIcon} className={'w-15 h-auto'} alt="Call Icon" />
          <div className="flex flex-col gap-1">
            <span className="font-poppins bg-none text-[rgba(247,122,64,1)] text-[18px] font-normal leading-[27px] w-[fit-content] h-[fit-content]">Customer Service</span>
            <span className="font-poppins bg-none text-[rgba(46,46,46,1)] text-[24px] font-bold leading-[36px] w-[fit-content] h-[fit-content]" >+12 345 6789 0</span>
          </div>
        </div>
      </div>
        <NavBar />
        <Title />
        <BookingForm />
    </main>
  );
}
