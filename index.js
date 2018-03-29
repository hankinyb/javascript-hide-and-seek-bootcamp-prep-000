function getFirstSelector(selector) {
 const a = document.querySelector(selector)
  
  return a 
}

function nestTarget() {
  const b = document.getElementById('app').querySelector('#nested.target')
  
  return b
}