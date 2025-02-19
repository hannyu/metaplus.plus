require(['gitbook', 'jquery'], function(gitbook, $) {

    // Init configuration at start
    gitbook.events.bind('start', function(e, config) {

    	let text;
    	let newUrl;
    	if (window.location.pathname.startsWith('/cn/')) {
    		text = 'ENGLISH';
    		if (window.location.pathname == '/cn/') {
    			newUrl = '/';
    		} else {
    			newUrl = window.location.pathname.replace('/cn/', '/en/');
    		}
    	} else {
    		text = '简体中文';
    		if (window.location.pathname.startsWith('/en/')) {
    			newUrl = window.location.pathname.replace('/en/', '/cn/');
    		} else {
    			newUrl = '/cn/';
    		}
    	}

        gitbook.toolbar.createButton({
            icon: 'fa',
            label: 'Language',
            position: 'left',
            text: text,
            onClick: function(e) {
                e.preventDefault();
                window.open(newUrl, '_self');
            }
        });

    });

});
