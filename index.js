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

function increaseRankBy(n) {
  const d = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < d.length; i++) {
    d[i].innerHTML = (d[i] += n).toString()
  }
}