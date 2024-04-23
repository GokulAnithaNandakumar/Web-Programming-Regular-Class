function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
  }
  function changeTextColor(elementId, color) {
    var element = document.getElementById(elementId);
    element.style.color = color;
  }
  function showAlert(message) {
    alert(message);
  }
  function toggleClass(elementId, className) {
    var element = document.getElementById(elementId);
    element.classList.toggle(className);
  }
  function updateContent(elementId, content) {
    var element = document.getElementById(elementId);
    element.innerHTML = content;
  }
  function addMouseOverEffect(elementId, color) {
    var element = document.getElementById(elementId);
    element.addEventListener('mouseover', function () {
      element.style.backgroundColor = color;
    });
    element.addEventListener('mouseout', function () {
      element.style.backgroundColor = '';
    });
  }
  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    if (name === '' || email === '') {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  }
  