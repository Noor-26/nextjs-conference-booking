import { FaHome } from 'react-icons/fa';
const Navber = () => {
  return (
    <div className="navbar  max-w-7xl px-10  mx-auto">
       <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a className="Abeezee">Home</a></li> 
      <li><a className='font-semibold Abeezee'>Conference</a></li>
      <li><a className="Abeezee">Developments</a></li>
      <li><a className="Abeezee">Blog</a></li>
      <li tabIndex={0}>
        <a className="Abeezee">
          EN
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a className="Abeezee">BN</a></li>
        </ul>
      </li>
  
      </ul>
    </div>
  <div className="flex flex-nowrap">
    <a className="btn btn-ghost nav_head_font  items-center normal-case text-xl"><FaHome className='mx-2 text-[#F25A2C] relative bottom-[2px] text-[25px]'/>Saarte Investeering</a>
  </div>
  </div>
  <div className=" navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1"> 
      <li><a className="Abeezee">Home</a></li>
      <li><a className='font-semibold Abeezee'>Conference</a></li>
      <li><a className="Abeezee">Developments</a></li>
      <li><a className="Abeezee">Blog</a></li>
      <li tabIndex={0}>
        <a className="Abeezee">
          EN
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a className="Abeezee">BN</a></li>
        </ul>
      </li>
  
    </ul>
  </div>
</div>
  )
}

export default Navber
