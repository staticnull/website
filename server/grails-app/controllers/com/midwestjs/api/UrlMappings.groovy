package com.midwestjs.api

class UrlMappings {

    static mappings = {
        get "/api/$controller(.$format)?"(action:"index")
        get "/api/$controller/$id(.$format)?"(action:"show")

        "/api/conferenceFeedback/stats"(controller: 'conferenceFeedback', action: 'stats')
        "/api/talk/search"(controller: 'talk', action: 'search')
        "/api/talk/lookupBySpeaker/$id"(controller: 'talk', action: 'lookupBySpeaker')
        post "/api/cfp"(controller: 'callForPapers', action: "submit")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
