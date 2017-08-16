import originJsonp from 'jsonp'

export  default  function (url, data, option) {

  url += (url.indexOf('?')<0?'?':'&')+param(data);
  //返回一个promise函数 =>回调函数
  return new Promise((resolve,reject)=>{
     originJsonp(url,option,(err,data)=>{
       if(!err){
         resolve(data);
       }else{
         reject(err);
       }
     });
  })
}


//定义一个函数将data拼接成url
function param(data){
  let url = '';
  for(var k in data){
    let value = data[k] !== 'undefined'? data[k]:'';
    //es6语法
    url += '&${k}=${encodeURLComponent(value)}';
  }
  //判断返回的url是否为空，如果不为空，则去掉第一个&符号
  return url? url.substring(1):'';
}
