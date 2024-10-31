// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    FormHandlers.initializeForm();
    FormValidation.setupFormValidation();

    // Close school results when clicking outside
    document.addEventListener('click', (e) => {
        const schoolResults = document.getElementById('schoolResults');
        const schoolInput = document.getElementById('highSchool');
        
        if (e.target !== schoolInput && !schoolResults.contains(e.target)) {
            schoolResults.style.display = 'none';
        }
    });
});


document.getElementById('sendToGoogleSheets').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = new FormData(document.getElementById('scholarshipForm'));
    const gpa = parseFloat(formData.get('gpa'));
    const testType = formData.get('testType');
    const testScore = parseFloat(formData.get('testScore'));
    const fit = formData.get('fit');
    const highSchoolName = document.getElementById('highSchool').value;
    const highSchoolState = document.getElementById('highSchool').dataset.schoolState;

    // Calculate awards
    const gpaAward = AwardCalculator.calculateGpaAward(gpa);
    const testAward = AwardCalculator.calculateTestAward(testType, testScore);
    const fitAward = AwardCalculator.calculateFitAward(fit);
    const hsAward = AwardCalculator.calculateHsAward(highSchoolName, highSchoolState);
    const totalAward = gpaAward + testAward + fitAward + hsAward;

    console.log('Payload to Zapier:', { gpaAward, testAward, fitAward, hsAward, totalAward });

    // Prepare the payload
    const data = {
        'First Name': formData.get('firstName'),
        'Last Name': formData.get('lastName'),
        'Mobile Phone': formData.get('mobilePhone'),
        'Email Address': formData.get('email'),
        'GPA Range': formData.get('gpa'),
        'Test Type': testType,
        'Test Score Range': formData.get('testScore'),
        'Fit Level': fit,
        'High School Name': highSchoolName,
        'High School State': highSchoolState,
        'GPA Award': gpaAward,
        'Test Award': testAward,
        'Fit Award': fitAward,
        'High School Award': hsAward,
        'Total Award': totalAward,
        'Submission Date': new Date().toLocaleString()
    };

    try {
        const response = await fetch('https://hooks.zapier.com/hooks/catch/13266486/29kyypm/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Data sent to Airtable successfully!');
        } else {
            alert('Failed to send data. Please try again.');
        }
    } catch (error) {
        console.error('Error sending data:', error);
        alert('An error occurred. Please try again later.');
    }
});