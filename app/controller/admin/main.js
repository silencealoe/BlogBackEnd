'use strict'
const Controller = require('egg').Controller

class  AdminMain extends Controller{
    async index(){
        this.ctx.body='hello'
    }

    async checkLogin(){
        const username = this.ctx.request.body.username
        const password = this.ctx.request.body.password
        const sql = 'SELECT username FROM users WHERE username="'+ username +'"  AND password="'+password+'"'
        const res = await this.app.mysql.query(sql)
        if(res.length>0) {
            console.log('sesssssssssssssss====')
            const openId = new Date().getTime()
            this.ctx.session.openId = {'openId': openId}
            this.ctx.body={'data': 'success', 'openId':openId } 
        } else {
            this.ctx.body={'data': 'failure'}
        }
    }
    async getTypeInfo(){
        const typeInfo = await this.app.mysql.select('blogtype')
        this.ctx.body = {data: typeInfo}
    }
}
module.exports = AdminMain