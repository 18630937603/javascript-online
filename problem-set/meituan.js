// 如果景点不相连，那么要怎么走过去呢？这里我就先假设走不过去了

let n = 3;
let beauty_value = [1,3,2];
let paths = [1,2];

let res = new Array(n).fill(0);

// 邻接矩阵
let map = new Array(n).fill(0).map(item=> new Array(n).fill(0))
for(let i=0;i<n-1;i++){
    map[i][paths[i]] = 1;
    map[paths[i]][i] = 1;
}

for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
        let index = most_beautiful_scene(i,j)
        res[index] += 1
    }
}

function most_beautiful_scene(start,end){

    if(start===end){
        return start
    }else if(map[start][end]===1){
        return beauty_value[start] > beauty_value[end] ? start : end;
    }else{
        let start_beauty_value = beauty_value[start]
        let max_beauty_value = beauty_value[start];
        let next = -1

        let control_flag = 1  // 用来判断还有没有下一步能走的路径
        let pass_end = 0   // 寻路是否最终能找到终点
        while(control_flag){
            control_flag = 0;
            map[start].forEach((item,index)=>{
                if(item==1 && index > start){
                    next = index
                    max_beauty_value = Math.max(max_beauty_value,beauty_value[next])
                    control_flag = 1
                    start = next
                    if(next === end){
                        pass_end = 1
                        control_flag = 0;
                    }
                }
            })
        }
        return pass_end? beauty_value.indexOf(max_beauty_value) : beauty_value.indexOf(start_beauty_value)
    }
}

console.log(res)
