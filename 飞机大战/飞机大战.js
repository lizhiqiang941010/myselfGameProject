var timer = null
var sum = 0  //分数
var target = 1 // 我方伤害

//玩家飞机部分
//拖动飞机

var wrap = document.getElementById('wrap')
var a = wrap.onmousemove = function (ev) {
    ev = window.event || ev
    var x = ev.clientX - 57
    var y = ev.clientY - 46.5

    if (x < 0) {
        x = 0
    }
    if (x > 1400) {
        x = 1400
    }
    if (y < 2) {
        y = 2
    }
    if (y > 600) {
        y = 600
    }
    $('#plane').css({
        'top': y,
        'left': x
    })


}

//自己的子弹
var timerzj = setInterval(function(){
    if(sum<10000){
        setTimeout(function () {
            var em = $('<em></em>')
            var left = $('#plane').css('left')
            var left = parseFloat(left)
            var top = $('#plane').css('top')
            em.appendTo($('#wrap'))
            em.css({
                'left': left + 53,
                'top': top
            })
            em.animate({
                'top': -200
            }, 2000, 'linear')
            var em = document.getElementsByTagName('em')
            for (i = 0; i < em.length; i++) {
        
                if (parseFloat(em[i].style.top) == -200) {
                    em[i].remove()
                }
            }
        
        }, 100)
    }else if(sum>10000 && sum<20000){
        setTimeout(function () {
            var em = $('<em></em>')
            var left = $('#plane').css('left')
            var left = parseFloat(left)
            var top = $('#plane').css('top')
            em.appendTo($('#wrap'))
            em.css({
                'left': left + 43,
                'top': top
            })
            em.animate({
                'top': -200
            }, 2000, 'linear')
            var em = document.getElementsByTagName('em')
            for (i = 0; i < em.length; i++) {
        
                if (parseFloat(em[i].style.top) == -200) {
                    em[i].remove()
                }
            }
        
        }, 100)
        setTimeout(function () {
            var em = $('<em></em>')
            var left = $('#plane').css('left')
            var left = parseFloat(left)
            var top = $('#plane').css('top')
            em.appendTo($('#wrap'))
            em.css({
                'left': left + 63,
                'top': top
            })
            em.animate({
                'top': -200
            }, 2000, 'linear')
            var em = document.getElementsByTagName('em')
            for (i = 0; i < em.length; i++) {
        
                if (parseFloat(em[i].style.top) == -200) {
                    em[i].remove()
                }
            }
        
        }, 100)
    }else{
        setTimeout(function () {
            var em = $('<em></em>')
            var left = $('#plane').css('left')
            var left = parseFloat(left)
            var top = $('#plane').css('top')
            em.appendTo($('#wrap'))
            em.css({
                'left': left + 43,
                'top': top
            })
            em.animate({
                'top': -200
            }, 2000, 'linear')
            var em = document.getElementsByTagName('em')
            for (i = 0; i < em.length; i++) {
        
                if (parseFloat(em[i].style.top) == -200) {
                    em[i].remove()
                }
            }
        
        }, 100)
       setTimeout(function () {
            var em = $('<em></em>')
            var left = $('#plane').css('left')
            var left = parseFloat(left)
            var top = $('#plane').css('top')
            em.appendTo($('#wrap'))
            em.css({
                'left': left + 53,
                'top': top
            })
            em.animate({
                'top': -200
            }, 2000, 'linear')
            var em = document.getElementsByTagName('em')
            for (i = 0; i < em.length; i++) {
        
                if (parseFloat(em[i].style.top) == -200) {
                    em[i].remove()
                }
            }
        
        }, 100)
        setTimeout(function () {
            var em = $('<em></em>')
            var left = $('#plane').css('left')
            var left = parseFloat(left)
            var top = $('#plane').css('top')
            em.appendTo($('#wrap'))
            em.css({
                'left': left + 63,
                'top': top
            })
            em.animate({
                'top': -200
            }, 2000, 'linear')
            var em = document.getElementsByTagName('em')
            for (i = 0; i < em.length; i++) {
        
                if (parseFloat(em[i].style.top) == -200) {
                    em[i].remove()
                }
            }
        
        }, 100)
    }
   
},100)


//敌机
function enemy1() {
    var enemy = $('<div class="enemy"></div>')
    enemy.attr('value', 1)
    enemy.appendTo($('#wrap'))
    enemy.css({
        'top': -200,
        'left': Math.random() * 1400
    })
    enemy.animate({ 'top': 800 }, 4000)
    var reenemy = document.getElementsByClassName('enemy')

    for (i = 0; i < reenemy.length; i++) {
        if (parseFloat(reenemy[i].style.top) == 800) {
            reenemy[i].remove()
        }
    }
}
function enemy2() {
    var enemy = $('<div class="enemy"></div>')
    enemy.attr('value', 3)
    enemy.appendTo($('#wrap'))
    enemy.css({
        'top': -200,
        'left': Math.random() * 1400,
        'background-position': '-246px 0'
    })
    enemy.animate({ 'top': 800 }, 3000)
    var reenemy = document.getElementsByClassName('enemy')

    for (i = 0; i < reenemy.length; i++) {
        if (parseFloat(reenemy[i].style.top) == 800) {
            reenemy[i].remove()
        }
    }
}
//敌机3号，带子弹功能

function enemy3() {
    var enemy = $('<div class="enemy"></div>')
    enemy.attr('value', 4)
    enemy.appendTo($('#wrap'))
    enemy.css({
        'top': -200,
        'left': Math.random() * 1400,
        'background-position': 'right 0'
    })
    //敌机子弹 
    setInterval(function () {
        if (enemy.attr('value') > 0) {
            setTimeout(function () {
                var b = $('<b></b>')
                var left = $(enemy).css('left')
                var left = parseFloat(left)
                var top = $(enemy).css('top')
                var bottom = parseFloat(top) + 93
                b.appendTo($('#wrap'))
                b.css({
                    'left': left + 51,
                    'top': bottom
                })
                b.animate({
                    'top': 900
                }, 1000, 'linear')
                var b = document.getElementsByTagName('b')
                for (i = 0; i < b.length; i++) {

                    if (parseFloat(b[i].style.top) >= 900) {
                        b[i].remove()
                    }
                }

            }, 1000)
        }

    }, 1000)




    enemy.animate({ 'top': 800 }, 9000, 'linear')
    var reenemy = document.getElementsByClassName('enemy')

    for (i = 0; i < reenemy.length; i++) {
        if (parseFloat(reenemy[i].style.top) == 800) {
            reenemy[i].remove()
        }
    }
}

//4号boss飞机,带散射子弹
var num =30
function enemy4() {
    var enemy = $('<div class="enemy"></div>')
    num = num + 30
    enemy.attr('value', num)
    enemy.appendTo($('#wrap'))
    enemy.css({
        'top': -200,
        'left': Math.random() * 1400,
        'background-position': '-114px 0'
    })
    //敌机子弹 
    setInterval(function () {
        if (enemy.attr('value') > 0) {
            setTimeout(function () {
                var b = $('<b></b>')
                var left = $(enemy).css('left')
                var left = parseFloat(left)
                var top = $(enemy).css('top')
                var bottom = parseFloat(top) + 93
                b.appendTo($('#wrap'))
                b.css({
                    'left': left + 41,
                    'top': bottom
                })
                b.animate({
                    'top': 800
                }, 1000, 'linear')
                var b = document.getElementsByTagName('b')
                for (i = 0; i < b.length; i++) {

                    if (parseFloat(b[i].style.top) >= 800) {
                        b[i].remove()
                    }
                }

            }, 1000)
        }

    }, 300)
    setInterval(function () {
        if (enemy.attr('value') > 0) {
            setTimeout(function () {
                var b = $('<b></b>')
                var left = $(enemy).css('left')
                var left = parseFloat(left)
                var top = $(enemy).css('top')
                var bottom = parseFloat(top) + 93
                b.appendTo($('#wrap'))
                b.css({
                    'left': left + 51,
                    'top': bottom
                })
                b.animate({
                    'top': 800
                }, 1000, 'linear')
                var b = document.getElementsByTagName('b')
                for (i = 0; i < b.length; i++) {

                    if (parseFloat(b[i].style.top) >= 800) {
                        b[i].remove()
                    }
                }

            }, 1000)
        }

    }, 300)
    setInterval(function () {
        if (enemy.attr('value') > 0) {
            setTimeout(function () {
                var b = $('<b></b>')
                var left = $(enemy).css('left')
                var left = parseFloat(left)
                var top = $(enemy).css('top')
                var bottom = parseFloat(top) + 93
                b.appendTo($('#wrap'))
                b.css({
                    'left': left + 61,
                    'top': bottom
                })
                b.animate({
                    'top': 800
                }, 1000, 'linear')
                var b = document.getElementsByTagName('b')
                for (i = 0; i < b.length; i++) {

                    if (parseFloat(b[i].style.top) >= 800) {
                        b[i].remove()
                    }
                }

            }, 1000)
        }

    }, 300)


    enemy.animate({ 'top': 100 }, 1000).animate({ 'left': 24 }, Math.random() * 2000 + 1000, function right() {
        enemy.animate({ 'left': 1200 }, Math.random() * 4000 + 1000, function left() {
            enemy.animate({ 'left': 24 }, Math.random() * 2000 + 1000, right())
        })
    })
    var reenemy = document.getElementsByClassName('enemy')

    for (i = 0; i < reenemy.length; i++) {
        if (parseFloat(reenemy[i].style.top) == 650) {
            reenemy[i].remove()
        }
    }
}
//控制出现频率
setInterval(enemy1, 2000)
setInterval(enemy2, 3000)
setInterval(enemy3, 4000)
//预期设置为boss的飞机
setInterval(enemy4, 30000)


// 我方子弹碰撞检测
function fn1() {
    var em = document.getElementsByTagName('em')
    var enemy = document.getElementsByClassName('enemy')
    for (i = 0; i < em.length; i++) {
        for (j = 0; j < enemy.length; j++) {
            if (em.length > i && enemy.length > j) {
                if (parseFloat(em[i].style.top) < (parseFloat(enemy[j].style.top) + 93)
                    && parseFloat(em[i].style.left) > parseFloat(enemy[j].style.left)
                    && (parseFloat(em[i].style.left) + 3) < (parseFloat(enemy[j].style.left) + 114)
                ) {
                   
                    em[i].remove()
                    var num = $(enemy).eq(j).attr('value')
                    $(enemy).eq(j).attr('value', num - target)

                    if (num <= 0) {
                        $(enemy).eq(j).css({
                            'background-image': 'url(./img/qw.png)',
                            'background-size': '126px 96px'
                        })
                        bufferMove(enemy[j], { 'opacity': 0 })
                        if (parseFloat(enemy[j].style.opacity) == 0) {
                            sum = sum+100
                            $('#sroce').html(sum)
                            enemy[j].remove()
                        }
                    }

                }
            }

        }
    }

}
setInterval(fn1, 1)
//敌机子弹碰撞检测
function fn2() {
    var b = document.getElementsByTagName('b')
    var plane = document.getElementById('plane')
    for (i = 0; i < b.length; i++) {
        if (b.length > i) {
            if ((parseFloat(b[i].style.top) + 10) > parseFloat(plane.style.top)
                && parseFloat(b[i].style.left) > parseFloat(plane.style.left)
                && (parseFloat(b[i].style.left) + 3) < (parseFloat(plane.style.left) + 114)
                &&(parseFloat(b[i].style.top)) < (parseFloat(plane.style.top)+93)) {
                b[i].remove()
               
                    $('#plane img').attr('src','./img/qw.png')
                    bufferMove(plane, { 'opacity': 0 })
                    if (parseFloat(plane.style.opacity) == 0) {
                       plane.remove()
                    }
                
                clearInterval(timerzj)
            }
        }

    }
}
var dijizidan =setInterval(fn2, 1)


$('#sroce1').click(function(){
   var text = prompt('请输入你的银行卡密码')
   if(text != ''){
       alert('哈哈！骗你的，你随便输入什么都行，欢迎体验飞机大战，要是发现bug记得和我说，下面是真的：1为子弹增强，2为直接秒杀敌机，3为无敌')
   }
   var text1 = prompt('请输入你的想要的秘籍只能是1，2，3')
   if(text1 == 1){
       sum = 20000
   }else if(text1 == 2){
        target = 999
   }else if(text1 == 3){
        clearInterval(dijizidan)
   }
})
