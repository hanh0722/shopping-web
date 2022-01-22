import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'
import logo from '../../assets/images/logo.png'
const Navigation = () => {
  return (
  <>
      <header className={`w-full  header bg-blue h-[var(--header-height)]`}>
        <nav className= {`container m-auto`} >
          <div className="middle__wraper px-4 h-15 flex items-center">
              <div className="middle__Left w-950 flex items-center justify-between">
                <div className="logo_menu w-19 h-10">
                  <Link to="/" className="header__logo ">
                    <img className='h-full' src = {logo}  />
                  </Link>
                </div>
              
                <form className='form__search h-[40px] w-[730px] items-center' action="">
                    <input type= "text" className='h-full w-[600px] px-3 outline-none' placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...' />
                    <button type='submit' className='bg-blue-dark h-full text-white text-13 m-atuo w-[120px] items-center'> 
                      Tìm kiếm
                    </button>
                </form>
              </div>
          </div>
          <div className="nav__bottom">

          </div>
        </nav>
      </header>
      
  </>)
};

export default Navigation;
