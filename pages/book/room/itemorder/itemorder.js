// pages/book/room/itemorder/itemorder.js
import {
  createOrder,
  SearchOrd
} from "../../../../services/order"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: "",
    name: "",
    g_id:"",
    price: "",
    note: "",
    in_time: "",
    out_time: "",
    ord_id:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      imgurl: options.imgurl,
      name: options.name,
      price: options.price,
      g_id: options.gst_id,
    })
  },

  bindInDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      in_time: e.detail.value
    })
  },
  bindOutDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      out_time: e.detail.value
    })
  },

  placeOrder() {
    let data = {
      m_id: wx.getStorageSync('mem_id'),
      g_id: this.data.g_id,
      realname: wx.getStorageSync('realname'),
      price: this.data.price,
      in_time: this.data.in_time,
      out_time: this.data.out_time,
      status : 0,
      note: this.data.note 
    }
    createOrder(data).then(res=>{
      if(res.message === "创建成功！"){
        let data ={
          m_id: wx.getStorageSync('mem_id'),
          g_id: this.data.g_id,
          realname: wx.getStorageSync('realname'),
          price: this.data.price,
          in_time: this.data.in_time,
          out_time: this.data.out_time,
          status : 0,
          note: this.data.note 
        }
        SearchOrd(data).then(res=>{
          this.setData({
            ord_id: res.data[0].ord_id,
          })
          wx.navigateTo({
            url: `/pages/pay/pay?price=${this.data.price}&ord_id=${this.data.ord_id}`,
          })
        })
      }
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