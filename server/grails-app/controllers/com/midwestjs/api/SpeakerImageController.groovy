package com.midwestjs.api


import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured
import org.springframework.http.HttpStatus


@Secured(['ROLE_PUBLIC'])
class SpeakerImageController  {

    def show(){
        def image = SpeakerImage.get(params.id)
        if(!image){
            render status: HttpStatus.NO_CONTENT
        } else {
            response.contentLength = image.image.size()
            response.contentType = 'image/jpeg'
            OutputStream out = response.outputStream
            out.write(image.image)
            out.close()
        }
    }

    @Secured(['ROLE_ADMIN'])
    def save(){
        if(!params.speakerId){
            response.status = HttpStatus.BAD_REQUEST.value()
            render message: 'Speaker ID is required'
            return
        }
        SpeakerImage image = new SpeakerImage(params)
        if(image.save()){
            Speaker speaker = Speaker.get(params.speakerId)
            speaker.image = image
            if(!speaker.save(flush: true)){
                println "Problem adding speakerImage to speaker"
            }
            response.status = HttpStatus.CREATED.value()
            render image: [id: speaker.imageId, speaker: speaker.id] as JSON
        } else {
            render status: HttpStatus.BAD_REQUEST, message: image.errors
        }
    }



}
