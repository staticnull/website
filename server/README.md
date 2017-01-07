# MidwestJS API Server
Grails 3.2.4 with rest profile

## Setup
Create db tables

```
psql -f setup.sql
```

Run the [migrations](https://grails-plugins.github.io/grails-database-migration/3.0.x/index.html)
```
grails dbm-update
```

## Call for Papers

Example cfp submission
```
curl -X POST -H "Content-Type: application/json" -d '{
	"fullName": "",
	"email": "",
	"bio": "",
	"twitter": "",
	"github": "",
	"employer": "",
	"talks": [
		{
			"title": "",
			"talkAbstract": ""
		},
		{
			"title": "",
			"talkAbstract": ""
		}
	]
}' "http://localhost:8080/api/cfp/"
```