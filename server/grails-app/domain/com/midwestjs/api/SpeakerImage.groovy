package com.midwestjs.api


class SpeakerImage {

    byte[] image

    static constraints = {
        // Limit upload file size to 2MB
        image maxSize: 1024 * 1024 * 5
    }
}