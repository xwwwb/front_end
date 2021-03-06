// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList:[],
        isLoading:false
    },
    getColor(){
       
        wx.showLoading({
          title: '正在加载',
        })
        this.setData({isLoading:true})
        console.log("要发请求了")
        wx.request({
          url: 'https://www.escook.cn/api/color',
          method:'GET',
          success:({data:res})=>{
            console.log(res)
            this.setData({
                colorList:[...this.data.colorList,...res.data]
                
            })
            wx.hideLoading({
                success: (res) => {},
              })
              this.setData({isLoading:false})
          }
        })
     
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getColor()
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
        if(!this.data.isLoading){
            this.getColor()
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})