/**
 * Created by can on 2017/8/16.
 */
//利用封装好的jsonp函数来获取
import  jsonp from 'common/js/jsonp'
import  {commonParams,options} from './config'
//封装获取端口推荐数据的方法
export  function getRecommend(){
  const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
  const data = Object.assign({},commonParams,{
    platform: 'h5',
    uin: 0,//qq号码,默认为0
    needNewCode:1
  });
  return jsonp(url,data,options);
}
