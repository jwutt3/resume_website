// var name = "Jame W Utt";
// var role = "4th year student at Elon University";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

//var skills = ["being the best","master of all 4 elements"];
//$("#main").append(skills);

var bio = {
	"name": "James",
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

var education = {
	"schools": [
		{
			"name": "",
			"location": "",
			"degree": "",
			"majors": [""],
			"minors": ["", ""],
			"dates": ""
		}
	],
	"onlineCourses": [
		{
			"title": "",
			"school": "",
			"date": "",
			"url": ""
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "",
			"title" : "",
			"location" : "",
			"dates" : "",
			"description" : ""
		}
	]
};

var projects = {};

// Add data to index.html by replacing strings from helper.js and appending them to index.htlm
//$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
//$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
//$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));