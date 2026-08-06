function toggleMode(){
      document.body.classList.toggle("dark");

      let btn = document.getElementById("btn");

      if(document.body.classList.contains("dark"))  {
        btn.innerText ="🔆LightMode";
      }else{
        btn.innerText = "🌙Dark Mode"
      }
    }

    function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:'en' },
        'google_translate'
    );
}

    