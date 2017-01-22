package com.midwestjs.api

class ConferenceFeedback {

    Float overall
    Float speakerQuality
    Float hospitality
    Float registration
    Float happyHour
    Float keynotes
    Float venue
    Float expand
    Talk favoriteTalk
    String howHeard
    String comments

    static constraints = {
        overall nullable: true
        speakerQuality nullable: true
        hospitality nullable: true
        registration nullable: true
        happyHour nullable: true
        keynotes nullable: true
        venue nullable: true
        expand nullable: true
        favoriteTalk nullable: true
        howHeard maxSize: 255, nullable: true, blank: true
        comments maxSize: 255, nullable: true, blank: true
    }
}
