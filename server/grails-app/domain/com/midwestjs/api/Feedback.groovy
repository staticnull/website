package com.midwestjs.api


class Feedback {

    Talk talk
    Float rating
    String comments
    Date dateCreated

    static constraints = {
        comments nullable: true
    }

}