import { Row } from 'antd'
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color:rgb(26, 148, 255);
    align-item: center;
    gap: 16px;
    flex-wrap: nowrap
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    line-height: 32px;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap:10px;
    font-size: 12px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap
`

