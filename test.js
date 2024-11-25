async function fun(){
    try{
        await p1().then(res=>console.log(res));
        await p2().then(res=>console.log(res));
        await p3().then(res=>console.log(res));
        await p4().then(res=>console.log(res));
    }
    catch(err){
        console.log(err);
    }
}

function p1(){
    return new Promise((resolve,reject)=>
        {
            if('1'==='1'){
                resolve("hello Simran")
            }
            else{
                reject("simran1 error");
            }
        }
    )
}
function p2(){
    return new Promise((resolve,reject)=>
        {
            const data = 1;
            if(1===1){
                resolve(data)
            }
            else{
                reject("err2");
            }
        }
    )
}
function p3(){
    return new Promise((resolve,reject)=>
        {
            if(1===1){
                resolve("hello Simran3")
            }
            else{
                reject("err3");
            }
        }
    )
}
async function p4(){
    if(1===1){
        return ("hello Simran3")
    }
    else{
        return ("err3");
    }
}
fun();
