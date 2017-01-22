package com.midwestjs.api

import grails.plugin.springsecurity.annotation.Secured
import grails.util.Holders


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

        render view: '/speaker/index', model: [speakerList: sortedSpeakers]
    }

}