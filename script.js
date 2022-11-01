// var p1= new Promise((resolve,reject)=>{
//     if(true){
//       setTimeout((i)=>{
//         resolve=1
//         for(var i=10;i>=resolve;i--)
//      console.log(i)
//     },3000)
//     }
//     else
//     {
//       setTimeout(()=>{
//         reject("1");
//       },1500);
//     }
    
// //     });
//     var p2= new Promise((resolve,reject)=>{
//         if(true){
//           setTimeout(()=>{
//             resolve("9");
//           },1000);
//         }
//         else
//         {
//           setTimeout(()=>{
//             reject("9");
//           },1500)
//         }
//         });
//         var p3= new Promise((resolve,reject)=>{
//             if(true){
//               setTimeout(()=>{
//                 resolve("8 ");
//               },2000);
//             }
//             else
//             {
//               setTimeout(()=>{
//                 reject("9");
//               },1500)
//             }
//             });
//             var p4= new Promise((resolve,reject)=>{
//                 if(true){
//                   setTimeout(()=>{
//                     resolve("7 ");
//                   },3000);
//                 }
//                 else
//                 {
//                   setTimeout(()=>{
//                     reject("9");
//                   },1500)
//                 }
//                 });
//                 var p5= new Promise((resolve,reject)=>{
//                     if(true){
//                       setTimeout(()=>{
//                         resolve("6");
//                       },4000);
//                     }
//                     else
//                     {
//                       setTimeout(()=>{
//                         reject("9");
//                       },1500)
//                     }
//                     });
//                     var p6= new Promise((resolve,reject)=>{
//                         if(true){
//                           setTimeout(()=>{
//                             resolve("5 ");
//                           },5000);
//                         }
//                         else
//                         {
//                           setTimeout(()=>{
//                             reject("9");
//                           },1500)
//                         }
//                         });
//                         var p7= new Promise((resolve,reject)=>{
//                             if(true){
//                               setTimeout(()=>{
//                                 resolve("4 ");
//                               },6000);
//                             }
//                             else
//                             {
//                               setTimeout(()=>{
//                                 reject("9");
//                               },1500)
//                             }
//                             });
//                             var p8= new Promise((resolve,reject)=>{
//                                 if(true){
//                                   setTimeout(()=>{
//                                     resolve("3 ");
//                                   },7000);
//                                 }
//                                 else
//                                 {
//                                   setTimeout(()=>{
//                                     reject("9");
//                                   },1500)
//                                 }
//                                 });
//                                 var p9= new Promise((resolve,reject)=>{
//                                     if(true){
//                                       setTimeout(()=>{
//                                         resolve("2 ");
//                                       },8000);
//                                     }
//                                     else
//                                     {
//                                       setTimeout(()=>{
//                                         reject("9");
//                                       },1500)
//                                     }
//                                     });
//                                     var p10= new Promise((resolve,reject)=>{
//                                         if(true){
//                                           setTimeout(()=>{
//                                             resolve("1 ");
//                                           },9000);
//                                         }
//                                         else
//                                         {
//                                           setTimeout(()=>{
//                                             reject("9");
//                                           },1500)
//                                         }
//                                         });
//                                         var p11= new Promise((resolve,reject)=>{
//                                             if(true){
//                                               setTimeout(()=>{
//                                                 resolve("happy new year ");
//                                               },10000);
//                                             }
//                                             else
//                                             {
//                                               setTimeout(()=>{
//                                                 reject("9");
//                                               },1500)
//                                             }
//                                             });
                                            
//          Promise.all([p2,p1,p3,p4,p5,p6,p7,p8,p9,p10,p11]).then((data)=>console.log(data)).catch((error)=>console.log(error));

// var div=dcument.createElement("div");
// div.setAttribute("class","align-center")
// button=document.createElement("button");
// button.se
// button.i

// function mul(number){
//     return new Promise((resolve, reject) =>setTimeout(()=>{
//         resolve(number-1)
//     },1000));
// }

// mul(11)
// .then((data)=>{
//     console.log(data);
//     return mul(data)
// }).then((data1)=>{
//     console.log(data1);
//     return mul(data1)
// }).then((data2)=>{
//     console.log(data2);
//     return mul(data2)
// }).then((data3)=>{
//     console.log(data3);
//     return mul(data3)
// }).then((data4)=>{
//     console.log(data4)
// return mul(data4)
// }).then((data5)=>{
//     console.log(data5);
//     return mul(data5)
// }).then((data6)=>{
//     console.log(data6);
//     return mul(data6)
// }).then((data7)=>{
//     console.log(data7);
//     return mul(data7)
// }).then((data8)=>{
//     console.log(data8);
//     return mul(data8)
// }).then((data9)=>{
//     console.log(data9);
//     return mul(data9)
// }).then((data10)=>{
//     console.log(data10);
//     return mul(data10)
// }).then((data11)=>{
//     console.log("HAPPY NEW YEAR");
//     return mul().catch((error)=>console.log(error))
// })

// foo()
// console.log(foo)

let timer = document.getElementById("count");
setTimeout(()=>{
    timer.innerText = "10";
    setTimeout(()=>{
        timer.innerText = "9";
        setTimeout(()=>{
            timer.innerText = "8";
            setTimeout(()=>{
                timer.innerText = "7";
                setTimeout(()=>{
                    timer.innerText = "6";
                    setTimeout(()=>{
                        timer.innerText = "5";
                        setTimeout(()=>{
                            timer.innerText = "4";
                            setTimeout(()=>{
                                timer.innerText = "3";
                                setTimeout(()=>{
                                    timer.innerText = "2";
                                    setTimeout(()=>{
                                        timer.innerText = "1";
                                        setTimeout(()=>{
                                            timer.innerText = "0";
                                            setTimeout(()=>{
                                                timer.innerText = "Happy Independence Day!!";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)