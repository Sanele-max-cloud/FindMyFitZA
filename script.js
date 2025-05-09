window.onload = function () {
    let steps = ["scan", "build", "load", "final"];
    let currentStep = 0;

    function showStep(step) {
        const stepElement = document.getElementById(step);
        stepElement.style.display = 'block';
    }

    function hideStep(step) {
        const stepElement = document.getElementById(step);
        stepElement.style.display = 'none';
    }

    function changeStep() {
        if (currentStep > 0) {
            hideStep(steps[currentStep - 1]);
        }
        if (currentStep < steps.length) {
            showStep(steps[currentStep]);
            currentStep++;
        }
    }

    setInterval(changeStep, 2000); // Change step every 2 seconds
};
