    function handleEnrollButtonClick() {
            window.location.href = 'enroll.html';
        }

        // Add event listener to enroll buttons
        document.querySelectorAll('.course button').forEach(button => {
            button.addEventListener('click', () => {
                handleEnrollButtonClick();
            });
        });