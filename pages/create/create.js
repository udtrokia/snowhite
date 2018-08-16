// pages/create/create.js
Page({
  /**
   * 页面的初始数据
   */
  onLoad: function (options) {
    wx.login({
      
    })
  },
  data: {
    uint: "",
    position: "",
    advice: "",
    index: 0,
    multiArray: [[
      '区块链企业',
      '金融领域',
      '政府机构',
      '传媒机构',
      '教育机构',
      '能源/汽车/房产/食品',
      '互联网科技其他',
      '其他'
    ],[
      '区块链项目方',
      '技术人员',
      '个人/机构Token投资人',
      '公司高管',
      '感兴趣/爱好者',
      '政府部门人员',
      '高校师生',
      '公司内部人员'
    ]],
    multiIndex: [0, 0],
  },
  bindKeyInput: function (e) {
    var id = e.target.id;
    var value = e.detail.value;
    this.setData({
      [id]: value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      uint: this.data.multiArray[0][e.detail.value[0]],
      position: this.data.multiArray[1][e.detail.value[1]]
    })
    console.log(this.data)
  },
  profess: function(){
    var that = this;
    if(that.data.advice == ""){
      wx.showModal({
        title: '提示',
        content: '请输入您的建议 : )',
      })
      return;
    }
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
        wx.showModal({
          title: '提示',
          content: '感谢您的建议!',
        })
        return;
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