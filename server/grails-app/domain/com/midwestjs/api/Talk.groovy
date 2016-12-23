package com.midwestjs.api


import grails.rest.*


//@Resource(readOnly = false, formats = ['json', 'xml'], uri = '/api/talks')
class Talk {

    String title
    String talkAbstract
    String track
    String location
    String other
    Date talkTime
    Date dateCreated
    Date lastUpdated
    Speaker speaker

    static constraints = {
        title nullable: false
        talkAbstract nullable: true
        track nullable: true
        location nullable: true
        other nullable: true
        dateCreated nullable: true
        lastUpdated nullable: true
        speaker nullable: false
        talkTime nullable: true
    }

}