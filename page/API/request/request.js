Page({
    data : {
        content : "网页内容"
    },
    submit:function(e){
        var url = e.detail.value.url;
        this.setData({content:"正在发送请求。。。"})
        var self = this;
        wx.request({
            url: url, //仅为示例，并非真实的接口地址
            data: {
                x: '1' ,
                y: '2'
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                self.setData({content:res.data});
            }
        })
    }
})
