// Bio object to hold basic information about me
var bio = {
	"name": "James W Utt",
	"role": "4th year student at Elon University",
	"contacts": {
		"mobile": "978-944-2203",
		"email": "jwu3ma@gmail.com",
		"github": "jwutt3",
		"location": "Boston, MA"
	},
	"bioPic": "images/me.jpg",
	"welcomeMessage": "Hello!",
	"skills": ["Master of all 4 elements", "guac making", "beer tasting", "Catching them ALL!"]
};

// Education object to hold data about my college education and other courses
var education = {
	"schools": [
		{
			"name": "Elon University",
			"location": "Elon, NC",
			"degree": "Bachelor of Science",
			"majors": ["Computer Science"],
			"minors": ["Applied Mathematics", "Physics"],
			"dates": "2013 - 2017"
		}
	],
	"onlineCourses": [
		{
			"title": "Complete Python Masterclass",
			"school": "udemy",
			"date": "In Progress",
			"url": "https://www.udemy.com"
		},
		{
			"title": "Python for Data Science and Machine Learning Bootcamp",
			"school": "udemy",
			"date": "In Progress",
			"url": "https://www.udemy.com"
		}
	]
};

// Work objuect to hold data about previous or current work experience
var work = {
	"jobs": [
		{
			"employer": "Acquia Inc.",
			"title": "Engineering Intern",
			"location": "Boston, MA",
			"dates": "Summer 2016",
			"description": "did some code stuff"
		}
	]
};

// Projects object to store data about any personal projects I have worked on or am currently working on
var projects = {
	"projects": [
		{
			"title": "Resume Website",
			"dates": "2017",
			"description": "I learned JavaScript to be able to build a dynamic website featuring my resume for potential employers",
			"images": ["images/me.jpg","images/fry.jpg"],
			"githubRepo": "insert url for github repository"
		}
	]
};

// Add name and role to top of page
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name))

// Add contact info below name header
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email))
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github))
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location))

// Add picture to resume
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic))

// Add Welcome line
$("#header")


// Add skills list to resume
// if(bio.skills.length > 0) {
// 	$("#header").append(HTMLskillsStart);
// 	for (var i = 0; i < bio.skills.length; i++) {
// 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
// 		$("#skills").append(formattedSkill);
// 	}
	
// }

