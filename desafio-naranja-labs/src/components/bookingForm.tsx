import Image from 'next/image';
import planeImg from '../../public/plane.svg';
import hotelImg from '../../public/hotel.svg';
import carImg from '../../public/car.svg';
import locationImg from '../../public/location.svg';
import calendarImg from '../../public/calendar.svg';

const buttonClass = 'w-[160px] h-16 bg-[rgba(247,122,64,1)] text-[rgba(255,255,255,1)] size-[18px] font-medium leading-[27px] font-poppins p-2 rounded-[16px]';
const tabButtonSpanClass = 'w-15 font-poppins leading-[27px] text-[18px] font-medium';
const formDivClass = 'flex flex-col gap-2';
const formLabelClass = "w-fit font-poppins text-[rgba(171,171,171,1)] leading-[27px] text-[18px] font-normal"
const formSelectClass = 'font-poppins text-[rgba(46,46,46,1)] leading-[27px] text-[18px] font-bold w-[176px] bg-[rgba(255,255,255,1)]'

export default function BookingForm() {
  return (
    <section id="booking-form" className=" w-[fit-content] flex flex-col mt-[28px] bg-transparent ml-40">
      <div className="flex flex-row h-[80px] w-fit rounded-booking-content items-center shadow-booking">
        <button type="button" className="flex flex-row gap-4 rounded-booking-content p-6 bg-[rgba(255,255,255,1)]">
          <Image src={planeImg} className='w-8 h-auto' alt="Flight" />
          <span className={`${tabButtonSpanClass} text-[rgba(247,122,64,1)] `}>Flight</span>
        </button>
        <button type="button" className="flex flex-row gap-4 p-6 bg-[rgba(171,171,171,0.15)]">
          <Image src={hotelImg} className='w-8 h-auto' alt="Hotel" />
          <span className={`${tabButtonSpanClass} text-[rgba(46,46,46,1)] opacity-50`}>Hotel</span>
        </button>
        <button type="button" className="flex flex-row gap-4 p-6 bg-[rgba(171,171,171,0.15)]">
          <Image src={carImg} className='w-8 h-auto' alt="Rent" />
          <span className={`${tabButtonSpanClass} text-[rgba(46,46,46,1)] opacity-50`}>Rent</span>
        </button>
      </div>
      <div className="flex flex-row h-fit px-16 py-8 rounded-booking-div bg-[rgba(255,255,255,1)] gap-10 items-center shadow-booking">
        <form id='form' className="flex flex-row items-center">
          <div className={formDivClass} >
            <label className={formLabelClass}>Destination</label>
            <div className="flex flex-row items-center gap-2 rounded-2xl">
              <Image src={locationImg} className={'w-6 h-auto'} alt="Location" />
              <select className={formSelectClass} >
                <option>Paris, France</option>
              </select>
            </div>
          </div>
          <div className="bg-[rgba(171,171,171,1)] border h-12 mx-12" ></div>
          <div className={formDivClass} >
            <label className={formLabelClass}>Date</label>
            <div className="flex flex-row items-center gap-2 rounded-2xl">
              <Image src={calendarImg} className={'w-6 h-auto'} alt="Calendar" />
              <select className={formSelectClass} >
                <option>17 July 2023</option>
              </select>
            </div>
          </div>
        </form>
        <button className={buttonClass}>Search</button>
      </div>
    </section>
  )
}