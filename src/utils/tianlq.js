import request from '@/utils/request'
/**
 * 查询机型
 * @returns 
 */
export function mydevice(query) {
  return request({
    url: '/model/queryAllModel',
    method: 'get',
    params:{
      pageNum:query.pageNum,
      pageSize:query.pageSize,
      selectKeyWord:query.selectKeyWord,
      
    }
  })
}
/**
 * 添加机型
 * @returns 
 */
  export function addAttachment(param) {
    return request({
      url: 'model/save',
      method: 'post',
      data:{
        model:param.model,
        number:param.number,
      }
    });
  }
    /**

/**
 * 删除机型
 * @returns 
 */
  export function deletefly(id) {
    return request({
      url: '/model/del',
      method: 'post',
      params:{id:id}
    });
  }
  /**
   * 修改机型
   * @param {model:设备名称,number:机型编码,id:设备id}
   * @returns 
   */
  export function modification(xiaotian) {
    return request({
      url: '/model/update',
      method: 'post',
      data:{
        model:xiaotian.model,
        number:xiaotian.number,
        id:xiaotian.id,
      }
    });
  }
