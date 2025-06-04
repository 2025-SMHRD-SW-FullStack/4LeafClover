import React from 'react'

const MenuNav = ({onFilter}) => {

  const categorys = ['ALL','커피', '디저트','에이드','베이커리']

  return (
    <div>
        <ul className='menu-nav'>
          {categorys.map((item,index)=>(
              <li onClick={()=>onFilter(item)} key={index}>{item}</li>
          ))}
        </ul>
    </div>
  )
}

export default MenuNav