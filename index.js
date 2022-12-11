const listDiv = document.getElementById('list');
const btn = document.getElementById('btn');
const container = document.getElementById('container');


function colorChanger(){
    let color = '#';
  const colorArray = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
  for( let i=0; i<6; i++){
      const mathRandom = [Math.floor(Math.random() * colorArray.length)];
      color += colorArray[mathRandom];
    }
    return color;
}

function blackToWhite(){
    const colorsArray = ['#111','#222','#333','#444','#555','#666','#777','#888','#999','#aaa','#bbb','#ccc','#ddd','#eee','#fff'];
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}


btn.addEventListener('click', function(){
    
    listDiv.style.borderImage = `linear-gradient(45deg,${blackToWhite()}, ${colorChanger()}, ${blackToWhite()}, ${colorChanger()}) 1`;
    container.style.borderImage = `linear-gradient(45deg,${blackToWhite()}, ${colorChanger()}, ${blackToWhite()}, ${colorChanger()}) 1`;
  });