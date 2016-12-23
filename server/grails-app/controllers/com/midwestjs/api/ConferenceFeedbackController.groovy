package com.midwestjs.api


import grails.rest.*
import grails.converters.*

class ConferenceFeedbackController extends RestfulController {
	static responseFormats = ['json', 'xml']
	
    ConferenceFeedbackController(){
        super(ConferenceFeedback)
    }

    def stats() {
        def results = [:]
        def c = ConferenceFeedback.createCriteria()

        def averages = c.get {
            projections {
                count()
                avg "overall"
                avg "venue"
                avg "expand"
                avg "speakerQuality"
                avg "hospitality"
                avg "registration"
                avg "happyHour"
            }
        }

        def topTalks = ConferenceFeedback.createCriteria().list {
            projections {
                count('id', 'myCount')
                groupProperty 'favoriteTalk'
            }
            order 'myCount', 'desc'
            maxResults(5)
        }.collect {
            [it[0], it[1].title]
        }


        results.totalResponses = averages[0]
        results.overallAverage = averages[1]
        results.venue = averages[2]
        results.expand = averages[3]
        results.speakerQuality = averages[4]
        results.hospitality = averages[5]
        results.registration = averages[6]
        results.happyHour = averages[7]
        results.favoriteTalk = topTalks


        render results as JSON
    }
}
