import { Card, Image } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './styles'
import { StarFilled } from '@ant-design/icons'
export const CardComponent = () => {
    return (
        <div>
            <Card
                hoverable
                headStyle={{width: '20px', height: '200px'}}
                style={{
                    width: 200,
                }}
                bodyStyle={{ padding: '10px' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <img src='' style={{width: '68px', height: '14px', position: 'absolute', top: 0, left: 0}} />
                <StyleNameProduct>Iphone</StyleNameProduct>
                <WrapperReportText>
                    <span style={{marginRight: '4px'}}>
                        <span> 4.96 </span><StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    </span>
                    <span> | Đã bán 1000+</span>
                    <WrapperPriceText>
                         1.000.000đ
                         <WrapperDiscountText>-5%</WrapperDiscountText>
                    </WrapperPriceText>
                </WrapperReportText>
            </Card>
        </div>
    )
}
