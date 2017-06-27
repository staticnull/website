package com.midwestjs.api


import grails.util.Holders
import org.springframework.http.HttpStatus


class TalkController {

    def index(){
        def talks = Talk.findAllByConferenceYearAndApproved(Holders.config.app.conference.year, true)
        render view: '/talk/index', model: [talkList: talks]
    }

    def update(){

        println(params.approved)
        println(Boolean.valueOf(params.approved))


        def talk = Talk.findById(params.id) ?: new Talk()
        talk.title = params.title ?: talk.title
        talk.talkAbstract = params.talkAbstract ?: talk.talkAbstract
        talk.speaker = Speaker.findById(params.speaker) ?: talk.speaker
        talk.approved = Boolean.valueOf(params.approved)


        if(!talk.save(flush: true)){
            render status: HttpStatus.BAD_REQUEST, message: 'Error while processing speaker submission', errors: talk.errors
        } else {
            render status: HttpStatus.OK
        }
    }

	def search(){
        def results = Talk.withCriteria {
            eq ('approved', true)
            eq ('conferenceYear', Holders.config.app.conference.year.toLong())
            or {
                ilike("title", "%${params.q}%")
                ilike("talkAbstract", "%${params.q}%")
            }
        }
        render view: '/talk/index', model: [talkList: results]
    }

    def lookupBySpeaker(){
        def talks = Talk.findAllBySpeakerAndApproved(Speaker.get(params.id), true)
        render view: '/talk/index', model: [talkList: talks]
    }

    def findById(){
        def talks = Talk.findAllById(params.id, [fetch:[speaker:"join"]])
        render view: '/talk/index', model: [talkList: talks]
    }


    def listAll(){
        def talks = Talk.findAllByConferenceYear(Holders.config.app.conference.year, [fetch:[speaker:"join"]])
        render view: '/talk/list', model: [talkList: talks]
    }
}
