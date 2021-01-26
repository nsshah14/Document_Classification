Dropzone.autoDiscover=false;

var myDropzone = new Dropzone("div#my-dropzone" ,{
    url:'upload-success/',
    autoProcessQueue: false,
    parallelUploads: 10,
    maxFiles: 10,
    maxFilesize: 2,
    acceptedFiles: '.png,.jpg',
    init: function(){
        dzarea=this;

        document.getElementById("uploadfiles").addEventListener("click",function(e){
            e.preventDefault();
            e.stopPropagation();
            dzarea.processQueue();
            
        });

        dzarea.on("addedfile", function(file) {
            file.previewElement.addEventListener("click", function() {
              dzarea.removeFile(file);
            });
          });
    }
    
});
