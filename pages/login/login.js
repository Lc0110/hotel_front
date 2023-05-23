// pages/login/login.js
import {
  login
} from "../../services/register"
import { hexMD5 } from "../../utils/md5"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ""
  },

  Login() {
    let data = {
      nickname: this.data.username,
      password: hexMD5(this.data.password),
    }
    if(!data.nickname || !data.password){
      wx.showToast({
        title: '信息输入不完整！',
        icon: "none"
      })
      return 
    }
    login(data).then(res => {
      console.log(res);
      if (res.message === "登录成功！") {
        wx.showToast({
          title: '登录成功',
        })
        wx.setStorageSync('nickName', res.data[0].nickname);
        wx.setStorageSync('avatarUrl', res.data[0].avatarurl);
        wx.setStorageSync('mem_id', res.data[0].mem_id);
        wx.setStorageSync('realname', res.data[0].realname);
        wx.setStorageSync('token', res.data[0].nickname)
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/home/home',
          })
        }, 1000);
      } else if (res.code === -1001) {
        wx.showToast({
          title: '请输入完整信息',
          icon: 'error'
        })
      } else if (res.code === -1003) {
        wx.showToast({
          title: '不存在该用户',
          icon: 'error'
        })
      } else if (res.code === -1004) {
        wx.showToast({
          title: '密码错误',
          icon: 'error'
        })
      } else {
        wx.showToast({
          title: '登录失败',
          icon: 'error'
        })
      }
      this.setData({
        username: "",
        password: ""
      })
    })
  },

  Toregister() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const token = wx.getStorageSync('token')
    if(token){
      wx.switchTab({
        url: '/pages/home/home',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})