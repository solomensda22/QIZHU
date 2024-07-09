// 加法
export function accAdd(arg1, arg2,pointWs) {
	if (isEmpty(arg1)) {
		arg1 = "0";
	}
	if (isEmpty(arg2)) {
		arg2 = "0";
	}
    var r1, r2, max;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    max = Math.pow(10, Math.max(r1, r2));
    if (isEmpty(pointWs)) {
    	return ((arg1 * max + arg2 * max) / max) + "";
    } else {
    	if (isEmpty(arg1)) {
    		arg1 = 0;
    	}
    	if (isEmpty(arg2)) {
    		arg2 = 0;
    	}
    	arg1 = parseFloat(arg1);
    	arg2 = parseFloat(arg2);
    	return fomatFloat((arg1 + arg2), pointWs);
    }
    
}

// 减法
export function accSub(arg1, arg2,pointWs) {
	if (isEmpty(arg1)) {
		arg1 = "0";
	}
	if (isEmpty(arg2)) {
		arg2 = "0";
	}
    var r1, r2, max, min;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    max = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    min = (r1 >= r2) ? r1 : r2;
    if (isEmpty(pointWs)) {
    	return ((arg1 * max - arg2 * max) / max);
    } else {
    	if (isEmpty(arg1)) {
    		arg1 = 0;
    	}
    	if (isEmpty(arg2)) {
    		arg2 = 0;
    	}
    	arg1 = parseFloat(arg1);
    	arg2 = parseFloat(arg2);
    	return fomatFloat((arg1 - arg2), pointWs);
    }
}

// 乘法
// pointWs:小数点位数
export function accMul(arg1, arg2, pointWs) {
	if (isEmpty(arg1)) {
		arg1 = "0";
	}
	if (isEmpty(arg2)) {
		arg2 = "0";
	}
    var max = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { max += s1.split(".")[1].length } catch (e) { }
    try { max += s2.split(".")[1].length } catch (e) { }
    var resData = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, max);
    if(!isEmpty(pointWs)) {
    	if (isEmpty(arg1)) {
    		arg1 = 0;
    	}
    	if (isEmpty(arg2)) {
    		arg2 = 0;
    	}
    	
    	arg1 = parseFloat(arg1);
    	arg2 = parseFloat(arg2);
    	// 四舍五入
    	return fomatFloat(arg1 * arg2, pointWs);
    }
    return resData + "";
}

// 除法
//pointWs:小数点位数
export function accDivFun(arg1, arg2, pointWs) {
	if (isEmpty(arg1)) {
		arg1 = "0";
	}
	if (isEmpty(arg2)) {
		arg2 = "0";
	}
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
	r1 = Number(arg1.toString().replace(".", ""))
	r2 = Number(arg2.toString().replace(".", ""))
	var resData = (r1 / r2) * Math.pow(10, t2 - t1);
	if(!isEmpty(pointWs)) {
		if (isEmpty(arg1)) {
			arg1 = 0;
		}
		if (isEmpty(arg2)) {
			arg2 = 0;
		}
		arg1 = parseFloat(arg1);
		arg2 = parseFloat(arg2);
		// 四舍五入
		return fomatFloat(arg1/arg2, pointWs);
	}
	return resData + "";
}


//判断是否为空
export function isEmpty(str) {
	if(str == 'undefined' || str == "" || str == null || str == "null") {
		return true;
	}
	return false;
}


export function fomatFloat(num,n){
	if (isEmpty(n)) {
		n = 2;
	}
    var f = parseFloat(num);
    if(isNaN(f)){
        return num;
    } 
    var start = "";
	if (f < 0) {
		start = "-";
	}
	f = Math.abs(f);
    f = Math.round(f*Math.pow(10, n))/Math.pow(10, n); // n 幂   
    var s = f.toString();
    var rs = s.indexOf('.');
    //判定如果是整数，增加小数点再补0
    if(rs < 0){
        rs = s.length;
        s += '.'; 
    }
    while(s.length <= rs + n){
        s += '0';
    }
    s = start + s;
    return s;
}