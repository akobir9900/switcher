
  document.getElementById("myButton").addEventListener("click", function() {
    var key=document.getElementById("case");
    var body = document.body;
    
    if (key.style.transform === "translateX(95px)") {
        key.style.transform = "translateX(0px)";
        key.style.backgroundImage="url('https://img.freepik.com/premium-psd/light-text-style-effect_35913-2294.jpg')"
        key.style.backgroundPosition="center"
        key.style.backgroundSize="cover"
        body.style.backgroundImage = "url('https://cardinalwxservice.com/wp-content/uploads/2019/04/maxresdefault-3.jpg')";
    } else {
        key.style.transform = "translateX(95px)";
        key.style.backgroundImage="url('https://img.pikbest.com/png-images/editable-night-text-effect_1760880.png!bw700')"
        key.style.backgroundPosition="center"
        key.style.backgroundSize="cover"
        body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/03/70/26/94/360_F_370269459_e5I6EAv0NJ3E1EDwXG6HuSmwb3LK5vFa.jpg')";
    }
  });