// pages/home/home.js
import {getAdverts,getRooms } from "../../services/home"
Page({

  data: {
    swiperItems: [],
    rooms:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwipper()
    this.getRooms()
  },

  getSwipper(){
    let data = {
      size: 100,
      offset:0
    }
    getAdverts(data).then(res=>{
      if(res.message === "获取成功！"){
        const swiper = res.data.filter( item =>{
           return item.status === 1
        })
        this.setData({
          swiperItems : swiper
        })
      }
     
    })
  },

  getRooms(){
    let data = {
      size: 100,
      offset:0
    }
    getRooms(data).then(res=>{
      if(res.message === "获取成功！"){
        const roomdata = res.data.filter(item =>{
          return item.num >0
        })
        this.setData({
          rooms : roomdata
        })
        wx.setStorageSync('rooms', roomdata)
      }
    })
  },
  // 跳转预订页面
  go_book: function (e) {
    wx.switchTab({
      url: '../book/book'
    })
  },

  // 跳转订房详情
  go_roomdetail: function (e) {
    var id = e.currentTarget.dataset.id
    console.log(id);
    wx.navigateTo({
      url: '../book/room/room?id=' + id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})