import { hyRequest } from "./index"


export function register(data) {
  return hyRequest.post({
    url: "/main/createmember",
    data,
  })
}

export function login(data) {
  return hyRequest.post({
    url: "/main/login",
    data,
  })
}

export function getUserInfo(data) {
  return hyRequest.post({
    url: "/main/searchmember",
    data,
  })
}

export function editUser(data) {
  return hyRequest.post({
    url: "/main/edit",
    data,
  })
}
