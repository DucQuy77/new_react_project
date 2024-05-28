import React from 'react'
import { TypeProduct } from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './styles';
import { SliceComponent } from '../../components/SlicesComponent/SliceComponent';
import slice1 from '../../assets/images/slice1.webp'
import slice2 from '../../assets/images/slice2.webp'
import slice3 from '../../assets/images/slice3.webp'
import { CardComponent } from '../../components/CardComponents/CardComponent';
const HomePage = () => {
    const arr = ['TV', 'Tủ lạnh', 'Laptop']
    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
                <div id='container' style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}>
                    <SliceComponent arrImages={[slice1, slice2, slice3]} />
                    <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <CardComponent/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage