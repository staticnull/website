package com.midwestjs.api

import grails.converters.JSON
import grails.util.Holders
import grails.validation.Validateable
import org.springframework.http.HttpStatus
import grails.plugin.springsecurity.annotation.Secured


class CallForPapersController {

    static allowedMethods = [submit: "POST", listAllSubmisions: "GET"]

    @Secured(['ROLE_ADMIN'])
    def list(){
        render Talk.findAllByConferenceYear(Holders.config.app.cfp.year) as JSON //TODO create json view
    }

    @Secured(['ROLE_PUBLIC'])
    def submit(CFPSpeakerCommand cmd){

        if(cmd.hasErrors()){
            render status: HttpStatus.BAD_REQUEST, message: cmd.errors
            return
        }

        log.info "Processing CFP submission for ${cmd.fullName}"
        def speaker = Speaker.findByEmail(cmd.email) ?: new Speaker()
        speaker.properties = cmd.properties
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
    List<Talk> talks

    static constraints = {
        fullName nullable: false
        email nullable: false, email: true, unique: true
        twitter nullable: true, url: true
        github nullable: true, url: true
        employer nullable: true
        bio nullable: true
        talks minSize: 1
    }
}
