import React, { lazy } from 'react'
import { WrapperContent, WrapperLableText, WrapperLableValue } from './styles'
import { Checkbox, Col, Rate, Row } from 'antd'

export const NavbarComponent = () => {
    const onChange = ()=>{

    }
    const renderContent = (type, option) => {
        switch (type) {
            case 'text':
                return option.map((option) => {
                    return (
                        <WrapperLableValue>{option}</WrapperLableValue>
                    )
                })
            case 'checkbox':
                return (
                <Checkbox.Group style={{ width: '100%', display:'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {option.map((option)=>{
                        return(
                            <Checkbox style={{marginLeft: 0}} value={option.value}>{option.label}</Checkbox>
                        )
                    })}
              </Checkbox.Group>
                )
            case 'star':
                return option.map((option)=>{
                    return (
                        <div style={{display: 'flex', gap: '4px'}}>
                            <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                            <span>{`từ ${option} sao`}</span>
                        </div>
                    )
                    
                })
                    
            case 'price':
                return option.map((option)=>{
                    return(
                        <div style={{padding: '4px', color: 'rgb(56, 56, 61)', borderRadius: '10px', backgroundColor: 'rgb(238, 238, 238)', width: 'fit-content'}}>{option}</div>
                    )
                })
            default:
                return {}
        }
    }
    return (
        <div style={{backgroundColor: '#fff'}}>
            <WrapperLableText>Label</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'May giat'])}
            </WrapperContent>
        </div>
    )
}
