# Castellano: Idioma oficial de Colombia (Constitución Política - Art. 10)
# El idioma predeterminado (uid 0) debe ser el español
# Todas las páginas deben tener una versión en español
config {
	uniqueLinkVars = 1
	linkVars = L
	sys_language_uid = 0
	sys_language_overlay = 1
	sys_language_mode = content_fallback
	language = es
	locale_all = es_ES.UTF-8
	htmlTag_langKey = es-CO
#	htmlTag_setParams = lang="es" dir="ltr" class="no-js"
}

# 1: Inglés (English)
[globalVar = GP:L = 1]
	config {
		sys_language_uid = 1
		language = en
		locale_all = en_US.UTF-8
#		htmlTag_setParams = lang="en" dir="ltr" class="no-js"
	}
[end]
[globalVar = GP:L = 2]
	config {
		sys_language_uid = 2
		language = pt
		locale_all = pt_BR.UTF-8
#		htmlTag_setParams = lang="pt" dir="ltr" class="no-js"
	}
[end]
[globalVar = GP:L = 3]
	config {
		sys_language_uid = 3
		language = fr
		locale_all = fr_FR.UTF-8
#		htmlTag_setParams = lang="fr" dir="ltr" class="no-js"
	}
[end]
[globalVar = GP:L = 4]
	config {
		sys_language_uid = 4
		language = de
		locale_all = de_DE.UTF-8
#		htmlTag_setParams = lang="de" dir="ltr" class="no-js"
	}
[end]
[globalVar = GP:L = 5]
	config {
		sys_language_uid = 5
		language = it
		locale_all = it_IT.UTF-8
#		htmlTag_setParams = lang="it" dir="ltr" class="no-js"
	}
[end]
