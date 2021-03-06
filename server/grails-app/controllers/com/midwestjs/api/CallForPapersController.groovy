package com.midwestjs.api

import grails.validation.Validateable
import org.springframework.http.HttpStatus
import grails.plugin.springsecurity.annotation.Secured


class CallForPapersController {

    static allowedMethods = [submit: "POST"]

    @Secured(['ROLE_PUBLIC'])
    def submit(CFPSpeakerCommand cmd){

        if(cmd.hasErrors()){
            render status: HttpStatus.BAD_REQUEST, message: cmd.errors
            return
        }
        def speaker = Speaker.findByEmail(cmd.email) ?: new Speaker()
        speaker.properties = cmd.properties
        speaker.travelRequired = cmd.travel
        speaker.accommodationsRequired = cmd.accommodations
        if(!speaker.save(flush: true)){
            render status: HttpStatus.BAD_REQUEST, message: 'Error while processing speaker submission', errors: speaker.errors
            return
        }

        def talkErrors = []
        cmd.talks.each {
            it.speaker = speaker
            if(!it.validate() || it.hasErrors()) {
                talkErrors.add(it.errors)
            }
        }

        if(talkErrors.size() > 0){
            render status: HttpStatus.BAD_REQUEST, message: talkErrors
        } else {
            cmd.talks.each {
                it.save(flush: true)
            }
            render status: HttpStatus.CREATED
        }

    }

}

class CFPSpeakerCommand implements Validateable {
    String fullName
    String email
    String twitter
    String github
    String employer
    String bio
    String position
    String travelingFrom
    List<Talk> talks
    boolean travel
    boolean accommodations

    static constraints = {
        fullName nullable: false
        email nullable: false, email: true, unique: true
        twitter nullable: true, url: true
        github nullable: true, url: true
        employer nullable: true
        bio nullable: true
        talks minSize: 1
        position nullable: true
        travelingFrom nullable: true
    }
}
