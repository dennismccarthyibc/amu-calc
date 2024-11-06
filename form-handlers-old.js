
class FormHandlers {
    static initializeForm() {
        const gpaSelect = document.getElementById('gpa');
        GPA_RANGES.forEach(range => {
            const option = document.createElement('option');
            option.value = range.max;
            option.textContent = range.label;
            gpaSelect.appendChild(option);
        });

        document.querySelectorAll('input[name="testType"]').forEach(radio =>
            radio.addEventListener('change', FormHandlers.handleTestTypeChange)
        );
        document.getElementById('highSchool').addEventListener('input', FormHandlers.handleSchoolSearch);
        document.getElementById('highSchool').addEventListener('focus', FormHandlers.handleSchoolSearch);
        document.getElementById('scholarshipForm').addEventListener('submit', FormHandlers.handleSubmit);

        FormValidation.setupFormValidation();  // Ensure form validation is initialized
    }

    static handleSubmit(e) {
        e.preventDefault();
        const gpa = parseFloat(e.target.gpa.value);
        const testType = e.target.testType.value;
        const testScore = parseFloat(e.target.testScore.value);
        const fit = e.target.fit.value;
        const schoolName = document.getElementById('highSchool').value;
        const schoolScore = parseInt(document.getElementById('highSchool').dataset.schoolScore) || 0;
        const schoolState = document.getElementById('highSchool').dataset.schoolState;

        console.log('Form Data:', { gpa, testType, testScore, fit, schoolName, schoolState, schoolScore });

        const gpaAward = AwardCalculator.calculateGpaAward(gpa);
        const testAward = AwardCalculator.calculateTestAward(testType, testScore);
        const fitAward = AwardCalculator.calculateFitAward(fit);
        const hsAward = schoolScore;  // Use school score directly as the high school award
        const totalAward = AwardCalculator.calculateTotalAward(gpaAward, testAward, fitAward, hsAward);

        console.log('Calculated Awards:', { gpaAward, testAward, fitAward, hsAward, totalAward });

        DisplayManager.showAwards({
            gpaAward,
            testAward,
            fitAward,
            hsAward,
            totalAward
        });
    }

    static handleTestTypeChange(e) {
        const testType = e.target.value;
        const testScoreGroup = document.getElementById('testScoreGroup');
        const testScoreSelect = document.getElementById('testScore');
        const testScoreLabel = document.getElementById('testScoreLabel');

        if (testType) {
            testScoreGroup.style.display = 'block';
            testScoreLabel.textContent = `${testType} Score Range`;

            testScoreSelect.innerHTML = '<option value="">Select score range</option>';
            TEST_RANGES[testType].forEach(range => {
                const option = document.createElement('option');
                option.value = range.max;
                option.textContent = range.label;
                testScoreSelect.appendChild(option);
            });
        } else {
            testScoreGroup.style.display = 'none';  // Hide if no test type selected
        }

        FormValidation.validateForm();  // Validate form on test type change
    }

    static handleSchoolSearch(e) {
        const searchTerm = e.target.value.trim().toLowerCase();
        const schoolResults = document.getElementById('schoolResults');

        if (!searchTerm) {
            schoolResults.style.display = 'none';
            return;
        }

        // Filter and sort the schools alphabetically by name
        const filteredSchools = HIGH_SCHOOLS
            .filter(school =>
                school.name.toLowerCase().includes(searchTerm) || 
                school.zip.includes(searchTerm)
            )
            .sort((a, b) => a.name.localeCompare(b.name));  // Sort alphabetically

        schoolResults.innerHTML = '';
        schoolResults.style.display = filteredSchools.length ? 'block' : 'none';

        filteredSchools.forEach(school => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                <span class="search-result-school">${school.name}</span>
                <span class="search-result-location">${school.zip}</span>
            `;
            div.addEventListener('click', () => FormHandlers.selectSchool(school));
            schoolResults.appendChild(div);
        });
    }

    static selectSchool(school) {
        const schoolInput = document.getElementById('highSchool');
        schoolInput.value = school.name;
        schoolInput.dataset.schoolScore = school.score;
        schoolInput.dataset.schoolState = school.state;

        console.log('Selected School:', school);

        document.getElementById('schoolResults').style.display = 'none';
        FormValidation.validateForm();  // Validate after selecting a school
    }
}
