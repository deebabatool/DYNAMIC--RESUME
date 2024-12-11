"use strict";
var _a;
// Listen for form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const description = document.getElementById('description').value;
    // Create resume output
    const resumeHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Description</h3>
        <p>${description}</p>
    `;
    // Display the resume
    const outputDiv = document.getElementById('resumeOutput');
    if (outputDiv) {
        outputDiv.innerHTML = resumeHTML;
    }
    // Optional: Clear form after submission
    const form = document.getElementById('resumeForm');
    form.reset();
});
