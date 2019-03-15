function clicker() {
    var x = document.getElementsByClassName('button-secondary-medium')
    for( var i = 0; i < x.length; i++) {
        x[i].click();
    }
    alert("Done")
}

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){        
    var url = tabs[0].url;
    var title = tabs[0].title;


    document.getElementById('index_link').onclick = function () {
        var url1 = 'https://linkedin.com/mynetwork/invitation-manager';
        chrome.tabs.create({active: true, url: url1});
    };
});

document.addEventListener('DOMContentLoaded', function() {
    var x = document.getElementsByClassName('button-secondary-medium')
})
