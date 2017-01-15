//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    datas: ["111"]
  },
  itemClick: function (event) {
    // wx.navigateTo({
    //   url: '../edit/edit'
    // })
  },
  addClick: function (event) {
    wx.navigateTo({
      url: '../edit/edit'
    })
  },
  onLoad: function () {

  },
  onShow: function () {
    try {
      var res = wx.getStorageInfoSync();
      this.setData({
        datas: (res.keys || []).map(function (key) {
          var value = wx.getStorageSync(key);
          return value.name;
        })
      });
    } catch (e) {
      // Do something when catch error
    }
  }
})