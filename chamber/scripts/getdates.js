let text = document.lastModified;
document.getElementById("last-modified").innerHTML = "Last Modification: " + text;

// Copyright
document.getElementById("copy-right-year").innerHTML = new Date().getFullYear();

//time stamp

let today = new Date.now();
document.getElementById('time').value = today;