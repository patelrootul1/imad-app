console.log('Loaded!');
var nameinput=document.getlementbyid('name');
var name = nameinput.value;
var submit = document.getelementbyid('submit_btn');
submit.onclick = function(){
  var names=['name1','name2','name3','name4']; 
  var list='';
  for(var i=0;i<names.length;i++){
      list += '<li>' + names[i] + '</li>'; 
  }
  var ul=document.getelementbyid('namelist');
  ul.innerHTML = list;
  
  
};
