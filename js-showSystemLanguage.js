const languages = navigator.languages;
 const preferredLanguage = navigator.language;
  const listElement = document.getElementById("languages");

 languages.forEach(lang => {
   const li = document.createElement("li");
   li.textContent = lang;
   if (lang === preferredLanguage) {
     li.classList.add("preferred");
   }
   listElement.appendChild(li);
 });

 function showHistoryLength() {
   const length = history.length;
   document.getElementById(
     "output"
   ).textContent = `Tarayıcı geçmişinde ${length} kayıt bulunuyor.`;
 }