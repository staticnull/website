package midwestjs

import com.midwestjs.api.TalkController

class UrlMappings {

    static mappings = {
        delete "/api/$controller/$id(.$format)?"(action:"delete")
        get "/api/$controller(.$format)?"(action:"index")
        get "/api/$controller/$id(.$format)?"(action:"show")
        post "/api/$controller(.$format)?"(action:"save")
        put "/api/$controller/$id(.$format)?"(action:"update")
        patch "/api/$controller/$id(.$format)?"(action:"patch")

        "/conferenceFeedback/"(controller: 'conferenceFeedback')
        "/conferenceFeedback/stats"(controller: 'conferenceFeedback', action: 'stats')
        "/api/talk/search"(controller: 'talk', action: 'search')
        "/api/talk/lookupBySpeaker/$id"(controller: 'talk', action: 'lookupBySpeaker')
        get "/api/cfp"(controller: 'callForPapers', action: "list")
        post "/api/cfp"(controller: 'callForPapers', action: "submit")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
