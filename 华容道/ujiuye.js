/* 
  获取元素样式
  ele：元素
  attr：样式
*/
function getStyle(ele, attr) {
  if (window.getComputedStyle) {
    return getComputedStyle(ele)[attr]
  } else {
    return ele.currentStyle[attr]
  }
}

/* 
  函数运动
  ele：元素
  attr：样式
  sped：步长
  target：目标值
*/
var timer = null

function move(ele, attr, sped, target) {
  clearInterval(timer)
  sped = parseInt(getStyle(ele, attr)) < target ? sped : -sped
  timer = setInterval(function () {
    var start = parseInt(getStyle(ele, attr)) + sped
    if ((start >= target && sped > 0) || (start <= target && sped < 0)) {
      start = target
      clearInterval(timer)
    }
    ele.style[attr] = start + 'px'
  }, 16)
}

/* 
  创建节点
  nodeName：要添加的节点名称
  nodeValue：要添加的节点内容
*/
function addNode(nodeName, nodeValue) {
  var element = document.createElement(nodeName)
  element.innerHTML = nodeValue
  return element
}

/* 
  事件绑定
  ele：触发事件的元素
  type：事件类型
  fun：要执行的函数
*/
function on(ele, type, fun) {
  if (ele.addEventListener) { //有值，说明支持这个方法
    ele.addEventListener(type, fun)
  } else {
    ele.attachEvent('on' + type, fun)
  }
}

/* 
  缓冲函数运动
  ele：元素
  json：对象形式的样式。例{'width':500,'opacity':100}
  fn：回调函数
*/
function bufferMove(ele, json, fn) {
  clearInterval(ele.timer)
  ele.timer = setInterval(function () {
    var flag = true
    for (var attr in json) {
      if (attr == 'opacity') {
        var cur = parseFloat(getStyle(ele, attr)) * 100
      } else {
        var cur = parseInt(getStyle(ele, attr))
      }
      var speed = (json[attr] - cur) / 10
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
      if (cur != json[attr]) {
        flag = false
      }
      if (attr == 'opacity') {
        ele.style[attr] = (cur + speed) / 100
      } else {
        ele.style[attr] = cur + speed + 'px'
      }
    }
    if (flag == true) {
      clearInterval(ele.timer)
      fn && fn()
    }
  }, 5)
}


/* 
  Ajax请求
  url：路径地址
  method：请求方式
  data：数据
  success：回调函数，用来接收数据
*/
function ajax(url, method, data, success) {
  var xhr = new XMLHttpRequest()
  if (method == 'get') {
    if (data) {
      url += '?' + data
    }
    xhr.open(method, url)
    xhr.send()
  } else {
    xhr.open(method, url)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    if (data) {
      xhr.send(data)
    } else {
      xhr.send()
    }
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        success(xhr.responseText)
      }
    }
  }
}