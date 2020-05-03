const express = require("express");
const router = express.Router();
//Web scraping data
const rp = require("request-promise");
let url = "https://www.hackerrank.com/";
const $ = require("cheerio");

router.get("/:id", (req, res) => {
  id = req.params.id;
  url = url + id;

 rp(url).then(function (html) {
      
      let name = $("h1.profile-heading", html).text();
      const badgeType = [];
      const stars = [];
      if (name!="")  {
        $(".badges-list > .hacker-badge .badge-title", html).each(function () {
            let bt = $(this).text();
            if (bt.toLowerCase() == "days of code") {
              bt = "30 " + bt;
            }
            if (bt.toLowerCase() == "days of js") {
              bt = "10 " + bt;
            }
    
            badgeType.push(bt);
          });
          let sum = 0;
          $(".star-section", html).each(function (i, e) {
            
            star=e.children[0].children.length
            sum+=star
            stars.push(star);
          });
            let badges = {};
            badgeType.forEach((e, i) => {
            badges[e.toString()] = stars[i];
            });
            
            let mainInfo = {};
            
            mainInfo.status="OK"
            mainInfo.name = name;
            mainInfo.badges = badges;
            // stars.forEach((e) => {
            // sum += e;
            // });
            mainInfo.totalBadges = badgeType.length;
            mainInfo.totalStars = sum;
            res.send(mainInfo);
            
      }
      else{
          res.send({status:"ERROR",message:"No Such User Exists"})
      }
      url = "https://www.hackerrank.com/";
       // return [name, badgeType, stars];
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
