
require('pages/common/nav')
require('pages/common/search')
var _side = require('pages/common/side')
require('pages/common/footer')
var tpl = require('./index.tpl')

require('./index.css')

var _util = require('util')
var api = require('api')

var page = {
    init: function() {
        this.renderSide()
        this.loadUserinfo()  
    },
    renderSide:function(){
        _side.render('user-center')
    },
    loadUserinfo:function(){
        api.getUserinfo({
            success:function(user){
                var html = _util.render(tpl,user)
                $('.side-content').html(html)
            }
        })
    }

}

$(function() {
    page.init()
})