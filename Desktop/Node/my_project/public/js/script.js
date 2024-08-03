function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
  document.getElementById("mySidenav").style.width ="0";
  }
  
  function openSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.querySelectorAll('#main > div');
  
    // Close all sections except the one to be opened
    sections.forEach(function(element) {
      if (element.id === sectionId) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  
    // Open the sidebar
    openNav();
  }
  
  document.getElementById('withdrawForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the input value
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      // Get the current balance
      let balance = parseFloat(document.getElementById('balance').textContent);
      
      // Check if withdrawal amount is less than or equal to balance
      if (withdrawAmount <= balance) {
        // Update balance
        balance -= withdrawAmount;
        document.getElementById('balance').textContent = balance.toFixed(2);
        
        // Add withdrawal to the list
        const withdrawList = document.getElementById('withdrawList');
        const li = document.createElement('li');
        li.textContent = '- $' + withdrawAmount.toFixed(2);
        withdrawList.appendChild(li);
        
        // Clear input field
        document.getElementById('withdrawAmount').value = '';
      } else {
        alert('Insufficient funds!');
      }
    } else {
      alert('Please enter a valid amount!');
    }
  });
  // referral
  document.getElementById("referralForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let referralCode = document.getElementById("referralCode").value.trim();
    
    if (referralCode === "") {
      alert("Please enter a referral code.");
    } else {
      alert("Referral code submitted: " + referralCode);
      // Here you can add further actions, like sending the referral code to a server, etc.
    }
  });
  // available tasks
  function bidTask(bidConfirmationId) {
      var bidConfirmation = document.getElementById(bidConfirmationId);
      bidConfirmation.style.display = "block";
      alert("Task bid successfully!");
  }
  
  function cancelBid(bidConfirmationId) {
      var bidConfirmation = document.getElementById(bidConfirmationId);
      bidConfirmation.style.display = "none";
      alert("Bid canceled successfully!");
  }
  // submission panel
  document.getElementById('pdfForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let pdfFile = document.getElementById('pdfFile').files[0];
    if (!pdfFile) {
      showMessage('Please select a PDF file.');
      return;
    }
  
    if (pdfFile.type !== 'application/pdf') {
      showMessage('Please select a valid PDF file.');
      return;
    }
  
    // You can handle the file upload here, for example:
    // const formData = new FormData();
    // formData.append('pdf', pdfFile);
    // Then, send formData to your server using AJAX or fetch
  
    showMessage('File uploaded successfully: ' + pdfFile.name +  'Wait For Review');
  });
  
  function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
  }
  // Set the date we're counting down to
  var countDownDate = new Date("August 10, 2024 18:37:25").getTime();
      
      // Update the count down every 1 second
      var x = setInterval(function() {
      
        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);

      // referral copy text
      function copyText() {
        var copyText = document.getElementById("textToCopy");
        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value).then(function() {
          alert("Copied the Code: " + copyText.value);
        }, function(err){
          console.error('Async:Could not copy the code:',err);
        });
      }