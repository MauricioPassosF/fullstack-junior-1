const menuItens = ['Destination', 'Package', 'Blog', 'About Us','Contact']
const navClass = 'h-[120px] flex flex-row justify-between items-center'
const spanClass = 'font-oswald text-[36px] leading-[53.35px] font-semibold'
const menuItemClass = 'font-poppins bg-none text-[rgba(46,46,46,1)] size-[18px] font-normal leading-[27px] w-[fit-content] h-[fit-content]'
const signInClass = 'w-[fit-content] h-12 bg-[rgba(247,122,64,1)] text-[rgba(255,255,255,1)] size-[18px] font-normal leading-[27px] font-poppins px-[30px] py[11.5px] rounded-lg'
const signUpClass = 'w-[fit-content] h-[fit-content] bg-none text-[rgba(46,46,46,1)] size-[18px] font-normal leading-[27px] font-poppins px-[6px]'

export default function NavBar() {
  return (
    <nav className={navClass}>
      <div id="logo">
        <span className={`${spanClass} text-[rgba(46,46,46,1)]`}>Soul</span>
        <span className={`${spanClass} text-[rgba(247,122,64,1)]`}>Travel</span>
        <span className={`${spanClass} text-[rgba(46,46,46,1)]`}>.</span>
      </div>
      <div id="menu" className='flex flex-row gap-[48px]'>
         {menuItens.map((item) => (
          <button className={menuItemClass} type='button' key={item}>{item}</button>
         ))}
      </div>
      <div id="buttons" className='flex flex-row gap-[32px] items-center'>
        <button type="button" className={signUpClass}>Sign Up</button>
        <button type="button" className={signInClass} >Sign In</button>
      </div>  
    </nav>
  )
}