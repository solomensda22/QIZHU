import request from '@/utils/request'

/**
 * 查询我的申请
 * @param {{
 * query.name:描述,
 * query.userName:执飞人,
 * query.phoneNumber:联系电话,
 * query.scyName:执飞单位,
 * query.type:任务性质,
 * query.High:高度,
 * query.points:起降点,
 * query.time:起始时间,
 * query.createTime:创建时间
 * }} query
 * @returns
 */
// 查询
export function inquire(query) {
  return request({
    url: '/applyFor/list',
    method: 'post',
    data: {//post要用data
      name: query.name,
      takeoff: query.takeoff,
      land: query.land,
      startTime: query.startTime,
      endTime: query.endTime,
      pageNum: query.pageNum,
      pageSize: query.pageSize,
    },
    params: {
      pageNum: query.pageNum,
      pageSize: query.pageSize,
    }
  })
}
// 飞行轨迹页面轨迹线查询
export function userTrajectory() {
  return request({
    url: '/applyFor/userTrajectory',
    method: 'post',
  })
}
/**添加申请*/
export function addApplication(data) {
  return request({
    url: "	/applyFor/addApplyFor		",
    method: "post",
    data: data
  });
}
/*** 查询登录用户机型*/
export function noflysty() {
  return request({
    url: "/model/queryAllModel",
    method: "get",
  });
}
/**
 * 查询禁区
 * @param {*} queryArr
 * @returns
 */
export function RestrictedAreaInquiry(queryArr) {
  return request({
    url: "/applyFor/restrictedZone",
    method: "post",
    data: {
      lat: queryArr.lat,
      lon: queryArr.lon,
    }
  });
}


export function RestrictedAreaInquiry1() {
  return request({
    url: "/applyFor/allRestrictedZone",
    method: "post",
    // data: {
    //   lat: queryArr.lat,
    //   lon: queryArr.lon,
    // }
  });
}
/**
 * 获取详情
 * @param {*} queryArr
 * @returns
 */
export function GetCurrentApplication(query) {
  return request({
    url: "/applyFor/apply",
    method: "post",
    data: { id: query }
  })
}
// 获取轨迹线/applyFor/trajectory
export function getlinlist(query) {
  return request({
    url: "/applyFor/trajectory",
    method: "post",
    data: { id: query }
  })
}
// 删除
export function deleteApplyFor(query) {
  return request({
    url: "/applyFor/deleteApplyFor",
    method: "post",
    data: { id: query }
  })
}
export function flyAgain(query) {
  return request({
    url: "/applyFor/flyAgain",
    method: "post",
    data: query
  })
}
export function updateApplyFor(query) {
  return request({
    url: "/applyFor/updateApplyFor",
    method: "post",
    data: query
  })

}
// 获取审批进度
export function applicationStatus(query) {
  return request({
    url: "/applyFor/applicationStatus",
    method: "post",
    data: { id: query }
  })

}
/*** 大屏数据统计*/
export function statistics() {
  return request({
    url: "/largeScreen/statistics",
    method: "get",
  });
}
// 6个绘制禁飞区的部门
export function noflyRegionList() {
  return request({
    url: "/largeScreen/noflyRegionList",
    method: "get",
  });
}
// 查询所有的禁飞类型
export function getAllNoflyType() {
  return request({
    url: "/largeScreen/getAllNoflyType",
    method: "get",
  });
}
// 根据绘制禁飞区企业部门ID查询禁飞区
export function getNoflyRegionByCompanyId(data) {
  return request({
    url: "/largeScreen/getNoflyRegionByCompanyId",
    data: data,
    method: "post",
  });
}
