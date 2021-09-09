import { request } from '../network/request'
export function findAll() {
    return request({
        url: '/dataManage/get_datasets/',
        method: 'get'

    })
}