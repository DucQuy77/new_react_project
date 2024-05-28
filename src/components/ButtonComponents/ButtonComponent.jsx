import { Button } from 'antd'
import React from 'react'
import {
    SearchOutlined
} from '@ant-design/icons';
export const ButtonComponent = ({size, styleButton, styleTextButton, textButton,...rest}) => {
  return (
    <div>
        <Button size={size}
        style={styleButton}
        {...rest}
    // style={{ background: backgroundColorButton, border: !bordered && 'none' }}
    // icon={<SearchOutlined color={colorButton} style={{color: colorButton}} />}
    >
    <span style={{styleTextButton}}>
        {textButton}
    </span>
</Button>
</div>
  )
}
