<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Freifunk GL im FFRL - Firmware herunterladen</title>

        <link rel="stylesheet" href="assets/stylesheets/reset.css">
        <link rel="stylesheet" href="assets/stylesheets/style.css">
        <link rel="apple-touch-icon" href="assets/images/apple-touch-icon-precomposed.png"/>
        <link href="assets/images/favicon.ico" rel="icon" type="image/x-icon" />
    </head>
    <body>
        <header>
            <h1>Freifunk Winterberg</h1>
            <h2>Firmware herunterladen</h2>
        </header>

        <form class="download-form" id="download-form">
            <select id="download-form-region">
                <option value="-1">Bitte wähle ein Gebiet</option>
                <option value="winterberg_kernstadt">Winterberg Kernstadt</option>
                <option value="winterberg_doerfer">Winterberg Doerfer</option>
                <option value="medebach">Medebach</option>
                <option value="hallenberg">Hallenberg</option>
		<option value="hoehendoerfer">Höhendörfer</option>
		<option value="siedlinghausen">Siedlinghausen</option>
            </select>
            <select id="download-form-type">
                <option value="0">Neuinstallation der Freifunk Firmware</option>
                <option value="1">Update der Freifunk Firmware</option>
            </select>
 
            <select id="download-form-router">
                <option value="-1">Bitte wähle einen Router</option>
				<?php include_once("gen.php"); ?>
			</select>
            <button class="button">Herunterladen</button>
            <!--<a class="button" href="/firmware/ffruhr-images-0.6.zip">Alle Images als ZIP herunterladen</a> -->
        </form>
        
        <p>Die Freifunk GL Firmware steht unter der <a href="http://de.wikipedia.org/wiki/GNU_General_Public_License">GPL Lizenz</a>.</p><br>
        <p>Du darfst sie somit kostenlos nutzen, studieren, ändern und verbreiten.</p>
        <br>
        <br>
        <script src="assets/javascripts/jquery-1.11.0.min.js" type="text/javascript"></script>
        <script src="assets/javascripts/main.js" type="text/javascript"></script>
        <script>versioncode = "<?php echo $version; ?>"</script>
    </body>
</html>
