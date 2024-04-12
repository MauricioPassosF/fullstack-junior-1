const titleClass = `font-normal text-[120px] leading-[128px] font-bebas-neue`
const subtitleClass = ` w-[648px] font-normal text-[24px] leading-[40px] font-poppins text-[rgba(46,46,46,1)] opacity-[0.5]`

export default function Title() {
  return (
    <section id="title-section" className="flex flex-col w-[920px] mt-20 gap-[16px]">
      <div id="title">
        <div>
          <h1 className={`${titleClass} text-[rgba(46,46,46,1)]`}>{"LET'S GO!"}</h1>
          <h1 className={`${titleClass}`}>
            {"THE "}
            <span className="text-[rgba(247,122,64,1)]">{"ADVENTURE"}</span>
            {" IS WAITING FOR YOU"}
          </h1>
        </div>
      </div>       
      <p className={`${subtitleClass}`}>Pack your luggage and pick your destination, we will provide you the flight ticket, hotel booking and best guides</p>
    </section>
  )
}