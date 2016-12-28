package com.midwestjs.api

import grails.util.Holders

class Talk {

    String title
    String talkAbstract
    String track
    String location
    String other
    Long conferenceYear = Holders.config.app.cfp.year
    Date talkTime
    Date dateCreated
    Date lastUpdated
    Speaker speaker
    boolean approved = false

    static constraints = {
        title nullable: false, maxSize: 255
        talkAbstract nullable: true, maxSize: 1024
        track nullable: true
        location nullable: true
        other nullable: true
        conferenceYear nullable: true
        dateCreated nullable: true
        lastUpdated nullable: true
        speaker nullable: false
        talkTime nullable: true
        approved nullable: true
    }

}