import React from 'react'
import { Row, Col, Space, Input, Button } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './styles';
import Search from 'antd/es/transfer/search';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { ButtonInputSearch } from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponents = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>LAPTRINHTHATDE</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch 
                    bordered={false}
                    size="large"
                    textButton="Tìm kiếm"
                    placeholder='Tìm kiếm' enterButton />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall >Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponents