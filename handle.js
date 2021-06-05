<script data-cfasync="false" type="text/javascript" src="handle.js">
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    window.alert("your message has been sent succesfully");
    loadJSON('https://script.googleusercontent.com/macros/echo?user_content_key=6gPqGccgHwG6S1iVN149ypluf9nyFWU5xaPRHOqXGJCep00fhnylvr3iDr5rSHUrzR01sGo9vRuP8xY8R6gg9imu9Ly0hut7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCqV1YfLhg6d0jsb04NwmKOptb0K4xj2pPKynXahm1J-WWDWIqFFnIwYZpTak_o22Q&lib=M7waFHaBkBuzUmUfhL0xsMy0IYhry-gtr',gotData);
    function gotData(data){
      window.alert("succesfully");
    }
  });
</script>