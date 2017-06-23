package com.midwestjs.api


import grails.util.Holders


class TalkController {

    def index(){
        def talks = Talk.findAllByConferenceYearAndApproved(Holders.config.app.conference.year, true)
        render view: '/talk/index', model: [talkList: talks]
    }

    def update(){
        def talk = Talk.findById(params.id)
        talk.approved = params.approved
        talk.save(flush:true)
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
