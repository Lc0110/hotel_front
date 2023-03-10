// pages/mine/order/order.js
import {
  getOrderListByid,
  changeStatus
} from "../../../services/order"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserOrders()
  },

  getUserOrders() {
    let data = {
      m_id: wx.getStorageSync('mem_id')
    }
    getOrderListByid(data).then(res => {
      if (res.message === "查询成功！") {
        this.setData({
          orders: res.data,
        })
      }
    })
  },

  payOrder(e) {
    const id = e.currentTarget.dataset.orderIndex;
    wx.navigateTo({
      url: `/pages/pay/pay?price=${this.data.orders[id].price}&ord_id=${this.data.orders[id].ord_id}`,
    })
  },

  evaluateOrder(e) {
    const id = e.currentTarget.dataset.orderIndex;
    wx.navigateTo({
      url: `/pages/mine/order/evaluation/evaluation?ord_id=${this.data.orders[id].ord_id}&g_id=${this.data.orders[id].g_id}`,
    })
  },
  live(e) {
    const id = e.currentTarget.dataset.orderIndex;
    let data = {
      ord_id: this.data.orders[id].ord_id,
      status: 2
    }
    changeStatus(data).then(res => {
      console.log(res);
      if (res.message === "修改成功") {
        console.log("入住成功");
      }
    })
    this.onLoad()
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