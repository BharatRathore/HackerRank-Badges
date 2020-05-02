# HackerRank-Badges-API
Web app to fetch HackerRank dashboard details which returns the name of the user along with [HackerRank](https://www.hackerrank.com/) **Badges** details

## API details
* **Hostname:** https://hackerrank-badges.herokuapp.com
----
* **Endpoint:** /api/:hacker-rank-id
* **Request (GET):** https://hackerrank-badges.herokuapp.com/api/bharatrathore13
* **Output:**
 ```json
{
    "name":"Bharat Rathore",
    "badges":{
        "Problem Solving":3,
        "CPP":5,
        "10 Days of JS":4,
        "Sql":5
    },
    "totalBadges":4,
    "totalStars":17
}
```


