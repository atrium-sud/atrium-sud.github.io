/*1632901732000*/
AUI().ready("liferay-sign-in-modal",function(A){var signIn=A.one(".sign-in \x3e a");if(signIn&&signIn.getData("redirect")!=="true")signIn.plug(Liferay.SignInModal)});