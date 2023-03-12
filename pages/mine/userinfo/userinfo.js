// pages/mine/userinfo/userinfo.js

import { getUserInfo,editUser} from "../../../services/register"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "",
    nickName: "",
    Ename:"",
    realname: "",
    phonenumber:"",
    Enumber:"",
    gender:"",
    Egender:"男",
    isEdit: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserInfo();
    const avatarUrl = options.avatarUrl
    const nickName = options.nickName
    this.setData({
      avatarUrl,
      nickName,
    })
  },

  toEditPage(){
    this.setData({
      isEdit: !this.data.isEdit,
    })
  },

  getUserInfo(){
    let data = {
      nickname: wx.getStorageSync('nickName')
    }
    getUserInfo(data).then(res =>{
      this.setData({
        realname: res.data[0].realname,
        phonenumber: res.data[0].phonenumber,
        gender: res.data[0].gender,
      })
    })
  },

  radioChange(e){
    this.setData({
      Egender:e.detail.value,
    })
  },
  save(){
    let data ={
      mem_id: wx.getStorageSync('mem_id'),
      nickname: this.data.nickName,
      realname: this.data.Ename,
      phonenumber: this.data.Enumber,
      gender: this.data.Egender
    }
    editUser(data).then(res=>{
      console.log(res);
      if(res.message === "修改成功！"){
        wx.showToast({
          title: '修改成功!',
        })  
      }else{
        wx.showToast({
          title: '请输入完整信息!',
          icon: 'error'
        })
      }
      this.setData({
        isEdit: !this.data.isEdit,
        Ename: "",
        Egender: "",
        Enumber:""
      })
      this.onLoad()
    })
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