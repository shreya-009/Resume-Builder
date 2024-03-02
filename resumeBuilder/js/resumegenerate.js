
// alert("Loading");


function addNewWEField() {
    // console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewEDUField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let eduOb = document.getElementById("edu");
    let eduAddButtonOb = document.getElementById("eduAddButton");

    eduOb.insertBefore(newNode, eduAddButtonOb);
}

function addNewSKIField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skiField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let skiOb = document.getElementById("ski");
    let skiAddButtonOb = document.getElementById("skiAddButton");

    skiOb.insertBefore(newNode, skiAddButtonOb);
}

function addNewCERField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cerField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let cerOb = document.getElementById("cer");
    let cerAddButtonOb = document.getElementById("cerAddButton");

    cerOb.insertBefore(newNode, cerAddButtonOb);
}

function addNewAPDField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("apdField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let apdOb = document.getElementById("apd");
    let apdAddButtonOb = document.getElementById("apdAddButton");

    apdOb.insertBefore(newNode, apdAddButtonOb);
}

//generating CV
function generateCV() {
    // Get input values
    var name = document.getElementById('nameField').value;
    var email = document.getElementById('emailField').value;
    var contact = document.getElementById('contactField').value;
    var address = document.getElementById('addressField').value;
    var fb = document.getElementById('fbField').value;
    var insta = document.getElementById('instaField').value;
    var linkedin = document.getElementById('linkedField').value;
    var objective = document.getElementById('objectiveField').value;
    var education = document.getElementById('eduField').value.split('\n');
    var workExperience = document.getElementById('weField').value.split('\n');
    var skills = document.getElementById('skiField').value.split('\n');
    var certificates = document.getElementById('cerField').value.split('\n');
    var academicProjects = document.getElementById('apdField').value.split('\n');


    // Fill in the template
    document.getElementById('nameT').innerText = name;
    document.getElementById('nameT2').innerText = name;
    document.getElementById('emailT').innerText = email;
    document.getElementById('contactT').innerText = contact;
    document.getElementById('addressT').innerText = address;
    document.getElementById('fbT').innerText = fb;
    document.getElementById('fbT').href = fb;
    document.getElementById('instaT').innerText = insta;
    document.getElementById('instaT').href = insta;
    document.getElementById('linkedT').innerText = linkedin;
    document.getElementById('linkedT').href = linkedin;
    document.getElementById('objectiveT').innerText = objective;


    //edu
    let edus = document.getElementsByClassName("eqField");
    let eduList = "";
    for(let edu of edus) {
        eduList += `<li>${edu.value}</li>`;
    }

    document.getElementById("eduT").innerHTML = eduList;

    //we
    let wes = document.getElementsByClassName("weField");
    let weList = "";
    for(let we of wes) {
        weList += `<li>${we.value}</li>`;
    }

    document.getElementById("weT").innerHTML = weList;

    //ski
    let skis = document.getElementsByClassName("skiField");
    let skiList = "";
    for(let ski of skis) {
        skiList += `<li>${ski.value}</li>`;
    }

    document.getElementById("skiT").innerHTML = skiList;

    //cer
    let cers = document.getElementsByClassName("cerField");
    let cerList = "";
    for(let cer of cers) {
        cerList += `<li>${cer.value}</li>`;
    }

    document.getElementById("cerT").innerHTML = cerList;

    //apd
    let apds = document.getElementsByClassName("apdField");
    let apdList = "";
    for(let apd of apds) {
        apdList += `<li>${apd.value}</li>`;
    }

    document.getElementById("apdT").innerHTML = apdList;


    // // Education
    // var eduList = document.getElementById('eduT');
    // eduList.innerHTML = '';
    // education.forEach(edu => {
    //     var eduItem = document.createElement('li');
    //     eduItem.innerText = edu;
    //     eduList.appendChild(eduItem);
    // });

    // // Work Experience
    // var weList = document.getElementById('weT');
    // weList.innerHTML = '';
    // workExperience.forEach(we => {
    //     var weItem = document.createElement('li');
    //     weItem.innerText = we;
    //     weList.appendChild(weItem);
    // });

    // // Skills
    // var skiList = document.getElementById('skiT');
    // skiList.innerHTML = '';
    // skills.forEach(skill => {
    //     var skillItem = document.createElement('li');
    //     skillItem.innerText = skill;
    //     skiList.appendChild(skillItem);
    // });

    // // Certificates & Achievements
    // var cerList = document.getElementById('cerT');
    // cerList.innerHTML = '';
    // certificates.forEach(certificate => {
    //     var cerItem = document.createElement('li');
    //     cerItem.innerText = certificate;
    //     cerList.appendChild(cerItem);
    // });

    // // Academic Project Details
    // var apdList = document.getElementById('apdT');
    // apdList.innerHTML = '';
    // academicProjects.forEach(project => {
    //     var projectItem = document.createElement('li');
    //     projectItem.innerText = project;
    //     apdList.appendChild(projectItem);
    // });

    // Show preview
    document.getElementById('resume-preview').innerHTML = document.getElementById('cv-template').innerHTML;

    //show cv template and hide form
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

    //print cv
    function printCV() {
    window.print();

    }


