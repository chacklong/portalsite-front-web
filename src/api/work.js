import request from '@/api/request'

export function getWorkList(params){
    return request({
        url: '/jobs',
        method: 'get',
        params
    })
}
export function getWorkDetail(id){
    return request({
        url: `/jobs/${id}`,
        method: 'get'
    })
}