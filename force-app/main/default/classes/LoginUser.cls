global class LoginUser {
    
	@AuraEnabled
    global static String login(String username, String password){
        String homeURL = 'https://creative-goat-9dcke6-dev-ed.trailblaze.my.site.com/s/';
    	ApexPages.PageReference pageRef = Site.login(userName, password, homeURL);
        return pageRef.getUrl();
    }
}