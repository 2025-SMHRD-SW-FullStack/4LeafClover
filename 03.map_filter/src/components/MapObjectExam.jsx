import React from 'react'

const MapObjectExam = () => {

    let members =[
        {id:1, name:'a',age:10, gender:'W'},
        {id:2, name:'b',age:11, gender:'M'},
        {id:3, name:'c',age:12, gender:'W'}
    ];

    let result = members.map((member)=>{
        return (<div key={member.id}>{member.id}.{member.name} 
                - {member.age}({member.gender==='M'?'남자':'여자'})</div>)
    })

    return (
        <div>
            {members.map((member)=>(
                <div key={member.id}>{member.id}.{member.name} 
                - {member.age}({member.gender==='M'?'남자':'여자'})</div>
            ))}
            <hr />
            {result}
        </div>
    )
}

export default MapObjectExam