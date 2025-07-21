const { Router } = require("express")

const router = Router();

const data = {
  courses: [
    {
      course_id: 1,
      brief_name: "Intro to Programming",
      official_name: "Introduction to Programming with Python",
      academic_year_name: "2025/2026",
      semester_name: "Fall",
      study_program_names: ["Computer Science BSc"],
      responsible_institute_name: "Institute of Informatics",
      track_names: ["Software Engineering"],
      allocation_not_finished: false,
      mode: "Full-time",
      year: 1,
      form: "Lecture",
      lecture_hours: 30,
      lab_hours: 15,
      groups_needed: 3,
      groups_taken: 2,
      pi: {
        allocation_status: "assigned",
        profile_data: {
          profile_id: 1001,
          name_eng: "Dr. Alice Johnson",
          alias: "alice.j",
          email: "alice.johnson@university.edu",
          position_name: "Associate Professor",
          institute_names: ["Institute of Informatics"],
          classes: ["CS101", "CS102"]
        }
      },
      ti: {
        allocation_status: "unassigned",
        profile_data: {}
      },
      tas: [
        {
          profile_data: {
            profile_id: 2001,
            name_eng: "John Smith",
            alias: "johns",
            email: "john.smith@university.edu",
            position_name: "PhD Student",
            institute_names: ["Institute of Informatics"],
            classes: ["CS101"]
          }
        }
      ]
    },
    {
      course_id: 2,
      brief_name: "Data Structures",
      official_name: "Advanced Data Structures and Algorithms",
      academic_year_name: "2025/2026",
      semester_name: "Spring",
      study_program_names: ["Computer Science BSc", "Software Engineering BSc"],
      responsible_institute_name: "Department of Computer Science",
      track_names: ["Algorithms and Complexity"],
      allocation_not_finished: true,
      mode: "Full-time",
      year: 2,
      form: "Lab",
      lecture_hours: 25,
      lab_hours: 20,
      groups_needed: 2,
      groups_taken: 1,
      pi: {
        allocation_status: "pending",
        profile_data: {
          profile_id: 1002,
          name_eng: "Prof. Michael Brown",
          alias: "m.brown",
          email: "michael.brown@university.edu",
          position_name: "Professor",
          institute_names: ["Department of Computer Science"],
          classes: ["CS201"]
        }
      },
      ti: {
        allocation_status: "assigned",
        profile_data: {
          profile_id: 3001,
          name_eng: "Dr. Emma White",
          alias: "emmaw",
          email: "emma.white@university.edu",
          position_name: "Lecturer",
          institute_names: ["Department of Computer Science"],
          classes: ["CS201", "CS202"]
        }
      },
      tas: [
        {
          profile_data: {
            profile_id: 2002,
            name_eng: "Lucas Gray",
            alias: "lucasg",
            email: "lucas.gray@university.edu",
            position_name: "MSc Student",
            institute_names: ["Department of Computer Science"],
            classes: ["CS201"]
          }
        },
        {
          profile_data: {
            profile_id: 2003,
            name_eng: "Sofia Green",
            alias: "sofiag",
            email: "sofia.green@university.edu",
            position_name: "PhD Student",
            institute_names: ["Department of Computer Science"],
            classes: ["CS201"]
          }
        }
      ]
    },
    {
      course_id: 3,
      brief_name: "AI Foundations",
      official_name: "Foundations of Artificial Intelligence",
      academic_year_name: "2025/2026",
      semester_name: "Fall",
      study_program_names: ["AI Engineering MSc"],
      responsible_institute_name: "AI Research Institute",
      track_names: ["Artificial Intelligence"],
      allocation_not_finished: false,
      mode: "Part-time",
      year: 1,
      form: "Lecture and Lab",
      lecture_hours: 20,
      lab_hours: 25,
      groups_needed: 1,
      groups_taken: 1,
      pi: {
        allocation_status: "assigned",
        profile_data: {
          profile_id: 1003,
          name_eng: "Dr. Linda Black",
          alias: "lindab",
          email: "linda.black@university.edu",
          position_name: "Senior Researcher",
          institute_names: ["AI Research Institute"],
          classes: ["AI101"]
        }
      },
      ti: {
        allocation_status: "assigned",
        profile_data: {
          profile_id: 3002,
          name_eng: "Dr. Robert Stone",
          alias: "roberts",
          email: "robert.stone@university.edu",
          position_name: "Lecturer",
          institute_names: ["AI Research Institute"],
          classes: ["AI101"]
        }
      },
      tas: []
    }
  ]
}

router.get("/getCourseList", (req, res) => {
  res.status(200).json(data)
});

module.exports = router