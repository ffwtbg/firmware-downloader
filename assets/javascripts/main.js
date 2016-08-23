var versioncode;

$(document).ready(function() {
	if(window.location.search != "") {
		$('#download-form-region').val(window.location.search.substr(1));
	}

	$('#download-form').submit(function( event ) {
		event.preventDefault();

		var	type = '',
			fileExtension = '',
			fileEnding = '.bin',
			vnumber = versioncode,
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
		if (region == 'hoehendoerfer')
			{
				region_short = 'HD';
			}
		if (region == 'siedlinghausen')
			{
				region_short = 'sdl';
			}

		var siteCode = 'ffwtbg_' + region_short;
		
				if (router == 'netgear-wndr3700' || router == 'netgear-wndr3700v2' || router == 'netgear-wndr3700v4' || router == 'netgear-wndr3800' || router == 'netgear-wndr4300' || router == 'netgear-wndrmacv2' || router == 'x86-64' || router == 'x86-generic' || router == 'x86-kvm' || router == 'x86-xen'){
					fileEnding = '.img'
				}
				
				if (router == 'x86-64-virtualbox' || router == 'x86-virtualbox'){
					fileEnding = '.vdi'
				}				

				if (router == 'x86-64-vmware' || router == 'x86-vmware'){
					fileEnding = '.vmdk'
				}

		switch ($('#download-form-type').val()) {
			case '0':
				type = 'factory';


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
			window.location.href = 'https://images.freifunk-winterberg.net/'+region+'/'+type+'/gluon-'+siteCode+'-'+vnumber+'-'+router+fileExtension+fileEnding
		}

		return false;
	});
});
