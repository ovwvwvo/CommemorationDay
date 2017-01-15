var util = require('../../utils/util.js')

Page({
  data: {
    name: '',
    index: 0,
    date: '',
    time: '00:00',
    location: '',
    mark: ''
  },

  onLoad: function () {
    this.setData({
      date: util.formatDate(new Date())
    })
  },

  bindChange: function (e) {
    this.data[e.currentTarget.id] = e.detail.value
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  add: function () {
    if (this.data.name.length == 0) {
      wx.showModal({
        content: '输入不能为空!'
      })
      return;
    }
    var data = {};
    wx.setStorageSync(Date.now(), data);
    wx.showToast({
      title: '添加成功',
      duration: 2000
    })
  }
})
