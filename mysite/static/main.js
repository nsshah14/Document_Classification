Dropzone.autoDiscover=false;

const myDropzone = new Dropzone("#my-dropzone" ,{
    maxFiles: 2,
    maxFilesize: 2,
    acceptedFiles: '.png',
})