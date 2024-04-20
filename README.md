
# Webnotes Backend API

Engineered a custom REST API to support CRUD operations, facilitating efficient management and interaction with note content. Implemented secure authentication using JSON Web Tokens (JWT) to ensure user confidentiality. Developed with Node.js and Express, integrated with MongoDB for robust data storage. Seamlessly complements the Webnotes Chrome Extension for comprehensive note management capabilities.


## API Reference

### Get all Note

```bash
  GET /api/notes/fetchallnotes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth Token` | `string` | **Required**. Your auth Token|

#### Output:
* Status Code : 200 OK

* Response : 

```json
  [
  {
    "_id": "6623584db5d9df29bf555af2",
    "user": "65ae01003ad34da60b09178b",
    "title": "My title 2",
    "description": "Please wake up early 2",
    "tag": "Eduction",
    "date": "2024-04-20T05:53:17.813Z",
    "__v": 0
  },
  {
    "_id": "662359ebb5d9df29bf555af5",
    "user": "65ae01003ad34da60b09178b",
    "title": "My title",
    "description": "Please wake up early",
    "tag": "Eduction",
    "date": "2024-04-20T06:00:11.649Z",
    "__v": 0
  }
]

```
<hr>

### Add a Note

```bash
  POST /api/notes/addnote
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth Token` | `string` | **Required**. Your auth Token|

#### Output:
* Status Code : 200 OK

* Body : 
```json 
{
  "title": "My title",
  "description" : "Please wake up early",
  "tag" : "Eduction"
}
```
* Response : 

```json
  {
    "user": "65ae01003ad34da60b09178b",
    "title": "My title 2",
    "description": "Please wake up early 2",
    "tag": "Eduction",
    "_id": "6623584db5d9df29bf555af2",
    "date": "2024-04-20T05:53:17.813Z",
    "__v": 0
}
```

****

### Delete a Note

```bash
  DELETE /api/notes/deletenote/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Output:
* Status Code : 200 OK

* Response : 

```json
  {
    "Success": "Note has been deleted",
    "note": {
        "_id": "662359ebb5d9df29bf555af5",
        "user": "65ae01003ad34da60b09178b",
        "title": "My title",
        "description": "Please wake up early",
        "tag": "Eduction",
        "date": "2024-04-20T06:00:11.649Z",
        "__v": 0
  }
}
```
****

### Edit a Note

```bash
  PUT /api/notes/updatenote/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Output:
* Status Code : 200 OK

* Body :
```json
{
  "title": "My title updated",
  "description" : "Please wake up early updated",
  "tag": "General"
} 
``` 

* Response : 

```json
  {
    "note": {
        "_id": "6623584db5d9df29bf555af2",
        "user": "65ae01003ad34da60b09178b",
        "title": "My title updated",
        "description": "Please wake up early updated",
        "tag": "General",
        "date": "2024-04-20T05:53:17.813Z",
        "__v": 0
    }
}

```

