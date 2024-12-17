import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../assets/css/PostExpect/PostExpect.css'
import Loading from '../../components/loading/Loading'
const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (err) {
                console.error(err.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>
            <Loading />
        </div>
    }
    return (
        <div>
            <Row >
                {
                    products.map((product, index) => {
                        return (
                            <Col>
                                <div key={index}>
                                    <img src={product.image} alt="" style={{ width: '200px', height: '200px' }} />
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p>Price: {product.price}</p>
                                    <p>Rating: {product.rating.rate}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Products
