package com.midwestjs.api

class Speaker {

    String fullName
    String email
    String twitter
    String github
    String employer
    String position
    String bio
    String tshirt
    String reimbursement
    String travelingFrom
    Date dateCreated
    Date lastUpdated
    SpeakerImage image
    Boolean travelRequired = false
    Boolean accommodationsRequired = false

    static constraints = {
        fullName nullable: false
        email nullable: false, email: true, unique: true
        twitter nullable: true, url: true
        github nullable: true, url: true
        employer nullable: true
        position nullable: true
        bio nullable: true
        tshirt nullable: true
        reimbursement nullable: true
        travelingFrom nullable: true
        dateCreated nullable: true
        image nullable: true
        travelRequired nullable: true
        accommodationsRequired nullable: true
    }

}