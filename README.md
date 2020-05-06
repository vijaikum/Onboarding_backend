# onboarding-application-service
Service to fetch the customer details from the backend MongoDB

Pre- requiste
node - lastest version

1. Clone the project [cd to the directory]

2. npm install

3. npm start

End points
User End Points
---------------

1. Authentication

URI http://localhost:3000/user/auth
Method - post
 
Request body - ex
-------------
{
        "userId": "Boris",
        "password": "Stupid"
}

Resonse
-------
{
    "authenticated": "true"
}
**roles & token yet to be added to the response

Customers End Points
--------------------
1. To create new customer

URI - http://localhost:3000/customers
Method - post

Request body - ex
-------------

{
	"custId": "897121212",
	"custName":"dummy - 2",
	"businessType":"Logistics",
	"Status":"In Progress",
	"Purpose":"Trade",
	"RMTeam":"Trade Segment",
	"PEP":"No",
	"AnnualTurnOver":"234,888",
	"EstimateTurnOver":"898,765"
}
**custId should be auto generated in future

2. To get all customers

URI - http://localhost:3000/customers
Method - get

Response Structure

[
    {
        "_id": "5eb1d05812107c1ec3ef3ae9",
        "custName": "dummy",
        "businessType": "Trasportation",
        "Status": "In Progress",
        "Purpose": "Trade",
        "RMTeam": "Trade Segment",
        "PEP": "No",
        "AnnualTurnOver": "234,888",
        "EstimateTurnOver": "898,765",
        "__v": 0
    },
    {
        "_id": "5eb1d18e2c13d81ed37ea428",
        "custName": "dummy - 2",
        "businessType": "Logistics",
        "Status": "In Progress",
        "Purpose": "Trade",
        "RMTeam": "Trade Segment",
        "PEP": "No",
        "AnnualTurnOver": "234,888",
        "EstimateTurnOver": "898,765",
        "__v": 0
    }
 ]
