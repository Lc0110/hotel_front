// pages/mine/mine.js
const app = getApp();
Page({
  data: {
    nickName: "",
    avatarUrl: ""
  },

  exitLogin() {
    wx.setStorageSync('nickName', "")
    wx.setStorageSync('avatarUrl', "")
    wx.setStorageSync('mem_id', "")
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },
  toMyInfo() {
    wx.navigateTo({
      url: `/pages/mine/userinfo/userinfo?avatarUrl=${this.data.avatarUrl}&nickName=${this.data.nickName}`,
    })
  },
  toMyOrder() {
    wx.navigateTo({
      url: `/pages/mine/order/order`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickName : wx.getStorageSync('nickName'),
      avatarUrl:wx.getStorageSync('avatarUrl')
    })
  }, 
})