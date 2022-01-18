let item = document.getElementsByClassName('item');
let wintitle = document.getElementsByClassName('wintitle')[0];
let wall = document.getElementsByClassName('wall')[0];
// 检查获胜的函数 ---- 水平直线判断
function levelLineWin(arr){
    if(arr.length>=5) {
        let winArr=[];
        for(let i=0; i<arr.length; i++) {
            winArr=[]; 
            winArr.push(arr[i])
            // 获取棋子高度
            let height = item[arr[i]].offsetTop
            for(let j=0; j<arr.length;j++) {
                if(arr[i]+1==arr[j] || arr[i]+2==arr[j] || arr[i]+3==arr[j] || arr[i]+4==arr[j]) {
                    winArr.push(arr[j])
                }
            } 
            // 保证所有棋子是同一行
            let heightFlag = winArr.every((index)=>{
                return item[index].offsetTop == height
            })
            // 有5个棋子连续且它们处于同一行的时候说明获胜
            if(winArr.length==5 && heightFlag){
                return true;
              
            }
        }
    }
    
}
// 检查获胜的函数 ---- 垂直直线判断
function verticalLineWin(arr){
    if(arr.length>=5) {
        let winArr=[];
        for(let i=0; i<arr.length; i++) {
            winArr=[]; 
            winArr.push(arr[i])
            for(let j=0; j<arr.length;j++) {
                if(arr[i]+15==arr[j] || arr[i]+30==arr[j] || arr[i]+45==arr[j] || arr[i]+60==arr[j]) {
                    winArr.push(arr[j])
                }
            } 
            // 有5个棋子连续的时候说明获胜
            if(winArr.length==5){
                return true;
              
            }
        }
    }
    
}
// 检查获胜的函数 ---- 右斜判断
function rightDiagonalLineWin(arr){
    if(arr.length>=5) {
        let winArr=[];
        for(let i=0; i<arr.length; i++) {
            winArr=[]; 
            winArr.push(arr[i])
            for(let j=0; j<arr.length;j++) {
                if(arr[i]+16==arr[j] || arr[i]+32==arr[j] || arr[i]+48==arr[j] || arr[i]+64==arr[j]) {
                    winArr.push(arr[j])
                }
            } 
            // 有5个棋子连续的时候说明获胜
            if(winArr.length==5){
                return true;
              
            }
        }
    }
    
}
// 检查获胜的函数 ---- 左斜判断
function leftDiagonalLineWin(arr){
    if(arr.length>=5) {
        let winArr=[];
        for(let i=0; i<arr.length; i++) {
            winArr=[]; 
            winArr.push(arr[i])
            for(let j=0; j<arr.length;j++) {
                if(arr[i]+14==arr[j] || arr[i]+28==arr[j] || arr[i]+42==arr[j] || arr[i]+56==arr[j]) {
                    winArr.push(arr[j])
                }
            } 
            // 保证所有棋子是不同一行
            let heightArr = winArr.map((index)=>{
                return item[index].offsetTop 
            })
            for(let a=0;a<heightArr.length;a++){
                for(let b=a+1; b<heightArr.length;b++){
                    if(heightArr[a]==heightArr[b]){
                        heightArr.splice(b,1);
                        b--;
                    }
                }
            }
            // 有5个棋子连续且它们是不同行的时候说明获胜
            if(winArr.length==5 && heightArr.length==5){
                return true;
              
            }
        }
    }
    
}
let object= {
    run:true, // true表示白子执行，flase表示黑子执行
    white:{
        arr:[],
    },
    black:{
        arr:[]
    }
}
for(let i=0;i<item.length; i++) {
    // 鼠标移入
    item[i].onmouseover = function(){
      // 白子执行中
      if(object.run){
        // 检查已经落子的位置，不能取消背景颜色
        let flagWhite = object.white.arr.some((item)=>{
        return item == i;
        })
        let flagBlack =  object.black.arr.some((item)=>{
        return item == i;
        })
        if(!flagWhite && !flagBlack){
            item[i].style.background='white';
        }    
        // 点击落白子
        item[i].onclick = function(){
          object.white.arr.push(i);
          object.run = !object.run;
          if(levelLineWin(object.white.arr) || verticalLineWin(object.white.arr) || rightDiagonalLineWin(object.white.arr) || leftDiagonalLineWin(object.white.arr)) {
            
              wall.style.display='block'
              wintitle.innerHTML='白子获胜'
          }
        }
      }else{
        // 黑子执行中
         // 检查已经落子的位置，不能取消背景颜色
         let flagWhite = object.white.arr.some((item)=>{
            return item == i;
         })
         let flagBlack =  object.black.arr.some((item)=>{
            return item == i;
         })
         if(!flagWhite && !flagBlack){
            item[i].style.background='black';
         } 
        // 点击落黑子
        item[i].onclick = function(){
          object.black.arr.push(i);
          object.run = !object.run;
          if(levelLineWin(object.black.arr) || verticalLineWin(object.black.arr) || rightDiagonalLineWin(object.black.arr) || leftDiagonalLineWin(object.black.arr)) {
         
            wall.style.display='block'
            wintitle.innerHTML='黑子获胜'
        }
        }  
      }
    
        
    }
    // 鼠标移出
    item[i].onmouseout = function(){
      // 检查已经落子的位置，不能取消背景颜色
      let flagWhite = object.white.arr.some((item)=>{
          return item == i;
      })
      let flagBlack =  object.black.arr.some((item)=>{
        return item == i;
      }) 
      if(!flagWhite && !flagBlack){
        item[i].style.background= '';
      } 
    
        
    }
}


