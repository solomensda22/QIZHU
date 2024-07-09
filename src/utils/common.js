import { getToken } from '@/utils/auth';
// 日期格式化
export function convertCurrency(money) {
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if (money == '') {
    return '';
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    for (var item = 0; item < decLen; item++) {
      var num = decimalNum.substr(item, 1);
      if (num != '0') {
        chineseStr += cnNums[Number(num)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  // console.log("=========>"+chineseStr);
  return chineseStr;
}

export function getRepeatToken() {
  var authTokent = getToken();
  var date = new Date();
  if (authTokent != null) {
    return authTokent + ':' + date.getHours() + date.getMinutes() + date.getSeconds();
  } else {
    var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < 6; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString + ':' + date.getTime();
  }
}
//特殊字符间获取中间内容 text原内容 type 特殊字符
export function getIntercept(text, type) {
  var newText = text.split('');
  var flag;
  var obj = [];
  var j = 0;
  for (var i = 0; i < newText.length; i++) {
    if (flag && newText[i] == type) {
      flag = false;
      j++;
      continue;
    }
    if (!flag && newText[i] == type) {
      flag = true;
      continue;
    }
    if (flag) {
      obj[j] = obj[j] ? obj[j] + newText[i] : newText[i];
    }
  }
  // console.log('obj', Object.values(obj));
  return obj;
}
// 字典
export function getDictById(dictArr, dictItemId) {
  try {
    let result = '';
    let dictItem = {};
    dictItem =
      dictArr.find((e) => {
        return e.dictValue == dictItemId;
      }) || {};
    result = dictItem.dictLabel ? dictItem.dictLabel : dictItemId;
    return result;
  } catch (err) {
    return dictItemId;
  }
}
