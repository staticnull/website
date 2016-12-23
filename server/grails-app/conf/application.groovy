// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'com.midwestjs.api.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'com.midwestjs.api.UserRole'
grails.plugin.springsecurity.authority.className = 'com.midwestjs.api.Role'
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
	[pattern: '/',               access: ['permitAll']],
	[pattern: '/error',          access: ['permitAll']],
	[pattern: '/api/**',		 access: ['permitAll']],
//	[pattern: '/api/**',		 access: ["( request.getMethod().equals('GET') && hasRole('ROLE_PUBLIC') ) || " +
//                                                  "( ( request.getMethod().equals('PUT') || request.getMethod().equals('POST') ) && hasRole('ROLE_ADMIN') )"]]
//	[pattern: '/api/**',		 access: 'ROLE_ADMIN', httpMethod: 'POST']
//	[pattern: '/index',          access: ['permitAll']],
//	[pattern: '/index.gsp',      access: ['permitAll']],
//	[pattern: '/shutdown',       access: ['permitAll']],
//	[pattern: '/assets/**',      access: ['permitAll']],
//	[pattern: '/**/js/**',       access: ['permitAll']],
//	[pattern: '/**/css/**',      access: ['permitAll']],
//	[pattern: '/**/images/**',   access: ['permitAll']],
//	[pattern: '/**/favicon.ico', access: ['permitAll']]
]

//grails.plugin.springsecurity.filterChain.chainMap = [
//	[pattern: '/assets/**',      filters: 'none'],
//	[pattern: '/**/js/**',       filters: 'none'],
//	[pattern: '/**/css/**',      filters: 'none'],
//	[pattern: '/**/images/**',   filters: 'none'],
//	[pattern: '/**/favicon.ico', filters: 'none'],
//	[pattern: '/**',             filters: 'JOINED_FILTERS']
//]

grails.plugin.springsecurity.filterChain.chainMap = [
	//Stateless chain
	[
			pattern: '/api/**',
			filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter'
	],

		//Traditional chain
    [
            pattern: '/**',
            filters: 'JOINED_FILTERS'//,-restTokenValidationFilter,-restExceptionTranslationFilter
    ]
]

grails.plugin.springsecurity.active = false