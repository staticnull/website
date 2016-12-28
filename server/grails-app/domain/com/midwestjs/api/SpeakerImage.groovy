package com.midwestjs.api


class SpeakerImage {

    byte[] image

    static constraints = {
        image maxSize: 1024 * 1024 * 5
    }
}