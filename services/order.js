import { hyRequest } from "./index"

export function createOrder(data) {
  return hyRequest.post({
    url: "/order/create",
    data,
  })
}

export function SearchOrd(data) {
  return hyRequest.post({
    url: "/order/searchOrder",
    data,
  })
}
export function changeStatus(data) {
  return hyRequest.post({
    url: "/order/change",
    data,
  })
}
export function getOrderListByid(data) {
  return hyRequest.post({
    url: "/order/search",
    data,
  })
}

export function createEvaluation(data) {
  return hyRequest.post({
    url: "/eva/create",
    data,
  })
}

