import Layout from './Layout'
import { Form, Input, Button, Result } from 'antd'
import { signin, SigninPayload } from '../../store/actions/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers/imdex'
import { AuthState } from '../../store/reducers/auth.reducer'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/modules/auth'
import { Redirect } from 'react-router-dom'

const Signin = () => {
  const dispatch = useDispatch()
  const onFinish = (value: SigninPayload) => {
    dispatch(signin(value))
  }
  // 获取登陆结果
  const auth = useSelector<AppStore, AuthState>(state => state.auth)
  // 登陆失败 显示错误信息
  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return (
        <Result
          status="warning"
          subTitle={auth.signin.message}
          title="登陆失败"
        />
      )
    }
  }
  // 登陆成功 根据角色跳转到对应的管理页面
  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const { user: { role } } = auth as Jwt
      if (role === 0) {
        // 注册用户
        return <Redirect to="/user/dashboard"/>
      } else {
        // 管理员
        return <Redirect to="/admin/dashboard"/>
      }
    }
  }
  // 处理导航连接 已登陆 隐藏（登陆/注册）显示（dashboard）

  const signForm = () => (
    <Form onFinish={onFinish}>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  )
  return (
    <div>
      <Layout title="登陆" subTitle="">
        {showError()}
        {redirectToDashboard()}
        {signForm()}
      </Layout>
    </div>
  )
}

export default Signin
