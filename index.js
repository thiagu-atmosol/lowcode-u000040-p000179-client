// add more complex scripts as needed
console.log("Hello from index.js!");
document.addEventListener('DOMContentLoaded', (event) => {
    const driver = window.driver.js.driver
    const driverObj = driver({
        showProgress: true,
        steps: [
            
            { element: '#section1153', popover: { title: 'static Section', description: 'This is the static section.', align: 'start' }},
            
        ]
    });

    // document.getElementById('start-tour').addEventListener('click', () => {
        driverObj.drive();
    //});
});