const { Router } = require("express");

const router = Router();

router.get("/course", (req, res) => {
    res.status(200).json({
        "filters": {
          "allocaion_not_finished": true,
          "academic_year": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "semester": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "study_program": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "institute": [
            {
              "id": 0,
              "name": "string"
            }
          ]
        }
      })
});

router.get("/profile", (req, res) => {
    res.status(200).json({
      "filters": {
        "institute": [
          {
            "id": 23,
            "name": "filter of institutes 1"
          },
          {
            "id": 24,
            "name": "filter of institutes 2"
          }
        ],
        "position": [
          {
            "id": 23,
            "name": "position filter name 1"
          },
          {
            "id": 24,
            "name": "position filter name 2"
          }
        ]
      }
    }
    )
  })

module.exports = router;