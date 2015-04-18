
$(document).ready(function() {
	if(window.location.search != "") {
		$('#download-form-region').val(window.location.search.substr(1));
	}

	$('#download-form').submit(function( event ) {
		event.preventDefault();

		var	type = '',
			fileExtension = '',
			fileEnding = '.bin',
			branchdir = 'stable',
			vnumber = '0.6.2-20150417',
			router,
			region;
		router = $('#download-form-router').val();
		region = $('#download-form-region').val();

		var siteCode = 'ffgl-' + region;

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

			/*switch ($('#branch').val()) {
				case '0':
					branchdir = 'stable';
					vnumber = '0.6.2-';
					break;
				case '1':
					branchdir = 'beta';
					vnumber = '0.6~beta-2';
					break;
				case '2':
					branchdir = 'experimental';
					vnumber = '0.6.1~exp20150122';
					break;
				default:
					branchdir = 'stable';
					vnumber = '0.6';
			}*/

		if(region === '-1') {
			window.alert('Bitte wähle eine Region aus.');
		} else if(router === '-1') {
			window.alert('Bitte wähle einen Router aus.');
		} else {
			window.location.href = region+'/'+branchdir+'/'+type+'/gluon-'+siteCode+'-'+vnumber+'-'+router+fileExtension+fileEnding;
		}

		return false;
	});
});
