import { request } from "@/utils/request.js";

export function getPostDdd(id) {
  return request({
    url: '/5e0c3fd0334bc65f75e23b95/demopost',
    method: 'post',
    id: id
  }) 
}
// export function getDb() {
//   return request({
//     url: '/db.json'
//   }) 
// }
