const button = document.getElementById('#');

let counter = 0;

let stopCounter = false;

button.addEventListener('click', function() {

    if (!stopCounter) {
        if (counter < 10) {
            counter += 1;
            button.innerHTML = `# ${counter}`;
        } else {
            stopCounter = true;

            setTimeout ( () => {
                stopCounter = false;
                counter = 0;
                button.innerHTML = `# ${counter}`;
            }, 2000)
        }
    }
});