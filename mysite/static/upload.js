Dropzone.autoDiscover=false;

const myDropzone = new Dropzone("#my-dropzone" ,{
    autoProcessQueue: false,
    parallelUploads: 10,
    maxFiles: 10,
    maxFilesize: 2,
    acceptedFiles: '.png,.jpg',
});

$('#uploadfiles').click(function(){
    myDropzone.processQueue();
});