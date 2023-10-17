module.exports = function toReadable(number) {
 
   const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   if (number === 0) {
      return 'zero';
   }
   
   function convertTens(num) {
      if (num < 10) {
         return units[num];
      } else if (num >= 10 && num < 20) {
         return teens[num - 10];
      } else {
         return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
      }
   }

   function convertHundreds(num) {
      if (num > 99) {
         return units[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100);
      } else {
         return convertTens(num);
      }
   }

   return convertHundreds(number).trim();
}

