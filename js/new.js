      var imgCount = 1;
        var total = 8 ;
        var image = document.getElementById("mainContainer");
        image.style.backgroundColor = 'red';
        
        function slider(x){
            var image = document.getElementById("mainContainer");
            imgCount = imgCount + x;
            if(imgCount < 1){
                imgCount = total;
            }
            else if(imgCount > total){
                imgCount = 1;
            }
            else{
                 var path = "./image/img" + imgCount + ".jpg";
                 image.style.backgroundImage = url(path);
            }   
        }
        
        window.setInterval(function slideA() {
            var image = document.getElementById("mainContainer");
            imgCount = imgCount + 1;
            if(imgCount < 1){
                imgCount = total;
            }
            else if(imgCount > total){
                imgCount = 1;
            }
            else{
                 var path = "./image/img" + imgCount + ".jpg";
                 image.style.backgroundImage = url(path);
            }
              
        },3000);