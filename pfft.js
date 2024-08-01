document.getElementById('confessButton').addEventListener('click', function() {
    const message = document.getElementById('loveMessage').value.trim();
    if (message) {
      // Display the message and copy it to clipboard
      document.getElementById('confession').textContent = message;
      document.getElementById('response').classList.remove('hidden');
      document.getElementById('loveMessage').value = ''; // Clear textarea
      
      // Copy the message to the clipboard
      navigator.clipboard.writeText(message).then(function() {
        alert("Message copied to clipboard! Now go to Instagram to send it.");
        // Redirect to the Instagram profile
        const instagramUsername = "yourInstagramUsername"; // Replace with the Instagram username
        window.location.href = `https://www.instagram.com/_musstore/`;
      }, function(err) {
        console.error("Could not copy text: ", err);
      });
    } else {
      alert("Please write your confession before sending.");
    }
  });
  