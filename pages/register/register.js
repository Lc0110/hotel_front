// pages/register/register.js
import {
  register
} from "../../services/register"
import { hexMD5 } from "../../utils/md5"
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  async registerTo() {
    const profile = await wx.getUserProfile({
      desc: '获取用户头像以及昵称',
    });
    this.setData({
      userInfo: profile.userInfo
    })
    let data = {
      avatarUrl: this.data.userInfo.avatarUrl,
      nickname: this.data.username,
      password: hexMD5(this.data.password),
      realname: this.data.realname,
      phonenumber: this.data.phonenumber,
    }
    if(!data.nickname || !data.password || !data.realname || !data.phonenumber){
      wx.showToast({
        title: '信息输入不完整！',
        icon: "none"
      })
      return 
    }
    if(data.phonenumber.length !== 11){
      wx.showToast({
        title: '手机号码长度为11位！',
        icon: "none"
      })
      return 
    }
    register(data).then(res => {
      console.log(res);
      if (res.message === "创建成功！") {

        wx.showToast({
          title: '注册成功',
        })
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }, 1000);
      } else if (res.code === -1001) {
        wx.showToast({
          title: '请输入完整信息',
          icon: 'error'
        })
      } else if (res.code === -1006) {
        wx.showToast({
          title: '该用户名已存在',
          icon: 'error'
        })
      } else {
        wx.showToast({
          title: '注册失败',
          icon: "error"
        })
      }
      this.setData({
        avatarUrl: "",
        username: "",
        password: "",
        realname: "",
        phonenumber: "",
      })
    })
  },
  ToLogin() {
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