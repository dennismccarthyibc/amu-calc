class DisplayManager {
    static showAwards(awards) {
        document.getElementById('gpaAward').textContent = AwardCalculator.formatCurrency(awards.gpaAward);
        document.getElementById('testAward').textContent = AwardCalculator.formatCurrency(awards.testAward);
        document.getElementById('fitAward').textContent = AwardCalculator.formatCurrency(awards.fitAward);
        document.getElementById('hsAward').textContent = AwardCalculator.formatCurrency(awards.hsAward);
        document.getElementById('totalAward').textContent = AwardCalculator.formatCurrency(awards.totalAward);

        document.getElementById('awardDisplay').style.display = 'block';
    }
}
