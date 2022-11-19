
# Create a Fluid Template
page.10 = FLUIDTEMPLATE
page.10 {
	# Set the Template Pathes
	partialRootPaths {
		1 = {$tx_unalskindefault.filepaths.pri}/Partials/
	}
	layoutRootPaths {
		1 = {$tx_unalskindefault.filepaths.pri}/Layouts/
	}
	variables {
		unalsd_currentLang = TEXT
		unalsd_currentLang.value = {$tx_unalskindefault.parameters.currentLang}
		unalsd_langMenu = HMENU
		unalsd_langMenu {
			special = language
			special.value = {$tx_unalskindefault.parameters.languageCodes}
			special.normalWhenNoLanguage = 0
			1 = TMENU
			1 {
				# Item normal
				NO {
					stdWrap.cObject = TEXT
					stdWrap.cObject.value = {$tx_unalskindefault.parameters.languageId}
					allWrap = <li> | </li>
				}
				# Item activo
#				ACT = 1
#				ACT.doNotShowLink = 1
				# Item normal (cuando no existe una versión traducida de la página)
				USERDEF1 = 1
				USERDEF1.doNotShowLink = 1
				# Item activo (cuando no existe una versión traducida de la página)
				USERDEF2 = 1
				USERDEF2.doNotShowLink = 1
			}
		}
		unalsd_facebook = TEXT
		unalsd_facebook.value = {$tx_unalskindefault.parameters.socialLinks.facebook}
		unalsd_twitter = TEXT
		unalsd_twitter.value = {$tx_unalskindefault.parameters.socialLinks.twitter}
		unalsd_rss = TEXT
		unalsd_rss.value = {$tx_unalskindefault.parameters.socialLinks.rss}
		unalsd_youtube = TEXT
		unalsd_youtube.value = {$tx_unalskindefault.parameters.socialLinks.youtube}
		unalsd_aspirantes = TEXT
		unalsd_aspirantes.value = {$tx_unalskindefault.parameters.profiles.aspirantes}
		unalsd_estudiantes = TEXT
		unalsd_estudiantes.value = {$tx_unalskindefault.parameters.profiles.estudiantes}
		unalsd_egresados = TEXT
		unalsd_egresados.value = {$tx_unalskindefault.parameters.profiles.egresados}
		unalsd_docentes = TEXT
		unalsd_docentes.value = {$tx_unalskindefault.parameters.profiles.docentes}
		unalsd_administrativos = TEXT
		unalsd_administrativos.value = {$tx_unalskindefault.parameters.profiles.administrativos}
		unalsd_subdomain = TEXT
		unalsd_subdomain.data = getEnv:HTTP_HOST
		unalsd_servicesMenu < lib.servicesMenu
		unalsd_showFinder = TEXT
		unalsd_showFinder.value = {$tx_unalskindefault.parameters.showFinder}
		unalsd_contenido < styles.content.get
		unalsd_sitemapLinkUid = TEXT
		unalsd_sitemapLinkUid.value = {$tx_unalskindefault.parameters.sitemapLinkUid}
		unalsd_faqLinkUid = TEXT
		unalsd_faqLinkUid.value = {$tx_unalskindefault.parameters.faqLinkUid}
		unalsd_contactLinkUid = TEXT
		unalsd_contactLinkUid.value = {$tx_unalskindefault.parameters.contactLinkUid}
		unalsd_glosaryLinkUid = TEXT
		unalsd_glosaryLinkUid.value = {$tx_unalskindefault.parameters.glosaryLinkUid}
		unalsd_contactAddress = TEXT
		unalsd_contactAddress.value = {$tx_unalskindefault.parameters.contact.address}
		unalsd_contactBuilding = TEXT
		unalsd_contactBuilding.value = {$tx_unalskindefault.parameters.contact.building}
		unalsd_contactCity = TEXT
		unalsd_contactCity.value = {$tx_unalskindefault.parameters.contact.city}
		unalsd_contactPhone = TEXT
		unalsd_contactPhone.value = {$tx_unalskindefault.parameters.contact.phone}
		unalsd_contactEmailAccount = TEXT
		unalsd_contactEmailAccount.value = {$tx_unalskindefault.parameters.contact.emailAccount}
		unalsd_aboutLinkUid = TEXT
		unalsd_aboutLinkUid.value = {$tx_unalskindefault.parameters.aboutLinkUid}
		unalsd_lastUpdateDate = TEXT
		unalsd_lastUpdateDate {
			data = page:SYS_LASTCHANGED
			if.isTrue.data = page:SYS_LASTCHANGED
			date >
			strftime = %d/%m/%Y
			data = register:SYS_LASTCHANGED
			if >
		}
	} # end Variables
	# Assign the Template files with the Fluid Backend-Template
	file.stdWrap.cObject = CASE
	file.stdWrap.cObject {
		key.data = levelfield:-1, backend_layout_next_level, slide
		key.override.field = backend_layout
		# Set the default Template, our 3 column Template
		default = TEXT
		default.value = {$tx_unalskindefault.filepaths.pri}/Templates/Page.html
	}
}