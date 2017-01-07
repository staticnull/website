package com.midwestjs.api

class Speaker {

    String fullName
    String email
    String twitter
    String github
    String employer
    String bio
    String tshirt
    String reimbursement
    Date dateCreated
    Date lastUpdated
    SpeakerImage image

    static constraints = {
        fullName nullable: false
        email nullable: false, email: true, unique: true
        twitter nullable: true, url: true
        github nullable: true, url: true
        employer nullable: true
        bio nullable: true
        tshirt nullable: true
        reimbursement nullable: true
        dateCreated nullable: true
        image nullable: true
    }

}