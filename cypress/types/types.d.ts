declare namespace Cypress {
   interface Chainable<Subject> {

      /**
      * @description This is a custom command that type text in the field. Implimentation is in cypress\support\commands.js
      * @param {String} selector selector of the field
      * @param {String} text text to fill the field
      * @param {String} text chainer for should(). By default is 'be.visible'
      * @param {Boolean} log prints a message in the report. By default is true
      */
      typeField(selector: String, text: String, chainer: String): Chainable<any>;

   }
}