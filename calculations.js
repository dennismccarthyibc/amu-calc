

    // Sample function in calculations.js for calculating fit award
class AwardCalculator {
    static calculateFitAward(fit) {
        switch (fit) {
            case "Exceptional Fit":
                return 3400;
            case "Very Good Fit":
                return 2400;
            case "Solid Fit":
                return 1300;
            case "Acceptable Fit":
                return 0;
            default:
                return 0;
        }
    }
}

    static HS_AWARDS = [
        { hs: "Jesuit High School", state: "LA", amount: 150 },
        { hs: "Saint Dominic High School", state: "MO", amount: 2700 },
        { hs: "Cardinal Newman High School", state: "FL", amount: 4000 }
    ];

    static calculateGpaAward(gpa) {
        if (gpa >= 3.80) return 5000;
        if (gpa >= 3.60) return 4500;
        if (gpa >= 3.40) return 3500;
        if (gpa >= 3.20) return 2500;
        if (gpa >= 3.10) return 1750;
        if (gpa >= 3.00) return 1000;
        return 0;
    }

    static calculateTestAward(testType, score) {
        switch (testType.toUpperCase()) {
            case 'ACT':
                if (score >= 35) return 5750;
                if (score >= 33) return 4000;
                if (score >= 30) return 3500;
                if (score >= 27) return 2500;
                if (score >= 24) return 1500;
                if (score >= 22) return 500;
                return 0;

            case 'SAT':
                if (score >= 1530) return 5750;
                if (score >= 1450) return 4000;
                if (score >= 1360) return 3500;
                if (score >= 1260) return 2500;
                if (score >= 1160) return 1500;
                if (score >= 1100) return 500;
                return 0;

            case 'CLT':
                if (score >= 107) return 5750;
                if (score >= 99) return 4000;
                if (score >= 92) return 3500;
                if (score >= 84) return 2500;
                if (score >= 76) return 1500;
                if (score >= 72) return 500;
                return 0;

            default:
                return 0;
        }
    }

    static calculateFitAward(fitLevel) {
        return this.FIT_LEVELS[fitLevel.toUpperCase()] || 0;
    }

    static calculateHsAward(hsName, state) {
        const school = this.HS_AWARDS.find(school =>
            school.hs.toUpperCase().trim() === hsName.toUpperCase().trim() &&
            school.state.toUpperCase().trim() === state.toUpperCase().trim()
        );

        console.log('Matching School:', school);  // Debugging

        return school ? school.amount : 0;
    }

    static calculateTotalAward(gpaAward, testAward, fitAward, hsAward) {
        return gpaAward + testAward + fitAward + hsAward;
    }

    static formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }
}
