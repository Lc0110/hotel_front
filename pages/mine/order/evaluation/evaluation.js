// pages/mine/order/evaluation/evaluation.js
import {
  createEvaluation
} from "../../../../services/order.js"
import {
  changeStatus
} from "../../../../services/order"

var sensitiveWords = ["敏感词1", "敏感词2", "敏感词3"];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ord_id: "",
    g_id: "",
    content: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      ord_id: options.ord_id,
      g_id: options.g_id
    })
  },

  save() {
    const res = this.filterSensitiveWords(this.data.content);
    if(res){
      wx.showToast({
        title: '评价内容含有敏感词，请修改！',
        icon: 'none'
      })
      return
    }  
    let data = {
      m_id: wx.getStorageSync('mem_id'),
      g_id: this.data.g_id,
      content: this.data.content,
    }
    createEvaluation(data).then(res => {
      console.log(res);
      if (res.message === "创建成功！") {
        let data1 = {
          ord_id: this.data.ord_id,
          status: 4
        }
        changeStatus(data1).then(res => {
          if (res.message === "修改成功！") {
            wx.showToast({
              title: '评价成功！',
            })
          }
        })
      } else {
        wx.showToast({
          title: '评价失败！',
          icon: 'error',
        })
      }
      setTimeout(() => {
        wx.reLaunch({
          url: '/pages/mine/mine',
        })
      }, 1000);
    })
  },


  filterSensitiveWords(text) {
    var pattern = new RegExp(sensitiveWords.join('|'), 'g');
    if (pattern.test(text)) {
      return true;
    }else{
      return false;
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