function launchBrowser() {
    let browserName = 'Chrome'

    if (browserName === 'Chrome') {
        console.log("Chrome");
    } else {
        console.log(browserName);
    }
}

function runTests() {
    let testType = 'Regression'
    switch (testType) {
        case "sanity":
            console.log("Sanity");
            break;

        case "Regression":
            console.log("Regression");
            break;

        default:
            console.log("Smoke");
            break;
    }
}

launchBrowser();
runTests();