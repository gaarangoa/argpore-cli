

$(document).on('submit','#upload-form-1',function (evt) {
    
    // console.log(this.files[0])

    evt.preventDefault();

    var formData = new FormData($(this)[0]);

    //console.log(formData)

    $.ajax({
        url: 'http://localhost:5510/uploadFile/',
        type: 'POST',
        data: formData,
        async: true,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (response) {
            console.log(response);
        },
        xhr: function(){
            // get the native XmlHttpRequest object
            var xhr = $.ajaxSettings.xhr() ;
            // set the onprogress event handler
            xhr.upload.onprogress = function(evt){ 
                $("#upload-progress-bar-1").css('width', evt.loaded/evt.total*100+"%")
                $("#upload-progress-text-1").text(Math.round(evt.loaded/evt.total*100)+"%")
                // console.log('progress', evt.loaded/evt.total*100) 
            } ;
            // set the onload event handler
            xhr.upload.onload = function(){ 
                // console.log('DONE!') 
            };
            // return the customized object
            return xhr;
        }
    })
});



$(document).on('submit','#upload-form-2',function (evt) {
    
    // console.log(this.files[0])

    evt.preventDefault();

    var formData = new FormData($(this)[0]);

    //console.log(formData)

    $.ajax({
        url: 'http://localhost:5510/uploadFile/',
        type: 'POST',
        data: formData,
        async: true,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (response) {
            console.log(response);
        },
        xhr: function(){
            // get the native XmlHttpRequest object
            var xhr = $.ajaxSettings.xhr() ;
            // set the onprogress event handler
            xhr.upload.onprogress = function(evt){ 
                $("#upload-progress-bar-2").css('width', evt.loaded/evt.total*100+"%")
                $("#upload-progress-text-2").text(Math.round(evt.loaded/evt.total*100)+"%")
                // console.log('progress', evt.loaded/evt.total*100) 
            } ;
            // set the onload event handler
            xhr.upload.onload = function(){ 
                // console.log('DONE!') 
            };
            // return the customized object
            return xhr;
        }
    })
});