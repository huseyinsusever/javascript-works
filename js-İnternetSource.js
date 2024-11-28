const form = document.getElementById("registerForm");
const responseDiv = document.getElementById("response");
 form.addEventListener("submit", async e => {
   e.preventDefault();
  // Kullanıcıdan alınan veriler
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   // Sunucuya gönderilecek veriler
   const requestData = {
     name: name,
     email: email
   };
   // Sunucu isteği simülasyonu
   try {
     responseDiv.className = "response";
     responseDiv.textContent = "Server connection..";
     // 2 saniye gecikme ile yanıt simüle ediyoruz
     const response = await fakeServer(requestData);
          // Sunucu yanıtını işleme
     responseDiv.textContent = response.message;
     responseDiv.classList.add(response.success ? "success" : "error");
   } catch (error) {
     responseDiv.textContent = "An error make!";
     responseDiv.classList.add("error");
   }
 });
 // Sunucu simülasyonu (Promise)
     function fakeServer(data) {
     return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (data.name && data.email) {
         resolve({
           success: true,
           message: `user ${data.name} success save.`
        });
       } else {
         reject({
           success: false,
           message: "information not enough. defeatted."
         });
       }
     }, 2000); // 2 saniye simülasyon gecikmesi
   });
 }
