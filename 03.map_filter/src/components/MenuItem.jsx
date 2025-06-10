import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MenuItem = ({item}) => {
    return (
    

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            {item.price}
        </Card.Text>
        <Button variant="primary">주문하기</Button>
    </Card.Body>
    </Card>
    
    )
}

export default MenuItem