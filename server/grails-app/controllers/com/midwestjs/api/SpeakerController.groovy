package com.midwestjs.api

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import grails.util.Holders
import org.springframework.http.HttpStatus


@Secured(['ROLE_PUBLIC'])
class SpeakerController  {

    def index(){
        def approvedSpeakers = Talk.findAllByConferenceYearAndApproved(Holders.config.app.conference.year, true)
                .collect{ it.speaker }

        def sortedSpeakers = []
        for(speaker in approvedSpeakers){
            if(!sortedSpeakers.contains(speaker)){
                sortedSpeakers.add(speaker)
            }
        }

        long seed = System.nanoTime();
        Collections.shuffle(sortedSpeakers, new Random(seed));

        render view: '/speaker/index', model: [speakerList: sortedSpeakers]
    }

    def listAll(){
        def speakers = Speaker.findAll()
        render view: '/speaker/index', model: [speakerList: speakers]
    }

    def findById(){
        def speaker = Speaker.findAllById(params.id)
        render view: '/speaker/index', model: [speakerList: speaker]
    }

    def save(){
        def speaker = Speaker.findByEmail(params.email) ?: new Speaker()
        speaker.fullName = params.fullName ?: speaker.fullName
        speaker.email = params.email ?: speaker.email
        speaker.twitter = params.twitter ?: speaker.twitter
        speaker.github = params.github ?: speaker.github
        speaker.employer = params.employer ?: speaker.employer
        speaker.position = params.position ?: speaker.position
        speaker.bio = params.bio ?: speaker.bio
        speaker.reimbursement = params.reimbursement ?: speaker.reimbursement
        speaker.travelingFrom = params.travelingFrom ?: speaker.travelingFrom
        speaker.travelRequired  = params.travelRequired ?: speaker.travelRequired
        speaker.accommodationsRequired = params.accommodationsRequired ?: speaker.accommodationsRequired


        if(!speaker.save(flush: true)){
            render status: HttpStatus.BAD_REQUEST, message: 'Error while processing speaker submission', errors: speaker.errors
        } else {
            render status: HttpStatus.OK
        }
    }
}
