// components/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0,
    multiArray: [[
      '区块链项目方', 
      '技术人员',
      '个人/机构Token投资人',
      '公司高管',
      '感兴趣/爱好者',
      '政府部门人员',
      '高校师生',
      '公司内部人员'
    ], [
      '区块链企业', 
      '金融领域', 
      '政府机构', 
      '传媒机构', 
      '教育机构',
      '能源/汽车/房产/食品',
      '互联网科技其他',
      '其他'
    ]],
    multiIndex: [0, 0],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    }
  }
})
