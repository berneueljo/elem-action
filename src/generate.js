var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var JSZipUtils  = require('jszip-utils')
var FileSaver = require('file-saver')

var expressions= require('angular-expressions');

var angularParser = function(tag) {
	    return {
	        get: tag === '.' ? function(s){ return s;} : function(s) {
	            return expressions.compile(tag.replace(/’/g, "'"))(s);
	        }
	    };
 }

 function loadFile(url,callback){
         JSZipUtils.getBinaryContent(url,callback);
  }

var  generateDocx = function(templateFilename, data){
    	 loadFile(templateFilename,function(error,content){
    	        if (error) { throw error };
    	        var zip = new JSZip(content);
    	        var doc=new Docxtemplater().loadZip(zip).setOptions({parser:angularParser})
    	        console.log("---- JSON :  ");
							console.log( data )
    	        doc.setData( data);

    	        try {
    	            // render the document (replace all occurences of {variable} by value ...)
    	            doc.render()
    	        }
    	        catch (error) {
    	            var e = {
    	                message: error.message,
    	                name: error.name,
    	                stack: error.stack,
    	                properties: error.properties,
    	            }
    	            console.log(JSON.stringify({error: e}));
    	            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
    	            throw error;
    	        }

    	        var out=doc.getZip().generate({
    	            type:"blob",
    	            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    	        }) //Output the document using Data-URI
    	        FileSaver.saveAs(out,"action-document.docx")
    	    })
     }

 export default generateDocx;
