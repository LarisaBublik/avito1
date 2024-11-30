function updateTime() {
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0');
 
    const timeString = `${hours}:${minutes}`;
  
    document.getElementById('time').textContent = timeString;
}

updateTime();

setInterval(updateTime, 60000); 


