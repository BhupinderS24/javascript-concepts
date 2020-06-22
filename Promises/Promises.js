var isCheck=false;

let promisesExample=new Promise(function(resolve,reject){
if(isCheck){
    resolve("True");
}
else{
    reject("False");
}
});

promisesExample.then(function(dataFromResolve){
    console.log(dataFromResolve);
}).catch(function(dataFromReject){
    console.log(dataFromReject);
});
//Fetch Promises
//http://localhost:8080/zversal/auth
// let fetchPromises=fetch('https://api.github.com/users/swapnilbangare');
// let responsePromise=fetchPromises.then(response=>{
//     console.log(response);
//     console.log(fetchPromises);
//     // for (var pair of response.headers.entries()) {
//     //     console.log(pair[0]+ ': '+ pair[1]);
//     //  }
//     // console.log(response.type);
//      return response.json();
//     }).catch((error)=>{console.log("ERROR"+error);
//     console.log(fetchPromises)});


    // fetchPromises.catch((error)=>{console.log("ERROR"+error);
    // console.log(fetchPromises)});


    //let jsonData= responsePromise.then(json=>{console.log(json)});
    
//Chaining
// fetch('https://api.github.com/users/swapnilbangare')
// .then(response=>{
//     console.log(response);
//     console.log(fetchPromises);
//     // for (var pair of response.headers.entries()) {
//     //     console.log(pair[0]+ ': '+ pair[1]);
//     //  }
//      console.log(response.type);
//      return response.json();
//     })
//     .then(json=>{console.log(json);})
//     .catch((error)=>{console.log("ERROR"+error)});



   // console.log(response.headers.get());});
//responsePromise.then(j=>console.log(j));

//Headers Object 

// let reqHeader = new Headers();
// reqHeader.append('Content-Type', 'text/json');
// let meta = {
//     method: 'GET', headers: reqHeader,
// };

// fetch('https://api.github.com/users/swapnilbangare',meta)
//       .then(response=>response.json())
//       .then(json=>console.log(json))
//       .catch(err=>console.log("Something went wrong",err));

//Request Object

// let reqHeader2 = new Headers();
// reqHeader2.append('Content-Type', 'text/json');

// let initObject2 = {
//     method: 'GET', headers: reqHeader2, mode:'cors'
// };

// var userRequest = new Request('https://api.github.com/users/swapnilbangare', initObject2);
// fetch(userRequest)
//       .then(response=>response.json())
//       .then(json=>console.log(json))
//       .catch(err=>console.log("Something went wrong",err));


//Response Types ---- Cors , Basic , Opaque


