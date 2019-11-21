'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.app.mysql);
    const result = await this.app.mysql.query('select * from blogcontent', '');
    console.log('reaact', result);
    ctx.body = result;
  }
  async getArtical() {
    // const sql = 'select * from blogtype';
    const sql = 'SELECT artical.Id as Id,' +
                 'artical.title as title,' +
                 'artical.type_id as typeid,' +
                 'artical.content as content,' +
                 'artical.introduce as introduce,' +
                 'blogtype.typeName as typeName ,' +
                 "FROM_UNIXTIME(artical.add_time,'%Y-%m-%d %H:%i:%s' ) as addtime," +
                 'artical.view_count as viewcount FROM artical LEFT JOIN blogtype ON artical.type_id = blogtype.Id';
    const res = await this.app.mysql.query(sql);
    this.ctx.body = { data: res };
  }
  async getArticalById() {
    // 接收前端传过来的值
    const id = this.ctx.params.id;
    const sql = 'SELECT artical.Id as Id,' +
    'artical.title as title,' +
    'artical.introduce as introduce,' +
    'artical.content as content,' +
    "FROM_UNIXTIME(artical.add_time,'%Y-%m-%d %H:%i:%s' ) as add_time," +
    'artical.view_count as viewcount ,' +
    'blogtype.typeName as typeName ,' +
    'blogtype.id as typeId ' +
    'FROM artical LEFT JOIN blogtype ON artical.type_id = blogtype.Id ' +
    'WHERE artical.id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }
}


module.exports = HomeController;
