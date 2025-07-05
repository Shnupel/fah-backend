const { Router } = require('express');

const router = Router();

const user = {
  "nameEng": "Fyodor Markin",
  "nameRu": "Маркин Фёдор Сергеевич",
  "alias": "@meld_i",
  "email": "f.markin@innopolis.university",
  "position": "Intern TA",
  "institute": "Институт разработки ПО и программной инженерии",
  "workload": 0.7,
  "studentType": "MS1",
  "degree": true,
  "FSRO": "employnment",
  "languages": [
    {
      "language": "Russian"
    }
  ],
  "courses": [
    {
      "id": "courseInstance_id"
    }
  ],
  "employnmentType": "Combination of positions",
  "hiringStatus": "??",
  "mode": "remote",
  "maxLoad": 40,
  "frontalHours": 40,
  "extraActivities": 1.5,
  "workloadStats": {
    "uniteStat": [
      {
        "id": "T1",
        "classes": {
          "lec": 1,
          "tut": 2,
          "lab": 3,
          "elec": 4,
          "rate": 5
        }
      }
    ],
    "total": {
      "totalLec": 1,
      "totalTut": 2,
      "totalLab": 3,
      "totalElec": 12,
      "totalRate": 12
    }
  }
}

router.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).send('Not Found');
  return res.json(user)
});

router.get('/getAllUsers/', (req, res) => {
  res.json({
    data: new Array(10).fill(user).map((user, index) => ({ ...user, id: index })),
  })
})

router.post('/addUser/', (req, res) => {
  const user = req.body;
  if (!user) { 
     return res.status(404).send('Not Found');
  }
  console.log(user);
  return res.json({
    message: 'User added successfully',
  })
});

module.exports = router;