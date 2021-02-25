import { Button, Form, Input, Result } from "antd"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { resetSignup, signup, SignupPayload } from "../../store/actions/auth.action"
import { AuthState } from "../../store/reducers/auth.reducer"
import { AppStore } from "../../store/reducers/imdex"
import Layout from "./Layout"

const Signup = () => {
  const dispatch = useDispatch()
  // 获取 auth 状态值
  const auth = useSelector<AppStore, AuthState>(state => state.auth)

  const [form] = Form.useForm()
  // 注册提交表单
  const onFinish = (value: SignupPayload) => {
    dispatch(signup(value))
  }
  // 注册成功 清空表单
  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields()
    }
  }, [auth])
  // 注册成功 显示成功信息
  const showSuccess = () => {
    if (auth.signup.loaded && auth.signup.success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={<Button type="primary">
            <Link to="/signin">登陆</Link>
          </Button>}
        />
      )
    }
  }
  // 注册失败 显示失败的提示信息
  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return (
        <Result
          status="warning"
          subTitle={auth.signup.message}
          title="注册失败"
        />
      )
    }
  }
  // 页面离开之前 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignup())
    }
  }, [])

  const signupForm = () => {
    return (
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <div>
      <Layout title="注册" subTitle="">
        {showSuccess()}
        {showError()}
        {signupForm()}
      </Layout>
    </div>
  )
}

export default Signup
