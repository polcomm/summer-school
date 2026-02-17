<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0/jquery.counterup.min.js"></script>

<script>
// countdown timer
(function () {

  const second = 1000,
        minute = second * 60,
        hour   = minute * 60,
        day    = hour * 24;

  // lê a data gerada pelo EJS
  let raw = document.getElementById("countdownDate").innerText.trim();

  // ISO-8601 safe parsing (funciona em qualquer navegador)
  let countDown = Date.parse(raw);

  console.log("Deadline:", raw, countDown);

  let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = countDown - now;

    // se ainda não chegou
    if (distance >= 0) {
      document.getElementById("days").innerText    = Math.floor(distance / day);
      document.getElementById("hours").innerText   = Math.floor((distance % day) / hour);
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
    }

    // quando chegar na data
    if (distance < 0) {
      clearInterval(x);

      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;

      const headline = document.getElementById("headline");
      if (headline) headline.innerText = "APPLICATION DEADLINE REACHED";

      const btn = document.getElementById("btn_store");
      if (btn) btn.disabled = true;
    }

  }, 1000); // atualiza a cada 1 segundo

})();
</script>
