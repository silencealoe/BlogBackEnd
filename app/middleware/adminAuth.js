module.exports = options => {
    return async function adminAuth(ctx, next){
        console.log('idddd',ctx.session.openId)
        // ctx.session.openId = ''
        // ctx.body = {data:'no session'}
        if(ctx.session.openId) {
            await next()
        } else {
            console.log('adminnnnnnnnnnnnnnnnnnnnnn')
            ctx.body = {data:'no session'}
        }
    }
}