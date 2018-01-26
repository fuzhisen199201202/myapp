/**
 * Created by fu on 2018/1/24.
 */
import request from './baseServices';

export function getlist(data){
    return request.get('http://114.55.249.153:8028/shopping/listByPage',data)
}
export function postlist(data){
    return request.post('http://114.55.249.153:8028/shopping/listByPage',data)
}