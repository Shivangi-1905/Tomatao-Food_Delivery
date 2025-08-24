import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets.js'


const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'> 
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>Discover a menu designed to awaken your senses—where comforting classics meet bold new flavors. Every dish is crafted to satisfy cravings and turn each bite into a memorable experience.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreMenu
