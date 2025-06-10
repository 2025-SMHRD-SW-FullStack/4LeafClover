import React, { useEffect, useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem';
import MenuNav from './MenuNav';

const MenuBoard = () => {

    
    const [data,setData]=useState(menuData);
    
    
    

    const menuFilter = (item) =>{
        
        if(item!=="ALL"){
            setData(menuData.filter((menu)=>menu.category==item));
            // menus는 가장 최근에 조회한 정보가 저장되어있음
            // 'ALL'을 누르면 최근 정보로만 조회
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