import request from '@/api/request'

export function getWorkList(params){
    return request({
        url: '/works',
        method: 'get',
        params
    })
}
export function getWorkDetail(id){
    return request({
        url: `/works/${id}`,
        method: 'get'
    })
}