# Se crea y se configura el sitio
page = PAGE
page {
	typeNum = 0
	shortcutIcon = EXT:unal_skin_default/Resources/Public/images/favicon.ico
	includeCSS {
		bootstrap = {$tx_unalskindefault.filepaths.css}/bootstrap.min.css
		bootstrap-theme = {$tx_unalskindefault.filepaths.css}/bootstrap-theme.min.css
		reset = {$tx_unalskindefault.filepaths.css}/reset.css
		unal = {$tx_unalskindefault.filepaths.css}/unal.css
		tablet = {$tx_unalskindefault.filepaths.css}/tablet.css
		phone = {$tx_unalskindefault.filepaths.css}/phone.css
		small = {$tx_unalskindefault.filepaths.css}/small.css
		printer = {$tx_unalskindefault.filepaths.css}/printer.css
	}
	includeJS {
		jquery = {$tx_unalskindefault.filepaths.js}/jquery.js
		bootstrap = {$tx_unalskindefault.filepaths.js}/bootstrap.min.js
		unal = {$tx_unalskindefault.filepaths.js}/unal.js
	}
	meta {
		description =
		description.override.field = description
		author =
		author.override.field = author
		keywords =
		keywords.override.field = keywords
		robots.value = all
		revisit-after = 1 hour
		copyright =
		distribution = all
		viewport = width=device-width, initial-scale=1, minimum-scale=0.5, maximum-scale=2.5, user-scalable=yes
		expires = 1
	}
	headerData {
		10 = TEXT
		10 {
			field = title
			noTrimWrap = |<title>|{$tx_unalskindefault.parameters.titleComplement}: Universidad Nacional de Colombia</title>|
		}
	}
}
