package com.midwestjs.api


class FeedbackController {

    def index() {
        respond Feedback.list()
    }


}
