```javascript
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: '$field', count: {$sum: 1}}},
  {$project: { _id: 1, count: 1, field: { $ifNull: [ '$field', 'null' ] } } }, // Handle null values
  {$sort: {count: -1}},
  {$limit: 10}
])
```