# Linkedin Invite Acceptor

Steps:
1. Login to linkedin
2. open https://www.linkedin.com/mynetwork/invitation-manager/
3. open developer console.
4. paste this script 
```js
var x = document.getElementsByClassName('button-secondary-medium')
for( var i = 0; i < x.length; i++) {
    x[i].click();
}
```
5. enjoy

