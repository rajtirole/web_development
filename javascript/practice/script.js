let nums = [1,2,3,4]
// let num=[nums[0]]
// // num.push()
// let total=nums[0]
// for (let i=1; i<nums.length; i++){
//     total=total+nums[i];
//     num[i]=total;
// }
// let total1=nums.reduce((total,value,index)=>{
//     // console.log(value);
//     // console.log(total);

//     if(index==0){
//         return total;
//     }
//     total=total+value;
//     num.push(total)
//     return total
// },nums[0])
// console.log(num);
// let num=[]

// let num1=nums.reduce((total,value,index)=>{
//     console.log(total);
//     num.push(total)
//     return total+value;
// },nums[0])
// console.log(num);

// let prices =[1,2,3,4,5]
// let discount=[];
// for (let i=0; i<prices.length; i++) {
//     let k=0;
//     for(let j=i+1; j<prices.length; j++) {
//         if(prices[j]<=prices[i]){
//            k=prices[j];
//            break; 
//         }
//     }
//     discount.push(prices[i]-k)
// }
// console.log(discount);
nums = [2,5,1,3,4,7];
n = 3;
k=0;
let arr=[]
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
        arr.push(nums[k])
        k++;
        }
        else{
            arr.push(nums[n])
            n++;
        }
        
    }
    console.log(arr);