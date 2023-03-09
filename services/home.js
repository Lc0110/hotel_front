import { hyRequest } from "./index"


export function getAdverts(data) {
  return hyRequest.post({
    url: "/advert/advertlist",
    data,
  })
}

export function getRooms(data) {
  return hyRequest.post({
    url: "/guest/guestlist",
    data,
  })
}