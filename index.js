function getFirstSelector(selector) {
 const a = document.querySelector(selector)
  
  return a 
}

function nestedTarget() {
  const b = document.getElementById('nested').querySelector('.target')
  
  return b
}

function deepestChild() {
  const c = document.getElementById('grand-node').querySelector('div div div div div')
  
  return c 
}