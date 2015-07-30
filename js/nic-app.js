replace = function(from, what, where) {
  var template = document.getElementById(from).import.getElementById(what);
  document.getElementById(where).appendChild(template.content)
}

nicPageSetup = function() {  
  replace("headerLink", "header", "nic-header");
  replace("footerLink", "footer", "nic-footer");
}
