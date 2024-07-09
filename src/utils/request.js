import axios from "axios";
import { Notification, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";
import errorCode from "@/utils/errorCode";
import { tansParams } from "@/utils/huyi";
import { getRepeatToken } from "@/utils/common";
// import requestEncrypt from "./requestEncrypt";
// import SM2Util from "./sm2";
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: '/start',
  // 超时
  timeout: 10000,
});
// var white = [
//   "system/staffHandle/importTemplate/",
//   "system/staffInf/importTemplate/",
//   "system/staffInf/export",
//   "project/ownDaily/export",
//   "office/createWage/importTemplate",
//   "office/batchHandleInsurancesFund/importTemplate/",
//   "office/deduct/importTemplate",
//   "office/taxtotal/importTemplate/",
//   "office/createWage/payrollName/",
//   "office/ownWage/newExport",
//   "office/wageUploadExcel/downloadTemplate",
//   "invoice/accountFlow/export",
//   "invoice/collectionFlow/export",
//   "invoice/ownInvoice/export",
//   "recruit/resumeExport/export",
//   "material/trainInf/list",
//   "office/saleRecords/downloadSaleTemplate",
//   "office/saleRecords/saleExport",
//   "contract/ownContract/export",
//   "office/commissionStat/export",
//   "project/ownProject/export",
//   "project/receivable/export",
//   "project/businessOpportunity/export/",
//   "expenses/expenseInf/list",
//   "office/allowance/update/",
//   "system/dict/type/export",
//   "system/dict/type/importTemplate",
//   "material/trainInf/export",
//   "expenses/expenseInf/export",
// ];
var index = 0;
var part;
var subPart;
const repeatToken = getRepeatToken();
// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // config.headers["Authorization"] =
    //   "Bearer c4fa5033-6e38-49f9-8b14-5eb81495673c"; // 让每个请求携带自定义token 请根据实际情况自行修改

    index = 0;
    // white.forEach((el, i) => {
    //   if (config.url.indexOf(el) != -1) {
    //     index = i + 1;
    //     return;
    //   }
    // });
    // 钉钉
    // config.headers["channel"] = getChannel();
    config.headers["platform"] = navigator.userAgent;

    config.headers["repeatToken"] = repeatToken + ":" + config.url;
    //域名
    config.headers["domain"] = document.domain;
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?";
      for (const propName of Object.keys(config.params)) {
        let value = "";
        if (typeof config.params[propName] == "string") {
          value = config.params[propName].trim();
        } else {
          value = config.params[propName];
        }
        part = encodeURIComponent(propName) + "=";
        if (value && typeof value !== "undefined") {
          if (typeof value === "object") {
            for (const key of Object.keys(value)) {
              let params = propName + "[" + key + "]";
              subPart = encodeURIComponent(params) + "=";
              url += subPart + encodeURIComponent(value[key]) + "&";
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    } else if (config.method === "post" && config.params) {
      let url = config.url + "?";
      for (const propName of Object.keys(config.params)) {
        let value = "";
        if (typeof config.params[propName] == "string") {
          value = config.params[propName].trim();
        } else {
          value = config.params[propName];
        }
        part = encodeURIComponent(propName) + "=";
        if (value && typeof value !== "undefined") {
          if (typeof value === "object") {
            for (const key of Object.keys(value)) {
              let params = propName + "[" + key + "]";
              subPart = encodeURIComponent(params) + "=";
              url += subPart + encodeURIComponent(value[key]) + "&";
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      if (index == 0) {
        // requestEncrypt.encrypt(config, "");
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    } else if (config.method === "post" && config.data) {
      // console.log("data参数==》", config.data, typeof config.data);
      // if (typeof config.data === "string"){
      //   config.data = JSON.parse(config.data)
      // }
      if (typeof config.data === "object") {
        for (const propName of Object.keys(config.data)) {
          if (config.data[propName]) {
            if (typeof config.data[propName] == "string") {
              if (config.data[propName] != undefined) {
                config.data[propName] = config.data[propName].trim();
              } else {
                delete config.data.propName;
              }
            }
            if (
              propName == "queryJson" &&
              typeof config.data[propName] == "object"
            ) {
              if (config.data[propName] != undefined) {
                config.data[propName] = JSON.stringify(config.data[propName]);
              } else {
                delete config.data.propName;
              }
            }
          }
        }
      }
      if (index == 0) {
        // requestEncrypt.encrypt(config, "");
      }
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    //其中一个标签页退出登陆，回到另一个标签页刷新
    document.addEventListener("visibilitychange", function () {
      //浏览器切换事件
      if (document.visibilityState == "hidden") {
        //离开当前tab标签
      } else {
        if (!getToken()) {
          location.reload();
        }
      }
    });
    //白名单 不用做处理直接返回数据
    var whiteList = ["/office/function/checkFunction"];
    var checkFormula = ["/office/wsPayroll/checkFormula"];
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    var urlFlag = false;
    var checkFormulaFlag = false;
    var url = res.config.url;
    //判断是否存在白名单中
    for (var i = 0; i < whiteList.length; i++) {
      if (url.indexOf(whiteList[i]) != -1) {
        urlFlag = true;
      }
    }
    for (var index = 0; index < checkFormula.length; index++) {
      if (url.indexOf(checkFormula[index]) != -1) {
        checkFormulaFlag = true;
      }
    }
    //存在白名单中直接返回数据
    if (urlFlag || checkFormulaFlag) {
      if (urlFlag) {
        return res.data;
      } else {
        return res.data;
      }
    } else if (
      code === 401 ||
      (code === 500 && res.data.msg == "登录状态已过期")
    ) {
      if (checkErrorTime()) {
        Message({
          message: "登录状态已过期，请重新登录",
          type: "error",
          dangerouslyUseHTMLString: true,
        });
        setTimeout(() => {
          //需要定时执行的代码
          store.dispatch("LogOut").then(() => {
            // 钉钉
            // if (getChannel() == "PC_DD") {
            //   console.log(sessionStorage, "钉钉超时获取到的session");
            //   let corpId = sessionStorage.getItem("corpId");
            //   console.log(corpId, "钉钉超时后获取到的企业Id");
            //   location.href =
            //     "https://app105354.eapps.dingtalkcloud.com/authorizeLogin?corpId=" +
            //     corpId;
            //   // 企业微信
            // } else if (getChannel() == "PC_QYWX") {
            //   location.href =
            //     "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwb64bb5b7c6be3010&redirect_uri=https://app105354.eapps.dingtalkcloud.com/qiyeWxLogin&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            // } else {
            location.href = "/permance";
            // }
          });
        }, 3000);
      }
    } else if (code === 500) {
      if (checkErrorTime()) {
        if (res.config.error != null) {
          return Promise.reject(msg);
          // res.config.error(msg);
        } else {
          Message({
            message: msg,
            type: "error",
            dangerouslyUseHTMLString: true,
          });
        }
      }
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      if (checkErrorTime()) {
        Notification.error({
          title: msg,
        });
      }
      return Promise.reject("error");
    } else {
      return res.data;
    }
  },
  (error) => {
    console.log("err" + error);
    if (checkErrorTime()) {
      let { message } = error;
      if (message == "Network Error") {
        message = "后端接口连接异常";
      } else if (message.includes("timeout")) {
        message = "系统接口请求超时";
      } else if (message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
      }
      Message({
        message: message,
        type: "error",
        duration: 5 * 1000,
      });
    }
    return Promise.reject(error);
  }
);

let errorData = {};
function checkErrorTime() {
  let nowTime = new Date().getTime();
  let isMessage = true;
  if (errorData.lastErrorTime) {
    isMessage = nowTime - errorData.lastErrorTime > 2000;
  }
  errorData.lastErrorTime = nowTime;
  return isMessage;
}

//通用下载方法
export function download(url, params, filename) {
  return service
    .post(url, params, {
      transformRequest: [
        (params) => {
          return tansParams(params);
        },
      ],
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      responseType: "blob",
    })
    .then((data) => {
      const content = data;
      const blob = new Blob([content]);
      if ("download" in document.createElement("a")) {
        const elink = document.createElement("a");
        elink.download = filename;
        elink.style.display = "none";
        elink.href = URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href);
        document.body.removeChild(elink);
      } else {
        navigator.msSaveBlob(blob, filename);
      }
    })
    .catch((r) => {
      console.error(r);
    });
}

export default service;
