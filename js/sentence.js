$(document).ready(function() {	            $("#getSentance").submit(function(event){
  	var sentenceInput = $("input#sentence").val();
    console.log(hello);
    alert(hello);
    alert(sentenceSplit());
  });
});


 var sentenceSplit = function() {
   var split = sentenceInput.split(" ");
   return split;
};
