package com.midwestjs.api


import grails.rest.*


@Resource(readOnly = false, formats = ['json', 'xml'], uri = '/api/speakers')
class Speaker {

    String fullName
    String email
    String twitter
    String github
    String photo
    String employer
    String bio
    String tshirt
    String reimbursement
    Date dateCreated
    Date lastUpdated
    SpeakerImage image

    static constraints = {
        fullName nullable: false
        email nullable: false
        twitter nullable: true
        github nullable: true
        photo nullable: true
        employer nullable: true
        bio nullable: true
        tshirt nullable: true
        reimbursement nullable: true
        dateCreated nullable: true
        image nullable: true
    }

}