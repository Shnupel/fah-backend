const { Router } = require('express');

const router = Router();

const user = {
  "year": 0,
  "name_eng": "string",
  "name_ru": "string",
  "alias": "string",
  "email": "string",
  "position_name": "string",
  "institute_names": [
    "string"
  ],
  "student_type": "string",
  "degree": true,
  "fsro": "string",
  "languages": [
    {
      "language_code": "string"
    }
  ],
  "employnment_type": "string",
  "hiring_status": "string",
  "mode": "string",
  "max_load": 0,
  "frontal_hours": 0,
  "extra_activities": 0,
  "workload_stats": {
    "t1": {
      "lec_hours": 0,
      "tut_hours": 0,
      "lab_hours": 0,
      "elective_hours": 0,
      "rate": 0
    },
    "t2": {
      "lec_hours": 0,
      "tut_hours": 0,
      "lab_hours": 0,
      "elective_hours": 0,
      "rate": 0
    },
    "t3": {
      "lec_hours": 0,
      "tut_hours": 0,
      "lab_hours": 0,
      "elective_hours": 0,
      "rate": 0
    },
    "total": {
      "lec_hours": 0,
      "tut_hours": 0,
      "lab_hours": 0,
      "elective_hours": 0,
      "rate": 0
    }
  }
}

const simpleUser = {
  profile_id: 0,
  name_eng: "string",
  alias: "string",
  email: "string",
  position_name: "string",
  institute_names: [
    "string"
  ]
}

const simpleUsers = {
  profiles: new Array(10).fill(simpleUser).map((user, i) => ({ ...user, profile_id: i }))
}

const users = {
  profiles: new Array(10).fill(user).map((user, index) => ({ ...user, profile_id: index })),
}

router.get('/getProfile/:id', (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).send('Not Found');
  return res.json(user)
});


router.get('/getAllProfiles/', (req, res) => {
  res.json(simpleUsers);
})

router.post('/addProfile/', (req, res) => {
  const user = req.body;
  if (!user) {
     return res.status(502).json({ message: 'cant create user' });
  }
  console.log(user);

  const _user = {
    profile_id: 123,
    name_eng: user.name_eng,
    email: user.email,
    alias: user.alias,
    institute_names: ["ist1", "inst2"],
    position_name: "positions name here"
  }

  simpleUsers.profiles = [_user, ...simpleUsers.profiles];

  return res.json(_user)
});

module.exports = router;