package com.midwestjs.api


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured


@Secured(['ROLE_PUBLIC'])
class SpeakerImageController extends RestfulController  {
	static responseFormats = ['json', 'xml']

    SpeakerImageController(){
        super(SpeakerImage)
    }

//    def show(){
//        def image = SpeakerImage.get(params.id)
//        response.contentLength = image.size()
//        response.contentType = 'image/jpeg'
//        OutputStream out = response.outputStream
//        out.write(image)
//        out.close()
//    }

    @Secured(['ROLE_ADMIN'])
    def save(){
        SpeakerImage image = new SpeakerImage(params)
        if(image.save()){
            render status: 200
        } else {
            render status: 400, message: image.errors
        }
    }



}
