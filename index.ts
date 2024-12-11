// Listen for form submission
document.getElementById('resumeForm')?.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;

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
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    form.reset();
});
