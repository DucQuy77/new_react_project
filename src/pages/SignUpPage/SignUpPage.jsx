import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from '../SignInPage/styles'
import InputForm from '../../components/InputForm/InputForm'
import { Divider, Image } from 'antd'
import { ButtonComponent } from '../../components/ButtonComponents/ButtonComponent'
import imageLogo from '../../assets/images/signin.webp'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState('');
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState('');
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Tạo tài khoản</p>
          <InputForm placeholder="abc@gmail.com" />
          <Divider style={{ margin: '10px 0' }} />
          <div style={{ position: 'relative' }}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }} >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="Mật khẩu" />
          </div>
          <Divider style={{ margin: '10px 0' }} />
          <div style={{ position: 'relative' }}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
              {
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
          </div>
          <InputForm placeholder="Xác nhận mật khẩu" />
          <ButtonComponent
            size={20}
            styleButton={{
              background: 'rgb(255, 57,69)',
              height: '48px',
              width: '100%',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng ký'}
          ></ButtonComponent>
          <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight> </p>
          <p>Bạn đã có tài khoản ?  <WrapperTextLight>Đăng nhập ngay</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='image-logo' height='203px' width='203px' margin='0 auto' />
          <h2 style={{textAlign: 'center'}} >Mua sắm tại Tiki</h2>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage