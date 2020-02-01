'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  
  async getArtical() {
    const sql = 'SELECT artical.Id as Id,' +
                 'artical.title as title,' +
                 'artical.type_id as typeid,' +
                 'artical.content as content,' +
                 'blogtype.typeName as typeName ,' +
                 "FROM_UNIXTIME(artical.addTime,'%Y-%m-%d %H:%i:%s' ) as addtime," +
                 'artical.view_count as viewcount FROM artical LEFT JOIN blogtype ON artical.type_id = blogtype.Id';
    const res = await this.app.mysql.query(sql);
    // console.log('ressss', res);
    this.ctx.body = { data: res };
  }
  async getArticalById() {
    // 接收前端传过来的值
    const id = this.ctx.params.id;
    const sql = 'SELECT artical.Id as Id,' +
    'artical.title as title,' +
    'artical.content as content,' +
    "FROM_UNIXTIME(artical.addTime,'%Y-%m-%d %H:%i:%s' ) as add_time," +
    'artical.view_count as viewcount ,' +
    'blogtype.typeName as typeName ,' +
    'blogtype.id as typeId ' +
    'FROM artical LEFT JOIN blogtype ON artical.type_id = blogtype.Id ' +
    'WHERE artical.id=' + id;
    const result = await this.app.mysql.query(sql);
    // console.log('ssssss', result);
    this.ctx.body = {
      data: result,
    };
  }
  async getListById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT artical.Id as Id,' +
    'artical.title as title,' +
    'artical.type_id as typeid,' +
    'artical.content as content,' +
    'blogtype.typeName as typeName ,' +
    "FROM_UNIXTIME(artical.addTime,'%Y-%m-%d %H:%i:%s' ) as addtime," +
    'artical.view_count as viewcount FROM artical LEFT JOIN blogtype ON artical.type_id = blogtype.Id ' +
    'where blogtype.Id=' + id;
    const res = await this.app.mysql.query(sql);
console.log('ressss', res);
    this.ctx.body = { data: res };
  }

  async getType() {
    const result = await this.app.mysql.select('blogtype')
    // console.log('res', result);
    this.ctx.body = {data: result}
  }
}


module.exports = HomeController;
