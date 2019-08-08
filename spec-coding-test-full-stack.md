# Invg Test. Implementation Test
Instruction for coding test. Fullstack developer profile

Related to [main document](https://github.com/pablogottifredi/invg-coding-test/Readme.md)

## Goals
Write here

## Spec

### Test 1 . Build an api Restful with the next enpoints:
* Over the model ***incidents.by.helpdeks*** provide a GET operation with next parameters:
    - helpdesk_id: Mandatory. Reference to a helpdesk ID to filter
    - text_to_search: Optional. An string to search inside ticket body. The text info are in ***incidents*** model
    - detailed: Optional. 0 (onlyid) 1 (fulldetailed)

    Rules
    >    Filter text according field ***incidents.description*** using a %like%

    >    Detailed 0 return only incidents.id field filled

    >    Detailed 1 return full incidents fields filled


* Over the model ***incidents.by.helpdeks*** provide a GET operation with next parameters:
    - helpdeks_id: Optional. Reference to a helpdesk ID to filter
    
    Rules
    >   Return top 5 of most searched string by id

    >   If helpdeks_id is null or undefined, return top 5 most key searched globaly

    >   Propose a database to persist key searched

You can access to a live api endpoint in [this link](https://webdemo.cloud.invgate.net/api/v1)
You can use the follow key credentials:
``` 
user: apiuser
token: <the key provided>
``` 
There are an endpoint to get the incidents.by.helpdeks by id
```
- usage incidents.by.helpdesk?helpdesk_id=ID
$ curl -X GET https://apiuser:<the key provided>@webdemo.cloud.invgate.net/api/v1/incidents.by.helpdesk?helpdesk_id=11
```

Response the follow data
```
{
    "status":"OK",
    "info":"Returned a list of the requests related to the given help desk(s)",
    "requestIds":["143","206","276","294","296","297","301","323","345","346","347","348","349","351","106","133","140","182","183","219","220","302","339","136","179","199","295","300","308","320","336","344","4","139","144]
}
```

then you can usage the incident?id enpoint (206 is and ID of previous request)
```
- usage incident?id=206
$ curl -X GET https://apiuser:<the key provided>@webdemo.cloud.invgate.net/api/v1/incident?id=206
```

Response:
```
{
    "id":"206",
    "title":"Screen broken",
    "category_id":"11",
    "description":"<p>Hi my laptop fell from my desk. The screen is broken.<\/p>\r\n",
    "priority_id":"1",
    "user_id":"12",
    "creator_id":"12",
    "assigned_id":null,
    "assigned_group_id":"11",
    "date_ocurred":"1409931780",
    "source_id":"2",
    "status_id":"1",
    "type_id":"1",
    "created_at":"1409931849",
    "last_update":"1409931850",
    "process_id":null,
    "solved_at":null,
    "closed_at":null,
    "closed_reason":null,
    "data_cleaned":null,
    "attachments":[

    ]
}
```

### Test 2. Provide an User Interface to write the text to search and get helpdesk tickets

* Rules & behaviors
    >   Put a helpdeks ID and GET a detailed list of incident according that category
    
    >   Filter over result in UI

### Test 3. Propose a solution to improve the performance
If the category have too many tickets, propose a solution to improve the performance. Only comment
