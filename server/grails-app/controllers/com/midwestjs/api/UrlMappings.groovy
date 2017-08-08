package com.midwestjs.api

class UrlMappings {

    static mappings = {
        get "/api/$controller(.$format)?"(action:"index")
        get "/api/$controller/$id(.$format)?"(action:"show")

        "/api/conferenceFeedback/stats"(controller: 'conferenceFeedback', action: 'stats')
        "/api/talk/search"(controller: 'talk', action: 'search')
        "/api/talk/lookupBySpeaker/$id"(controller: 'talk', action: 'lookupBySpeaker')
        "/api/talk/findById/$id"(controller: 'talk', action: 'findById')
        "/api/talk/listAll"(controller: 'talk', action: 'listAll')
        "/api/talk/update"(controller: 'talk', action: 'update')
        "/api/speaker/listAll"(controller: 'speaker', action: 'listAll')
        "/api/speaker/findById/$id"(controller: 'speaker', action: 'findById')
        "/api/speaker/save"(controller: 'speaker', action: 'save')
        //post "/api/cfp"(controller: 'callForPapers', action: "submit")
        post "/api/speakerImage"(controller: 'speakerImage', action: "save")

        "/"(redirect: "/index.html")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
