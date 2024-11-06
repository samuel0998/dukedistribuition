    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let countdownTime = 86400; // 1 day in seconds

    function updateTimer() {
      const days = Math.floor(countdownTime / 86400);
      const hours = Math.floor((countdownTime % 86400) / 3600);
      const minutes = Math.floor((countdownTime % 3600) / 60);
      const seconds = countdownTime % 60;

      daysElement.textContent = days;
      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
    }

    function countdown() {
      countdownTime--;
      updateTimer();

      if (countdownTime === 0) {
        clearInterval(countdownInterval);
        alert('Tempo esgotado!');
      }
    }

    const countdownInterval = setInterval(countdown, 1000);

