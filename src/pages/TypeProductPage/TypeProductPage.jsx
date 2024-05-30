import React, { Fragment } from 'react'
import { NavbarComponent } from '../../components/NavbarComponents/NavbarComponent'
import { CardComponent } from '../../components/CardComponents/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProduct } from './styles'

const TypeProductPage = () => {
    const onChange = () => {

    }
    return (
        <div style={{ width: '100%', background: '#efefef' }}>
            <div style={{width: '1270px', margin: '0 auto'}}>
                <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                    <WrapperNavbar span={4}>
                        <NavbarComponent />
                    </WrapperNavbar>
                    <Col span={20}>
                        <WrapperProduct span={20}>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperProduct>
                        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TypeProductPage