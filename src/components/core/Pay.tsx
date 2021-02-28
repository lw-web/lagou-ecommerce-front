import { Button } from "antd"
import axios from "axios"
import { FC } from "react"
import { API } from "../../config"
import { isAuth } from "../../helpers/auth"
import { CartItem } from "../../helpers/cart"
import { Jwt } from "../../store/modules/auth"

interface Props {
  totalPrice: number
  address: string
  cart: CartItem[]
}

const Pay:FC<Props> = ({ totalPrice, address, cart }) => {
  const getPayUrl = () => {
    axios.post(`${API}/alipay`, {
      totalAmount: totalPrice,
      subject: '测试订单标题',
      body: '测试订单描述',
      products: cart.map(product => ({
        count: product.count,
        product: product._id
      })),
      address,
      userId: (isAuth() as Jwt).user._id
    }).then(response => {
      window.location.href = response.data.result
    })
  }
  const showButton = () => {
    return isAuth() ? (
      <Button onClick={getPayUrl}>提交订单</Button>
    ) : (
      <Button>登陆</Button>
    )
  }
  return <>{showButton()}</>
}

export default Pay
