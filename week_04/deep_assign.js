/**
 * Created by hep on 15.06.16.
 */
function assignKey (dst, src) {
  var src_keys = Object.keys(src);
  var dst_keys = Object.keys(dst);
  for (i in src_keys) {
    var key = src_keys[i];
    if (src[key] instanceof Object && dst.hasOwnProperty(key) && dst[key] instanceof Object) {
      assignKey(dst[key], src[key]);
    } else {
      dst[key] = src[key];
    }
  }
  return dst;
}

function deepAssign (target) {
  if(target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  for(var i=1; i < arguments.length; i++) {
    var obj = arguments[i];
    if(obj == undefined || obj === null) return;
    assignKey(target, obj);
  }
  return target;
}
