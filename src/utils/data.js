import request from '@/utils/request';

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return request({
    url: '/dict/data/type/' + dictType,
    method: 'get'
  });
}

// 根据字典类型查询字典数据信息
export function getDataByTypeList(data) {
  return request({
    url: '/dict/data/type/getDataByTypeList',
    method: 'post',
    data: data
  });
}
