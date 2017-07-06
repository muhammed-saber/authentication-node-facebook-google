module.exports = {
  'facebookAuth' : {
    'clientID' : '726211707579211',
    'clientSecret': '3457c861ed1339c525de6d65308c596f',
    'profileFields' : ['emails' , 'public_profile'],
    'callbackURL': 'http://localhost:8080/auth/facebook/callback'

  },
  'googleAuth' : {
		'clientID': '168155897256-02s5mb7shi1fv3msp9sqrpqquktfhisk.apps.googleusercontent.com',
		'clientSecret': '6os-RwD3jIZNFxBn6uHJVEPD',
		'callbackURL': 'http://localhost:8080/auth/google/callback'
	}
}
