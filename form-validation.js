
class FormValidation {
    static setupFormValidation() {
        const form = document.getElementById('scholarshipForm');
        const inputs = form.querySelectorAll('select, input[type="radio"], input[type="text"]');

        inputs.forEach(input => {
            input.addEventListener('change', FormValidation.validateForm);
        });
    }

    static validateForm() {
        const gpa = document.getElementById('gpa').value;
        const testType = document.querySelector('input[name="testType"]:checked')?.value;
        const testScore = document.getElementById('testScore').value;
        const fit = document.querySelector('input[name="fit"]:checked')?.value;
        const schoolName = document.getElementById('highSchool').value;
        const schoolState = document.getElementById('highSchool').dataset.schoolState;
        const calculateButton = document.getElementById('calculateButton');

        // Debugging logs to verify inputs and form state
        console.log('GPA:', gpa, 'Test Type:', testType, 'Test Score:', testScore);
        console.log('Fit:', fit, 'School Name:', schoolName, 'School State:', schoolState);

        const isValid = gpa && testType && testScore && fit && schoolName && schoolState;
        console.log('Is Form Valid:', isValid);  // Log form validity state

        // Enable or disable the submit button based on form validity
       // calculateButton.disabled = !isValid;
    }
}
