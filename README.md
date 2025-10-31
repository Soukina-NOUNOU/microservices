# microservices

Test with insomnia:

GET http://localhost:5000/users/1 = Alice
```
{
	"id": 1,
	"name": "Alice"
}
```

GET http://localhost:5001/orders/1 = Alice order : 
```
[
	{
		"id": 101,
		"item": "Livre"
	},
	{
		"id": 102,
		"item": "Stylo"
	}
]
```

GET http://localhost:5001/orders/99 = error: "Utilisateur inconnu"
```
{
	"error": "Utilisateur inconnu"
}
```