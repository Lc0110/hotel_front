// pages/login/login.js
import {
  login
} from "../../services/register"
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
      password: this.data.password,
    }
    login(data).then(res =>{
      if(res.message === "登录成功！"){
        wx.showToast({
          title: '登录成功',
        })
        wx.setStorageSync('nickName', res.data[0].nickname);
        wx.setStorageSync('avatarUrl', res.data[0].avatarurl);
        wx.setStorageSync('mem_id', res.data[0].mem_id);
        wx.setStorageSync('realname', res.data[0].realname);
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/home/home',
          })
        }, 1000);
      }else{
        wx.showToast({
          title: '登录失败',
          icon: 'error'
        })
        this.setData({
          username:"",
          password: ""
        })
      }
    }).catch(err => {
      console.log(err);
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