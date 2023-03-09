// pages/book/roomdetail/room.js
var app = getApp();
import {
  getEva,
  searchGuest
} from "../../../services/room"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gst_id:"",
    imgurl: "",
    price: "",
    name: "",
    evas: [],
    description: "",
    num: "",
    is_tj: 0,
    is_work: 0,
    is_wifi: 0,
    is_window: 0,
    area: 0,
    live: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGuest(options.id)
    this.getEva()
  },

  getGuest(id) {
    searchGuest({
      gst_id: id
    }).then(res => {
      if (res.message === "查询成功！") {
        const {
          gst_id,
          name,
          price,
          description,
          imgurl,
          num,
          is_tj,
          is_work,
          is_wifi,
          is_window,
          area,
          live
        } = res.data[0]
        console.log(res.data[0]);
        this.setData({
          gst_id,
          name,
          price,
          description,
          imgurl,
          num,
          is_tj,
          is_work,
          is_wifi,
          is_window,
          area,
          live,
        })
      }
    })
  },

  getEva() {
    let data = {
      content: "",
      size: 100,
      offset: 0
    }
    getEva(data).then(res => {
      if (res.message === "获取成功！") {
        this.setData({
          evas: res.data
        })
      }
    })
  },

  toOrder(){
    wx.navigateTo({
      url: `/pages/book/room/itemorder/itemorder?gst_id=${this.data.gst_id}&imgurl=${this.data.imgurl}&name=${this.data.name}&price=${this.data.price}`,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})