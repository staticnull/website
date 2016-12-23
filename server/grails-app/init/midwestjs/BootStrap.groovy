package midwestjs

import com.midwestjs.api.ConferenceFeedback
import com.midwestjs.api.Talk
import com.midwestjs.api.Speaker
import com.midwestjs.api.Feedback
import com.midwestjs.api.Role
import com.midwestjs.api.User
import com.midwestjs.api.UserRole

class BootStrap {

    def init = { servletContext ->
        Role role = new Role('ROLE_ADMIN').save(failOnError: true)
        Role rolePublic = new Role('ROLE_PUBLIC').save(failOnError: true)
        User user = new User(username: 'mike@agileorbit.com', password: 'supersecret').save(failOnError: true)
        UserRole userRole = new UserRole(user, role).save(failOnError: true)
        UserRole userRole2 = new UserRole(user, rolePublic).save(failOnError: true)

        Speaker speaker1 = new Speaker(fullName: 'Mike Truso', email: 'mike@agileorbit.com').save(failOnError: true)
        Talk talk1 = new Talk(speaker: speaker1, title: 'Do more with jQuery').save(failOnError: true)
        Talk talk2 = new Talk(speaker: speaker1, title: 'Advanced jQuery', talkAbstract: "\$('#mydiv').parent().parent().parent().html()").save(failOnError: true)

        Feedback feedback = new Feedback(talk: talk1, rating: 4.5).save(failOnError: true)

        ConferenceFeedback conferenceFeedback1 = new ConferenceFeedback(overall: 4.5, venue: 4, happyHour: 5, expand: 3, favoriteTalk: talk1).save(failOnError: true)
        ConferenceFeedback conferenceFeedback2 = new ConferenceFeedback(overall: 3.25, venue: 3.75, expand: 4.5, favoriteTalk: talk2).save(failOnError: true)
        ConferenceFeedback conferenceFeedback3 = new ConferenceFeedback(overall: 4.25, venue: 4.75, expand: 2, favoriteTalk: talk2).save(failOnError: true)
        ConferenceFeedback conferenceFeedback4 = new ConferenceFeedback(overall: 4.25, venue: 4.75, expand: 2, favoriteTalk: talk2).save(failOnError: true)

    }
    def destroy = {
    }
}
