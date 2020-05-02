const rp = require('request-promise');
const hid=document.getElementById('hid')
const getData=document.getElementById('submit')
const id=""
getData.addEventListener('click',e=>{
    
})
const url = 'https://www.hackerrank.com/bharatrathore13';
const $ = require('cheerio');
let userInfo={}
let badgeInfo={}

let returned=rp(url)
  .then(function(html){
    //success!
     let name=$('h1.profile-heading',html).text();
     
    const badgeType=[]
    const stars=[]
    
    $('.badges-list > .hacker-badge .badge-title',html).each(function(){
       let bt=$(this).text();
       if (bt.toLowerCase()=="days of code"){
           bt='30 '+bt
       }
       if (bt.toLowerCase()=="days of js"){
        bt='10 '+bt
    }
       
        badgeType.push(bt)
    })
    $('.star-section',html).each(function(i,e){
        //console.log("----------------------------------------")

        stars.push(e.children[0].children.length)
    })
    return [name,badgeType,stars]
  })
  .catch(function(err){



    //handle error
  });

returned.then(body=>{
    let badges={}
    body[1].forEach((e,i)=>{
        badges[e.toString()]=body[2][i]
    })
    //console.log(badges)
let mainInfo={}
let sum=0;
mainInfo.name=body[0]
mainInfo.badges=badges
body[2].forEach(e=>{sum+=e})
mainInfo.totalBadges=body[1].length
mainInfo.totalStars=sum
console.log(mainInfo)
})
//console.log(name)