import React from 'react'
import { TypeProduct } from '../../components/TypeProduct/TypeProduct';
import { WrapperButton, WrapperProducts, WrapperTypeProduct } from './styles';
import { SliceComponent } from '../../components/SlicesComponent/SliceComponent';
import slice1 from '../../assets/images/slice1.webp'
import slice2 from '../../assets/images/slice2.webp'
import slice3 from '../../assets/images/slice3.webp'
import { CardComponent } from '../../components/CardComponents/CardComponent';
const HomePage = () => {
    const arr = ['TV', 'Tủ lạnh', 'Laptop']
    return (
        <>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
                <div className='body' style={{width: '100%', backgroundColor: '#efefef'}}>
                    <div id='container' style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                        <SliceComponent arrImages={[slice1, slice2, slice3]} />
                        <WrapperProducts>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperProducts>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <WrapperButton textButton="Xem thêm" type="outline" styleButton={{
                                border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)', width: '240px'
                                , height: '38px', borderRadius: '4px', fontWeight: 500
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage