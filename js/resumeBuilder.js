// Bio object to hold basic information about me
var bio = {
	"name": "James W Utt",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "978-944-2203",
		"email": "jwu3ma@gmail.com",
		"github": "jwutt3",
		"location": "Boston, MA"
	},
	"bioPic": "images/me.jpg",
	"welcomeMessage": "Hello, I am a soon to be college graduate currently seeking employment as a software engineer.",
	"skills": {
		"programmingLanguages": ["Python","Java","PHP","SQL","C","Swift","Ruby","Go","HTML/CSS","RobotC","XML","Prolog"],
		"experienceWith": ["Object Oriented Programming","Agile/Scrum","Git","JSON","Drupal","MySQL","REST","NumPy","Pandas","Web Development","MVC design patterns","Spring MVC","servlets/JSPs","Version Control","Debuggers","class structures & inheritance"],
		"applications": ["Eclipse","GitHub","MySQL","GitHub","Jupyter Notebook","PhpStorm","NetBeans","Particle.io","XCode","Sublime Text","Apache Tomcat","Red Hat Openshift","Microsoft Office"],
		"operatingSystems": ["Mac OSX","Windows","Linux","iOS"]
	}
};

// Education object to hold data about my college education and other courses
var education = {
	"schools": [
		{
			"name": "Elon University",
			"location": "Elon, NC",
			"degree": "BS",
			"majors": ["Computer Science"],
			"minors": ["Applied Mathematics", "Physics"],
			"dates": "2013 - 2017",
			"website": "https://www.elon.edu/home/"
		}
	],
	"onlineCourses": [
		{
			"title": "Complete Python Masterclass",
			"school": "Udemy",
			"date": "In Progress",
			"url": "https://www.udemy.com/python-the-complete-python-developer-course/learn/v4/overview"
		},
		{
			"title": "Python for Data Science and Machine Learning Bootcamp",
			"school": "Udemy",
			"date": "In Progress",
			"url": "https://www.udemy.com/python-for-data-science-and-machine-learning-bootcamp/learn/v4/overview"
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
			"dates": "June 2016 - August 2016",
			"website": "https://www.acquia.com/",
			"description": "I worked on features and bug fixes, making overall improvements to Acquia's Content Hub product. I actively participated in an Agile development environment completing two week sprints."
		},
		{
			"employer": "Acquia Inc.",
			"title": "Engineering Intern",
			"location": "Boston, MA",
			"dates": "October 2015 - January 2016",
			"website": "https://www.acquia.com/",
			"description": "I wrote bash scripts to indentify and solve backend constraints to Acquia's products. I also worked on bug fixes and improvements to the products Acquia is building."
		},
		{
			"employer": "Acquia Inc.",
			"title": "Software Engineering Intern",
			"location": "Boston, MA",
			"dates": "May 2015 - August 2015",
			"website": "https://www.acquia.com/",
			"description": "I built and improved tools that team members can use to streamline and automate certain aspects of the development lifecycle."
		}
	]
};

// Projects object to store data about any personal projects I have worked on or am currently working on
var projects = {
	"projects": [
		{
			"title": "Resume Website",
			"dates": "2017",
			"description": "Using Udacity's JavaScrip Basics course I learned basic JavaScript syntax, which includes, manipulating data types (like JSON), building loops and creating functions in order to create a website for my resume.",
			"images": [],
			"githubRepo": "https://github.com/jwutt3/resume_website"
		}
	]
};

/*
	
	Add display function to Bio object

*/
bio.display = function() {
	// Add name and role to top of page
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderResume)
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
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].website);
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
	// Loop through colleges
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		// get education.schools values; NOTE: currently no way to display minors
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].website);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);

		var formattedMinors = HTMLschoolMinors.replace("%data%", education.schools[school].minors.join(", "));
		$(".education-entry:last").append(formattedMinors);
	}
	// start online course section
	$("#education").append(HTMLonlineClasses);

	// loop through relevant online courses
	for(course in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);

		// get education.onlineCourses data
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedDates);

		// var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		// $(".education-entry:last").append(formattedURL);
	}
}

/*

	Add display function to projects object

*/
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		// get project attributes
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].githubRepo);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		// edit this in helper.js so that is shows as a link rather than a string
		// var formattedGitURL = HTMLprojectGitURL.replace("%data%", projects.projects[project].githubRepo);
		// $(".project-entry:last").append(formattedGitURL);

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
education.display();
projects.display();
$("#mapDiv").append(googleMap)

