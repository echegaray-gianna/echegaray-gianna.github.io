class Job {
    constructor(jobTitle, company, companyname, yearsreq, years, skillsreq, skills, descriptionjob, description) {
        this.jobTitle = jobTitle;
        this.companyname = companyname;
        this.company = company;
        this.years = years;
        this.yearsreq = yearsreq;
        this.skills = skills;
        this.skillsreq = skillsreq;
        this.description = description;
        this.descriptionjob = descriptionjob;

    };

    log = function() {
        console.log(this.jobTitle);
        console.log(this.company);
        console.log(this.companyname);
        console.log(this.years);
        console.log(this.yearsreq);
        console.log(this.skills);
        console.log(this.skillsreq);
        console.log(this.description);
        console.log(this.descriptionjob);

    };
}


let information = [];

let jobOne = new Job("Compliance Licensing Specialist","Company","Progressive Leasing", "Years of Experience", "2+","Skills Required",
"Understanding of the legal, regulatory, and political landscape as it relates to state laws. Familiarity with the state-by-state lease/Rent-to-Own (RTO) statutory regime. Strong verbal and written communication skills with the ability to effectively present information and respond to managers, staff and regulators ",
"Job Description",
"Research and analyze regulatory statutes in comparison to the organization’s business model,Manage license applications, renewals and related activities including education and testing to ensure timely and accurate filings and that all required parties are properly licensed. Assist with annual reports, assessments and filings ");

let jobTwo = new Job ("Jr. Web Developer", "Company", "Advice Media ", "Years of Experience", "1+", "Skills Required", 
"Knowledge of HTML, CSS, PHP, JavaScript. Experience with WordPress.Experience with frontend JQuery, Bootstrap framework.Experience with photo editing (Photoshop)",
"Job Description",
"We are proud to build our solutions in Wordpress, and as such, the ideal candidate will have a true passion for web development and Wordpress. We are looking for team members who are extremely detail oriented and work well in our collaborative team environment.",  );


let jobThree = new Job ("Web Application Software Developer", "Company", "ManagerPlus", "Years of Experience", "3+", "Skills Required",
"Proficiency in SQL.Proficiency in JavaScript. Proficiency in C#/ASP.NET web development or other server-side language ",
"Job Description",
"This position will be responsible for the development and deployment of web-based asset management and preventive maintenance applications.");

let JobFour = new Job ("Front-End Developer", "Company", "RainFocus", "Years of Experience", "3+", "Skills Required",
"Strong, working knowledge of HTML, CSS, and SASS. Very strong written and verbal communication skills.Experience with Graphic Design, Photoshop. Experience with Email Templating and Web Page Theming",
"Job Description",
"Using HTML, CSS, and JavaScript, the Front-End Developer implements the designs created by in-house designers and customers to produce stunning web-applications. This position works in a team-environment, often leading small teams to develop enterprise-grade web applications. "  );

information.push(jobOne);
information.push(jobTwo);
information.push(jobThree);

var jobtable = document.querySelector("#board");

information.forEach(
     job => {
 
        /*create the table */
        tHead = document.createElement("thead");
        thtitle = document.createElement("th");
        

        tBody = document.createElement("tbody")
        trComp = document.createElement("tr");
        tdcompanyOne = document.createElement("td");
        tdcompany = document.createElement("td");

        trYear = document.createElement("tr");
        tdyearsOne = document.createElement("td");
        tdyears = document.createElement("td");

        trSkills = document.createElement("tr");
        tdskillsOne = document.createElement("td");
        tdskills = document.createElement("td");

        trDescr = document.createElement("tr");
        tddescriptionOne = document.createElement("td");
        tddescription= document.createElement("td");

 
        /*insert the info */
        thtitle.innerText = job.jobTitle;
       
        tdcompanyOne.innerText = job.company;
        tdcompany.innerText = job.companyname;

       
        tdyearsOne.innerText = job.yearsreq;
        tdyears.innerText = job.years;
       
        tdskillsOne.innerText = job.skillsreq;
        tdskills.innerText = job.skills;

        tddescriptionOne.innerText = job.descriptionjob;
        tddescription.innerText = job.description;


        /* set all the attributes and classes */
        tHead.setAttribute("id","sHeader");

        thtitle.setAttribute("Colspan", "2");
        thtitle.setAttribute("id", "top");

        tBody.setAttribute("id","sBody");

        trComp.setAttribute("class","row");
        tdcompanyOne.setAttribute("id","std");
        tdcompany.setAttribute("id","one");

        trYear.setAttribute("class","row");
        tdyearsOne.setAttribute("id","std");
        tdyears.setAttribute("id","two");

        trSkills.setAttribute("class","row");
        tdskillsOne.setAttribute("id","std");
        tdskills.setAttribute("id","three");

        trDescr.setAttribute("class","row");
        tddescriptionOne.setAttribute("id","std");
        tddescription.setAttribute("id","four");


        /*poniendo creando la table en HTML */
        tHead.appendChild(thtitle);
        
        tBody.appendChild(trComp);
        tBody.appendChild(trYear);
        tBody.appendChild(trSkills);
        tBody.appendChild(trDescr);
        trComp.appendChild(tdcompanyOne);
        trComp.appendChild(tdcompany);
        trYear.appendChild(tdyearsOne);
        trYear.appendChild(tdyears);
        trSkills.appendChild(tdskillsOne);
        trSkills.appendChild(tdskills);
        trDescr.appendChild(tddescriptionOne);
        trDescr.appendChild(tddescription);

        
        jobtable.appendChild(tHead);
        jobtable.appendChild(tBody);



        job.log();
     }
)

