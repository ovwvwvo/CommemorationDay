//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    datas: []
  },
  itemClick: function (event) {
    wx.navigateTo({
      url: '../edit/edit'
    })
  },
  addClick: function (event) {
    wx.navigateTo({
      url: '../edit/edit'
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
