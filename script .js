<script>
function sendData() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value
  };

  console.log(data); // all info in one place

  // Send to server
  fetch("https://example.com/receive", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
</script>
