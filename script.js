document.addEventListener('DOMContentLoaded', function() {
    const qrCodeElement = document.getElementById('qrcode');
  
    QRCode.toCanvas(qrCodeElement, 'https://tsbladi5-hash.github.io/markus-chicken/', { width: 180 }, function(error) {
      if (error) {
        console.error(error);
        qrCodeElement.innerHTML = '<i class="fas fa-qrcode" style="font-size: 100px; color: #333;"></i>';
      }
    });
  });
  