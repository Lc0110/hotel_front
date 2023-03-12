// pages/pay/pay.js
import {
  changeStatus
} from "../../services/order"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: "",
    ord_id: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      price: options.price,
      ord_id: options.ord_id
    })
    console.log(this.data.ord_id);
  },

  confirm() {
    wx.showModal({
      title: '提示',
      content: '支付成功！',
      showCancel: false,
      complete: (res) => {
        if (res.confirm) {
          let data={
            status: 1,
            ord_id: this.data.ord_id
          }
          changeStatus(data).then(res=>{
            console.log(res);
          })
          wx.reLaunch({
            url: '/pages/mine/mine',
          })
        }
      }
    })
  },
  cancel() {
    wx.reLaunch({
      url: '/pages/mine/mine',
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