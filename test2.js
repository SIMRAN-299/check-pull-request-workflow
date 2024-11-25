async function SharedflowCreationNDeployment(){
    try{
            // await fetchRevision().then((result)=>console.log(result));
            await fetchRevision().then((result)=>console.log());
            await deploy();
    }
    catch(e){
            console.log(e);
    }
}

async function fetchRevision(){
    try{
        await p1();
        await p11();
        await p111();
        
    }
    catch(e){
        throw e;
        
    }
}
function fetchRevision2(){
    
        return p1().catch((error)=>{
            console.error("proxy not found");
            return {error: 'Proxy revision not found'}
        })
        
    
    
}
async function deploy(){
    try{
        return await p2();
    }
    catch(e){
        throw e;
       
    }

}

function p1(){
    return new Promise((resolve,reject)=>{
        if(1===1){
            
            resolve("success p1");
        }
        else{
            reject("failed p1")
        }
    })
}
function p11(){
    return new Promise((resolve,reject)=>{
        if(1===2){
            
            resolve("success p11");
        }
        else{
            reject("failed p11")
        }
    })
}
function p111(){
    return new Promise((resolve,reject)=>{
        if(1===2){
            
            resolve("success p111");
        }
        else{
            reject("failed p111")
        }
    })
}
function p2(){
    return new Promise((resolve,reject)=>{
        if(1===2){
            console.log("success p2");
            resolve("success p2");
        }
        else{
            reject("failed p2")
        }
    })
}

SharedflowCreationNDeployment();
