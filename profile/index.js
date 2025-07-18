const { Router } = require('express');

const router = Router();

const user = {
  "name_eng": "Fyodor Markin",
  "name_ru": "Маркин Фёдор Сергеевич",
  "alias": "@meld_i",
  "email": "f.markin@innopolis.university",
  "position": "Intern TA",
  "institute": "Институт разработки ПО и программной инженерии",
  "workload": 0.7,
  "student_type": "MS1",
  "degree": true,
  "fsro": "employnment",
  "languages": [
    {
      "language": "Russian"
    }
  ],
  "courses": [
    {
      "id": "course_instance_id"
    }
  ],
  "employnment_type": "Combination of positions",
  "hiring_status": "??",
  "mode": "remote",
  "max_load": 40,
  "frontal_hours": 40,
  "extra_activities": 1.5,
  "workload_stats": {
    "t1": {
      "lec_hours": 134,
      "tut_hours": 123,
      "lab_hours": 123,
      "elective_hours": 123,
      "rate": 123
    },
    "t2": {
      "lec_hours": 134,
      "tut_hours": 123,
      "lab_hours": 123,
      "elective_hours": 123,
      "rate": 123
    },
    "t3": {
      "lec_hours": 134,
      "tut_hours": 123,
      "lab_hours": 123,
      "elective_hours": 123,
      "rate": 123
    },
    "total": {
      "lec_hours": 134,
      "tut_hours": 123,
      "lab_hours": 123,
      "elective_hours": 123,
      "rate": 123
    }
  }
}


router.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).send('Not Found');
  return res.json(user)
});

router.get('/getAllProfiles/', (req, res) => {
  res.json({
    profiles: new Array(10).fill(user).map((user, index) => ({ ...user, profile_id: index })),
  })
})

router.post('/addProfile/', (req, res) => {
  const user = req.body;
  if (!user) { 
     return res.status(502).json({ message: 'cant create user' });
  }
  console.log(user);
  return res.json({
    message: 'User added successfully',
  })
});

router.get("/filters", (req, res) => {
  res.json({
    "filters": {
      "institute": [
        {
          "id": 23,
          "name": "institute_filter_name"
        }
      ],
      "position": [
        {
          "id": 23,
          "name": "position_filter_name"
        }
      ]
    }
  }
  )
})

module.exports = router;