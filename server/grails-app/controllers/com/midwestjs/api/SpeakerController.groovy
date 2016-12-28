package com.midwestjs.api


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured
import grails.util.Holders

import static org.springframework.http.HttpStatus.*



@Secured(['ROLE_PUBLIC'])
class SpeakerController extends RestfulController  {
	static responseFormats = ['json', 'xml']

    SpeakerController (){
        super(Speaker)
    }

    @Override
    def index(){
        def approvedSpeakers = Talk.findAllByConferenceYearAndApproved(Holders.config.app.conference.year, true)
                .collect{ it.speaker }

        def sortedSpeakers = []
        for(speaker in approvedSpeakers){
            if(!sortedSpeakers.contains(speaker)){
                sortedSpeakers.add(speaker)
            }
        }

        render view: '/speaker/index', model: [speakerList: sortedSpeakers]
    }

//	@Secured(['ROLE_ADMIN'])
//	def update(){
//        Speaker speaker = Speaker.get(params.id)
//        speaker.properties = request.JSON



//        println params
//        if(cmd.hasErrors()) {
//            println cmd.errors
//            render status: 404, message: cmd.errors
//            return
//        }
//
//        Speaker speaker = Speaker.get(params.id)
//        speaker.properties = cmd.properties

//        if(speaker.save()){
//            render view: 'show', model: ['speaker': speaker]
//        } else {
//            println "something went wrong while saving"
//            println speaker.errors
//            render status: 404, message: speaker.errors
//        }
//	}


}

class SpeakerCommand implements grails.validation.Validateable {
    String fullName
    String email
    String twitter
    String github
    String photo
    String employer
    String bio
    String tshirt
    String reimbursement
    String location
//    MultipartFile image

    static constraints = {
        fullName nullable: true
        email email: true, nullable: true
        twitter nullable: true
        github nullable: true
        photo nullable: true
        employer nullable: true
        bio nullable: true
        tshirt nullable: true
        reimbursement nullable: true
        location nullable: true
    }
}
