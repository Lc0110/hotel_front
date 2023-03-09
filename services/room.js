import { hyRequest } from "./index"

export function getEva(data) {
  return hyRequest.post({
    url: "/eva/evalist",
    data,
  })
}

export function searchGuest(data) {
  return hyRequest.post({
    url: "/guest/search",
    data,
  })
}

export function getClassify(data) {
  return hyRequest.post({
    url: "/classify/classifylist",
    data,
  })
}
