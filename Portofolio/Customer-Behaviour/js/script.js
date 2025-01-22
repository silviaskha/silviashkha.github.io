document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
       });
    });
  
  
   // Download functionality
    document.getElementById('download-btn').addEventListener('click', function() {
        downloadFile('data/Customer_Behaviour.csv', 'Customer_Behaviour.csv');
    });
  
  
  function downloadFile(fileURL, fileName) {
      let a = document.createElement('a');
      a.href = fileURL;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
   }
  
  });