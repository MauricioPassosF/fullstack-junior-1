import Image from 'next/image'
import planeImg from '../../public/plane.svg'
import hotelImg from '../../public/hotel.svg'
import carImg from '../../public/car.svg'
import locationImg from '../../public/location.svg'
import calendarImg from '../../public/calendar.svg'

const menuItens = ['Destination', 'Package', 'Blog', 'About Us','Contact']
const navClass = 'h-[120px] flex flex-row justify-between items-center'
const spanClass = 'font-oswald text-[36px] leading-[53.35px] font-semibold'
const signUpClass = 'w-[fit-content] h-[fit-content] bg-none text-[rgba(46,46,46,1)] size-[18px] font-normal leading-[27px] font-poppins px-[6px]'
const menuItemClass = 'font-poppins bg-none text-[rgba(46,46,46,1)] text-[18px] font-normal leading-[27px] w-[fit-content] h-[fit-content]'
const buttonClass = 'w-[160px] h-16 bg-[rgba(247,122,64,1)] text-[rgba(255,255,255,1)] size-[18px] font-medium leading-[27px] font-poppins p-2 rounded-[16px]'

export default function BookingForm() {
  return (
    <section id="booking-form" className=" w-[fit-content] flex flex-col mt-[28px] shadow-booking">
      <div className="flex flex-row h-[80px] rounded-booking-content items-center">
        <button type="button" className="flex flex-row gap-4 rounded-booking-content p-6 bg-[rgba(255,255,255,1)]">
          <Image src={planeImg} className={'w-8 h-auto'} alt="Flight" />
          <span className="w-15 font-poppins text-[rgba(247,122,64,1)] leading-[27px] text-[18px] font-medium">Flight</span>
        </button>
        <button type="button" className="flex flex-row gap-4 p-6 bg-[rgba(171,171,171,0.15)]">
          <Image src={hotelImg} className={'w-8 h-auto'} alt="Hotel" />
          <span className="w-15 font-poppins text-[rgba(46,46,46,1)] leading-[27px] text-[18px] font-medium opacity-50">Hotel</span>
        </button>
        <button type="button" className="flex flex-row gap-4 p-6 bg-[rgba(171,171,171,0.15)]">
          <Image src={carImg} className={'w-8 h-auto'} alt="Rent" />
          <span className="w-15 font-poppins text-[rgba(46,46,46,1)] leading-[27px] text-[18px] font-medium opacity-50">Rent</span>
        </button>
      </div>
      <div className="flex flex-row h-[80px] px-16 py-8 rounded-booking-div bg-[rgba(255,255,255,1)] gap-10 items-center">
        <form id='form' className="flex flex-row border border-[rgba(171,171,171,1)]] items-center">
          <div className="flex flex-col gap-2" >
            <label className="w-fit font-poppins text-[rgba(171,171,171,1)] leading-[27px] text-[18px] font-normal">Destination</label>
            <div className="flex flex-row items-center gap-2 rounded-2xl">
              <Image src={locationImg} className={'w-6 h-auto'} alt="Location" />
              <select className=' font-poppins text-[rgba(46,46,46,1)] leading-[27px] text-[18px] font-bold w-[176px] bg-[rgba(255,255,255,1)]'>
                <option>Paris, France</option>
              </select>
            </div>
          </div>
          <div className="bg-[rgba(171,171,171,1)] border h-12 mx-12" ></div>
          <div className="flex flex-col gap-2" >
            <label className="w-fit font-poppins text-[rgba(171,171,171,1)] leading-[27px] text-[18px] font-normal">Date</label>
            <div className="flex flex-row items-center gap-2 rounded-2xl">
              <Image src={calendarImg} className={'w-6 h-auto'} alt="Calendar" />
              <select className=' font-poppins text-[rgba(46,46,46,1)] leading-[27px] text-[18px] font-bold w-[176px] bg-[rgba(255,255,255,1)]'>
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