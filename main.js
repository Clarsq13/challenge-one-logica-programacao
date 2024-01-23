/// <reference path="c:/Users/clari/.vscode/extensions/nur.script-0.2.1/@types/api.global.d.ts" />
/// <reference path="c:/Users/clari/.vscode/extensions/nur.script-0.2.1/@types/vscode.global.d.ts" />
//  @ts-check
//  API: https://code.visualstudio.com/api/references/vscode-api


 
 function encrypt(value) {
   const separatedChar = value.split('');
 
   const encryptedText = [];
 
   for(const char of separatedChar) {
     switch(char) {
       case 'a':
         encryptedText.push('ai');
         break;
       case 'e':
         encryptedText.push('enter') ;
         break;
       case 'i':
         encryptedText.push('imes');
         break;
       case 'o':
         encryptedText.push('ober');
         break;
       case 'u':
         encryptedText.push('ufat');
         break;
       default:
         encryptedText.push(char);
     }
   }
 
 function decrypt(value) {
   const decryptedText = value
     .replaceAll('ai', 'a')
     .replaceAll('enter', 'e')
     .replaceAll('imes', 'i')
     .replaceAll('ober', 'o')
     .replaceAll('ufat', 'u');
 }
}