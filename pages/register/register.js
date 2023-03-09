// pages/register/register.js
import {
  register
} from "../../services/register"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    realname: "",
    phonenumber: "",
    userInfo: {},
  },
  async goLogin() {
    const profile = await wx.getUserProfile({
      desc: '获取用户头像以及昵称',
    });
    this.setData({
      userInfo: profile.userInfo
    })
    let data = {
      avatarUrl: this.data.userInfo.avatarUrl,
      nickname: this.data.username,
      password: this.data.password,
      realname: this.data.realname,
      phonenumber: this.data.phonenumber,
    }
    register(data).then(res => {
      if (res.message === "创建成功！") {
        wx.showToast({
          title: '注册成功',
        })
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }, 1000);
      } else {
        wx.showToast({
          title: '注册失败',
          icon: "error"
        })
        this.setData({
          avatarUrl: "",
          username: "",
          password: "",
          realname: "",
          phonenumber: "",
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  registerTo() {
    this.goLogin()
  },
  ToLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

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