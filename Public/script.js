document.getElementById("feedbackForm").addEventListener("submit",function (e) {
    e.preventDefault();

    const name=document.getElementById("name").value;
    const message=document.getElementById("message").value;

    fetch("/feedback", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({name,message})
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        document.getElementById("feedbackForm").reset();
    });
});