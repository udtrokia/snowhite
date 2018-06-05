// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uint: "",
    position: "",
    advice: ""
  },
  bindKeyInput: function (e) {
    var id = e.target.id;
    var value = e.detail.value;
    this.setData({
      [id]: value
    })
  },
  profess: function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/api/advices',
      data: this.data,
      header: {
        "content-type": "application/json"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.showToast({
          title: '提交成功',
          icon: "success",
        })
      },
      fail: function(res) {},
      complete: function(res) {
        that.setData({
          uint: "",
          position: "",
          advice: ""
        })
      },
    });
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/create/create'
    }
  }
})