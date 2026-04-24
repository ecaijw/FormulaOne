// utils/request.js
const request = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res) => resolve(res.data),
      fail: reject
    })
  })
}

module.exports = {
  request
}