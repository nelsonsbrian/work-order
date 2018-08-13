function removeDuplicateUsingFilter(arr){
  let noDuplicates = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  return noDuplicates
}


$(document).ready(function() {


  $("#workOrder").submit(function(event) {
    event.preventDefault();

      var inputTextArray = [];
      var inputTemp = $("input#inputText").val();
      inputTextArray = inputTemp.split(" ");

      var noDuplicates = removeDuplicateUsingFilter(inputTextArray);



      var original;
      noDuplicates.forEach(function(uniqueWord) {
        var count = 0;
        inputTextArray.forEach(function(duplicate) {
          if (uniqueWord === duplicate) {
            count++;
          }


        });
        $(".output").append(uniqueWord + " count is " + count + "<br>");

      });


  });
});





// var noDuplicates = inputTextArray.map(function(word) {
//   if (word === "this") {
//     return word;
//   }
// });
//
// alert(noDuplicates);
