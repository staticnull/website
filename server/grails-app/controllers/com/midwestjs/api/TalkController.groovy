package com.midwestjs.api


import grails.rest.*
import grails.converters.*


class TalkController extends RestfulController {
	static responseFormats = ['json', 'xml']

    TalkController(){
        super(Talk)
    }

	def search(){
        def c = Talk.createCriteria()
        def results = c.list {
            or {
                ilike("title", "%${params.q}%")
                ilike("talkAbstract", "%${params.q}%")
            }
        }
        render view: '/talk/index', model: [talkList: results]
    }

    def lookupBySpeaker(){
        def talks = Talk.findAllBySpeaker(Speaker.get(params.id))
        render view: '/talk/index', model: [talkList: talks]
    }
}
