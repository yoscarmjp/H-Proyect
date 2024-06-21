fetch('/assets/config.json')
  .then(response => response.json())
  .then(data => {
    
    var statusMaintenance = data.maintenance.status;

    if (statusMaintenance == true && window.location.pathname !== '/maintenance.html') {
        window.location.href = 'maintenance.html';
    }
    
    if (statusMaintenance == false && window.location.pathname == '/maintenance.html') {
        window.location.href = 'index.html';
    }

  })
  .catch(error => {
    console.error('Hubo un error al cargar el archivo JSON:', error);
});


const copyButton = document.querySelector('#ip');  
const ipToCopy = 'mc.hycraft.us';

copyButton.addEventListener('click', () => {  

  navigator.clipboard.writeText(ipToCopy)  
    .then(() => {  
      console.log('Texto copiado en el portapapeles.');  
    })  
    .catch((err) => {  
      console.error('Hubo un error al copiar el texto: ', err);  
    });  

});  


var emergentwindows = document.getElementById("myEmergent");

var btn = document.getElementById("ip");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  emergentwindows.style.display = "block";
}

span.onclick = function() {
  emergentwindows.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == emergentwindows) {
    emergentwindowsl.style.display = "none";
  }
}