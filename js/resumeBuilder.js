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
	"skills": {
		"programmingLanguages": ["Python","Java","PHP","SQL","Swift"],
		"experienceWith": ["Agile/Scrum","Drupal"],
		"applications": ["Eclipse","GitHub","MySQL"],
		"operatingSystems": ["Mac OSX","Windows","Linux","iOS"]
	}
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
			"description": "did some good code stuff"
		},
		{
			"employer": "Acquia Inc.",
			"title": "Software Engineering Intern",
			"location": "Boston, MA",
			"dates": "Summer 2015",
			"description": "did some neat code stuff"
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
			"images": ["images/fry.jpg","images/fry.jpg"],
			"githubRepo": "GitHub Repository"
		}
	]
};

/*
	
	Add display function to Bio object

*/
bio.display = function() {
	// Add name and role to top of page
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	// Add contact info below name header
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	// Add picture to resume
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

	// Add Welcome line
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	// Add start skills message
	$("#header").append(HTMLskillsStart);

	// Add skills to their respective skill sets
	$("#skills").append(HTMLskillSets.replace("%data%", "Programming Languages: "));
	var languagesString = bio.skills.programmingLanguages.join(", ");
	$("#skills").append(HTMLskills.replace("%data%", languagesString));

	$("#skills").append(HTMLskillSets.replace("%data%", "Experience With: "));
	var experienceWithString = bio.skills.experienceWith.join(", ");
	$("#skills").append(HTMLskills.replace("%data%", experienceWithString));

	$("#skills").append(HTMLskillSets.replace("%data%", "Applications: "));
	var applicationsString = bio.skills.applications.join(", ");
	$("#skills").append(HTMLskills.replace("%data%", applicationsString));

	$("#skills").append(HTMLskillSets.replace("%data%", "Oporating Systems: "));
	var oporatingSystemsString = bio.skills.operatingSystems.join(", ");
	$("#skills").append(HTMLskills.replace("%data%", oporatingSystemsString));
}


/*

	Add display function to work object

*/
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		// get place of work and title and append to web page
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formmattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);



		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formmattedDescription);
	}
}

/*

	Add display function to education object

*/
education.display = function() {

}

/*

	Add display function to projects object

*/
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		// get project attributes
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		// edit this in helper.js so that is shows as a link rather than a string
		var formattedGitURL = HTMLprojectGitURL.replace("%data%", projects.projects[project].githubRepo);
		$(".project-entry:last").append(formattedGitURL);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

/*

	Add google map to pinpoint the locations where I live and work

*/
//$("#mapDiv").append(googleMap);


/*

	click tracker function

*/
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


/*
	
	Call Functions and buils web page

*/
bio.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap)

