/**
 * Created by fu on 2018/1/24.
 */
import axios from 'axios'


export default{
     get:function(url,data){
      return axios.get(url,{
            params:data
        })
    },
      post:function(url,data){
       return axios.post(url,{
            params:data
        })
    }
}
