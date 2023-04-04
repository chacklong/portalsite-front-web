import request from '@/api/request'

export function getNewList(params){
    return request({
        url: '/news',
        method: 'get',
        params
    })
}
export function getNewDetail(id){
    return request({
        url: `/news/${id}`,
        method: 'get',
    })
}