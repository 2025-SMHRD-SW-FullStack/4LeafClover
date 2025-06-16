import React from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {

    const{pro_no} = useParams();

    return (
        <div>
            <h1>
                ProducDetail
            </h1>
            <h4>{pro_no}번째 상품입니다 </h4>
        </div>
    )
}

export default ProductDetail