// pages/create/create.js
const gun = require('../../utils/gun.js')();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(gun.get("hello"))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  profess: function(){
    wx.showModal({
      title: '表白结果',
      content: '对方拒绝了您的表白，并给您发了张好人卡',
      showCancel: true,
      cancelText: '继续表白',
      cancelColor: '#f00',
      confirmText: '放弃',
      confirmColor: '',
      success: function(res) {
        if(res.cancel){
          wx.showToast({
            title: '你是个好人',
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})