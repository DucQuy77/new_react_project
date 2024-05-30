import styled from "styled-components";
import { ButtonComponent } from "../../components/ButtonComponents/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-item: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButton = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: rgb(13, 92, 182);
        span{
            color: #fff
        }
    }
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`