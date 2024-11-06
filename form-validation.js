
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

    console.log('GPA:', gpa, 'Test Type:', testType, 'Test Score:', testScore);
    console.log('Fit:', fit, 'School Name:', schoolName, 'School State:', schoolState);

    // Only require testScore if a test type other than "none" is selected
    const isValid = gpa && testType && (testType === 'none' || testScore) && fit && schoolName && schoolState;
    console.log('Is Form Valid:', isValid);

    calculateButton.disabled = !isValid;
}
