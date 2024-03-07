$(document).ready(function() {
 $('#encryptionBtn').click(function() {
  var textToEncryption = $("#textToEncryption").val();
  var iteration = parseInt($("#encryptionIteration").val());
  var encryptionText = caesarCipher(textToEncryption, iteration);
  $("#encryptionText").val(encryptionText);
 });

 $("#transcriptBtn").click(function() {
  var textToDecipher = $("#textToDecipher").val();
  var iteration = parseInt($("#decipherIteration").val());
  var decipherText = caesarCipher(textToDecipher, -iteration);
  $("#decipherText").val(decipherText);
 });

 function caesarCipher(text, iteration) {
  var result = "";
   for (var i = 0; i < text.length; i++) {
     var charCode = text.charCodeAt(i);
     if (charCode >= 1040 && charCode <= 1103) {
       if (charCode <= 1071) {
         result += String.fromCharCode(((charCode - 1040 + iteration + 32) % 32) + 1040);
       } else {
         result += String.fromCharCode(((charCode - 1072 + iteration + 32) % 32) + 1072);
       }
     } else {
       result += text[i];
     }
   }
   return result;
 }
});