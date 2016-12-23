package com.midwestjs.api


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'], uri='/api/feedback')
class Feedback {

    Talk talk
    Float rating
    String comments
    Date dateCreated

    static constraints = {
        comments nullable: true
    }

}