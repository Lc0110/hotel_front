// pages/book/book.js
import {
  getClassify
} from "../../services/room"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: [],
    rooms: [],
    curNavId: '',
    currentIndex: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getClassify()
    this.setData({
      rooms : wx.getStorageSync('rooms')
    })
  },

  getClassify() {
    let data = {
      Isfirst: "",
      size: 10,
      offset: 0
    }
    getClassify(data).then(res=>{
      if(res.message === "获取成功！"){
        this.setData({
          classify: res.data
        })
      }
    })
  },

  //事件处理函数
  switchRightTab: function (e) {
    const currentIndex = e.currentTarget.dataset.id
    this.setData({
      currentIndex,
    })
  },

  // 跳转订房详情
  go_roomdetail: function (e) {
    var id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: 'room/room?id=' + id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})