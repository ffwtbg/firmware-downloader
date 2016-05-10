
$(document).ready(function() {
	if(window.location.search != "") {
		$('#download-form-region').val(window.location.search.substr(1));
	}

	$('#download-form').submit(function( event ) {
		event.preventDefault();

		var	type = '',
			fileExtension = '',
			vnumber = '0.8.5-L2TP',
			router,
			region;
		router = $('#download-form-router').val();
		region = $('#download-form-region').val();
		
		if (region == 'winterberg_doerfer')
			{
				region_short = 'doerfer';
			}
		if (region == 'winterberg_kernstadt')
			{
				region_short = 'kernstadt';
			}
		if (region == 'medebach')
			{
				region_short = 'mdb';
			}
		if (region == 'hallenberg')
			{
				region_short = 'hlb';
			}

		var siteCode = 'ffwtbg_' + region_short;
		

		switch ($('#download-form-type').val()) {
			case '0':
				type = 'factory';
				/* there will be more than a *.bin as a filending
				if (router == 'netgear-wndr3700' || router == 'netgear-wndr3700' || router == 'netgear-wndr3800'){
					fileEnding = '.img'
				}
				*/
				break;
			case '1':
				type = 'sysupgrade';
				fileExtension = '-sysupgrade';
				break;
			default:
				type = 'factory';
		}

		
		if(region === '-1') {
			window.alert('Bitte wähle eine Region aus.');
		} else if(router === '-1') {
			window.alert('Bitte wähle einen Router aus.');
		} else {
			window.location.href = 'http://images.freifunk-winterberg.net/'+region+'/'+type+'/gluon-'+siteCode+'-'+vnumber+'-'+router+fileExtension
		}

		return false;
	});
});
