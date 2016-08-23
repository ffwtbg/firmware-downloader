<?php /*

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>. */

// ### CONFIG ###########

$path 					= "/var/www/html/firmware/firmware_manuell/winterberg_doerfer";		// reference folder
$routerlistfilename 	= "routerlist.txt";
$referencemodel 		= "tp-link-tl-wr841n-nd-v9";						// reference model in reference folder

// ######################

$community = basename($path);

$scanned_directory = array_diff(scandir("$path/factory"), array('..', '.'));

$origcount = count($scanned_directory);

$extensions = [".img", ".bin", ".vdi", ".vmdk", ".img.gz"];

foreach($extensions as $extension)
{
	$extensionmatches = array_filter($scanned_directory, function($var) use ($extension) { return preg_match("/$extension\b$/i", $var); });
	
	foreach($extensionmatches as $key => $value)
	{
		$scanned_directory[$key] = str_replace($extension, "", $value);	// remove extension
	}
}

if($origcount != count($scanned_directory))
{
	echo "File Extension Error!";
	exit();
}

$matches = array_filter($scanned_directory, function($var) use ($referencemodel) { return preg_match("/\b$referencemodel\b/i", $var); });

$referencemodelfile = current($matches);

$extraparts = substr_count($referencemodelfile, "-") - 8;

// normal: 8 total
$parts = explode("-", $referencemodelfile, 4 + $extraparts);
$version = implode('-', array_slice($parts, 2, 1 + $extraparts));

$modelname = $parts[3 + $extraparts];

$filestring = "";

foreach($scanned_directory as $filename)
{
	$parts = explode("-", $filename, 4 + $extraparts);
	$modelname = $parts[3 + $extraparts];
	$filestring .= $modelname . "\n";
	echo "<option value=\"$modelname\">$modelname</option>";
}

$filehash = sha1_file($routerlistfilename);
$stringhash = sha1($filestring);

if($filehash == "" OR $filehash != $stringhash) // only write file if different
{
	file_put_contents($routerlistfilename, $filestring);
}

