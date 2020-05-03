# HackerRank-Badges-API
Web app to fetch HackerRank dashboard details which returns the name of the user along with [HackerRank](https://www.hackerrank.com/) **Badges** details

## API details
* **Hostname:** https://hackerrank-badges.herokuapp.com
----
* **Endpoint:** /api/{hacker-rank-id}
* **Request (GET):** https://hackerrank-badges.herokuapp.com/api/bharatrathore13
* **Output:**
 ```json
{   
	"status":"OK",
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
* **Status**
	* OK: For successfully fetching info of mentioned id.
	* ERROR: Invalid ID or url params, check message for more info.
	```json
	{
		"status":"ERROR",
	 	"message":"You have entered invalid url please enter hostname/api/{hacker-rank-id}"
	}
	```
	```json
	{
		"status":"ERROR",
		"message":"No Such User Exists"
	}
	```


