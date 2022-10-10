// GET MODULE CORE
import { MODULE } from './_module.mjs';

Hooks.once('ready', async () => {
	const presets = game.settings.get('lib-themer', 'presets');

	let rpgUITheme = {
		[`${MODULE.ID}`]: {
			name: MODULE.TITLE,
			theme: {
				// Generic Windows
				libraryFantasyRPGUIGenericWindow: {value: 'true'},
				libraryFantasyRPGUIGenericWindowHideHeaderButtons: {value: 'true'},
				libraryFantasyRPGUIGenericWindowInputs: {value: 'true'},
				// Interface
				libraryFantasyRPGUIInterface: {value: 'true'},
				libraryFantasyRPGUIInterfaceControls: {value: 'true'},
				libraryFantasyRPGUIInterfaceHotbar: {value: 'true'},
				libraryFantasyRPGUIInterfaceNavigation: {value: 'true'},
				libraryFantasyRPGUIInterfacePlayers: {value: 'true'},
				// Sidebar
				libraryFantasyRPGUISidebar: {value: 'true'},
				libraryFantasyRPGUISidebarNav: {value: 'true'},
				libraryFantasyRPGUISidebarChat: {value: 'true'},
				libraryFantasyRPGUISidebarChatMessages: {value: 'true'},
				libraryFantasyRPGUISidebarCombat: {value: 'true'},
				libraryFantasyRPGUISidebarScenes: {value: 'true'},
				libraryFantasyRPGUISidebarScenesCompact: {value: 'true'},
				libraryFantasyRPGUISidebarActors: {value: 'true'},
				libraryFantasyRPGUISidebarItems: {value: 'true'},
				libraryFantasyRPGUISidebarJournal: {value: 'true'},
				libraryFantasyRPGUISidebarTables: {value: 'true'},
				libraryFantasyRPGUISidebarCards: {value: 'true'},
				libraryFantasyRPGUISidebarPlaylists: {value: 'true'},
				libraryFantasyRPGUISidebarCompendium: {value: 'true'},
				libraryFantasyRPGUISidebarSettings: {value: 'true'},
				// Themed Windows
				libraryFantasyRPGUIDialogs: {value: 'true'},
				libraryFantasyRPGUIJournals: {value: 'true'},
				libraryFantasyRPGUIJournalsHideHeaderButtons: {value: 'true'},
				libraryFantasyRPGUIProseMirror: {value: 'true'},
				// Systems
				libraryFantasyRPGUISystemPF2e: {value: 'true'},
				// Modules
				libraryFantasyRPGUIModulesAlwaysHP: {value: 'true'},
				libraryFantasyRPGUIModulesFoundryTaskbar: {value: 'true'},
				libraryFantasyRPGUIModulesWindowControls: {value: 'true'}
			}
		}
	};

	// If User is Player and Master Theme is Enabled, Return
	if (!game.user.isGM && game.settings.get('lib-themer', 'enableMasterTheme')) return false;

	// Check if Preset Exists, if Not Ask to Create and Enable It
	if (!presets.hasOwnProperty(MODULE.ID)) {
		async function createPreset() {
			return Dialog.confirm({
				id: `${MODULE.ID}-create-preset`,
				title: MODULE.TITLE,
				content: `<p style="margin-top: 0px;">${MODULE.localize('dialog.createPreset')}</p>`,
				yes: async (elemDialog) => {
					if (game.user.isGM) {
						await game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(game.settings.get('lib-themer', 'presets'), rpgUITheme, { inplace: false }));
					}

					// Update Current Settings
					let currentThemeSettings = game.settings.get('lib-themer', 'themeSettings');
					currentThemeSettings = foundry.utils.mergeObject(currentThemeSettings, rpgUITheme[MODULE.ID].theme, { inplace: false });

					// Apply Current Settings
					game.settings.set('lib-themer', 'themeSettings', currentThemeSettings).then(response => {
						for (const [property, value] of Object.entries(currentThemeSettings)) {
							game.modules.get('lib-themer').API.setCSSVariable(property, value.value);
						}
					});
				}, no: () => {
					if (game.user.isGM) {
						game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(game.settings.get('lib-themer', 'presets'), rpgUITheme, { inplace: false }));
					}
				}
			})
		}
		createPreset();
	}else{
		if ((Object.keys(rpgUITheme[MODULE.ID].theme)?.length ?? 0) > (Object.keys(presets[MODULE.ID].theme)?.length ?? 0)) {
			async function updatePreset() {
				// Get Current Preset and Merge Update Into It.
				rpgUITheme[MODULE.ID].theme = foundry.utils.mergeObject(rpgUITheme[MODULE.ID].theme, presets[MODULE.ID].theme, { inplace: false, insertKeys: false });

				return Dialog.confirm({
					id: `${MODULE.ID}-update-preset`,
					title: MODULE.TITLE,
					content: `<p style="margin-top: 0px;">${MODULE.localize('migration.updatePreset')}</p>`,
					yes: async (elemDialog) => {
						if (game.user.isGM) {
							await game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(game.settings.get('lib-themer', 'presets'), rpgUITheme, { inplace: false }));
						}

						// Update Current Settings
						let currentThemeSettings = game.settings.get('lib-themer', 'themeSettings');
						currentThemeSettings = foundry.utils.mergeObject(currentThemeSettings, rpgUITheme[MODULE.ID].theme, { inplace: false });
	
						// Apply Current Settings
						game.settings.set('lib-themer', 'themeSettings', currentThemeSettings).then(response => {
							for (const [property, value] of Object.entries(currentThemeSettings)) {
								game.modules.get('lib-themer').API.setCSSVariable(property, value.value);
							}
						});
					}, no: () => {
						if (game.user.isGM) {
							game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(game.settings.get('lib-themer', 'presets'), rpgUITheme, { inplace: false }));
						}
					}
				})
			}
			updatePreset();
		}
	}
});