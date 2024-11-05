class FormValidation {
    static setupFormValidation() {
        const form = document.getElementById('scholarshipForm');
        const inputs = form.querySelectorAll('select, input[type="radio"], input[type="text"]');

        inputs.forEach(input => {
            input.addEventListener('change', FormValidation.validateForm);
        });
    }

    static validateForm() {
        const gpa = parseFloat(document.getElementById('gpa').value);
        const testType = document.querySelector('input[name="testType"]:checked')?.value;
        const testScore = parseFloat(document.getElementById('testScore').value);
        const fit = document.querySelector('input[name="fit"]:checked')?.value;
        const schoolName = document.getElementById('highSchool').value;
        const schoolState = document.getElementById('highSchool').dataset.schoolState;

        if (gpa && testType && testScore && fit && schoolName && schoolState) {
            const gpaAward = AwardCalculator.calculateGpaAward(gpa);
            const testAward = AwardCalculator.calculateTestAward(testType, testScore);
            const fitAward = AwardCalculator.calculateFitAward(fit);
            const hsAward = AwardCalculator.calculateHsAward(schoolName, schoolState);
            const totalAward = gpaAward + testAward + fitAward + hsAward;

            // Update hidden input fields
            document.getElementById('gpaAwardInput').value = gpaAward;
            document.getElementById('testAwardInput').value = testAward;
            document.getElementById('fitAwardInput').value = fitAward;
            document.getElementById('hsAwardInput').value = hsAward;
            document.getElementById('totalAwardInput').value = totalAward;

            // Display the total award when all fields are validated
            document.getElementById('totalAward').textContent = AwardCalculator.formatCurrency(totalAward);
            document.getElementById('awardDisplay').style.display = 'block';

            // Debugging log to confirm display update
            console.log('All fields validated. Total Award:', totalAward);
        } else {
            // Hide award display if form is incomplete
            document.getElementById('awardDisplay').style.display = 'none';
        }
    }
}
