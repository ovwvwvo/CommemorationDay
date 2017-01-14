//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    datas: []
  },
  ItemClick: function (event) {
    console.log(event);
    wx.showToast({
      title: "success"
    })
  },
  onLoad: function () {
    this.setData({
      datas: (wx.getStorageSync('logs') || []).map(function (data) {
        return util.formatTime(new Date(data))
      })
    })
  }
})
