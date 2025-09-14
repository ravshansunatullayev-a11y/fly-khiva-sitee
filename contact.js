(function(){
  emailjs.init("FY7kuZHBPZmXMC29P"); // вставь свой EmailJS Public Key
})();

document.getElementById("rate-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const status = document.getElementById("status");
  status.innerHTML = "⏳ Отправка...";

  emailjs.sendForm("service_g1ugnll", "template_7wzts27", this)
    .then(() => {
      status.innerHTML = "✅ Заявка успешно отправлена!";
      this.reset();
    }, (err) => {
      status.innerHTML = "❌ Ошибка: " + JSON.stringify(err);
    });
});
