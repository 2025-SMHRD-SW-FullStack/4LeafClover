import React, { useEffect, useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem';
import MenuNav from './MenuNav';

const MenuBoard = () => {

    
    const [data,setData]=useState(menuData);
    
    
    

    const menuFilter = (item) =>{
        
        if(item!=="ALL"){
            setData(menuData.filter((menu)=>menu.category==item));

        }else{
            setData(menuData);
        }
    }
    
    
    

    return (
        <div className='menu-board'>
            <h1>메뉴판</h1>
            <MenuNav onFilter={menuFilter}/>
            <div className='menu-list'>
            {data.map((item,index)=>(
                    <MenuItem key={index} item={item}/>
                ))}
                </div>
        </div>
    )
}

export default MenuBoard