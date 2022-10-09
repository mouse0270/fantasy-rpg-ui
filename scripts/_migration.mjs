// GET MODULE CORE
import { MODULE } from './_module.mjs';

Hooks.once('ready', async () => {
	const presets = game.settings.get('lib-themer', 'presets');

	let rpgUITheme = {
		[`${MODULE.ID}`]: {
			name: MODULE.TITLE,
			theme: {
				// v0.3.2 Them Options
				libraryFantasyRPGUIGenericWindow: {value: 'true'},
				libraryFantasyRPGUIGenericWindowInputs: {value: 'true'},
				libraryFantasyRPGUIGenericWindowHideHeaderButtons: {value: 'true'},
				libraryFantasyRPGUIInterface: {value: 'true'},
				libraryFantasyRPGUIInterfaceControls: {value: 'true'},
				libraryFantasyRPGUIInterfaceHotbar: {value: 'true'},
				libraryFantasyRPGUIInterfaceNavigation: {value: 'true'},
				libraryFantasyRPGUIInterfacePlayers: {value: 'true'},
				libraryFantasyRPGUIDialogs: {value: 'true'},
				libraryFantasyRPGUIJournals: {value: 'true'},
				libraryFantasyRPGUIJournalsHideHeaderButtons: {value: 'true'},
				libraryFantasyRPGUISidebar: {value: 'true'},
				libraryFantasyRPGUISidebarNav: {value: 'true'},
				libraryFantasyRPGUISidebarChat: {value: 'true'},
				libraryFantasyRPGUISidebarChatMessages: {value: 'true'},
				libraryFantasyRPGUISidebarScenes: {value: 'true'},
				libraryFantasyRPGUISidebarScenesCompact: {value: 'true'},
				libraryFantasyRPGUISidebarSettings: {value: 'true'},
				libraryFantasyRPGUIModulesFoundryTaskbar: {value: 'true'},
				// v0.3.3 Them Options
				libraryFantasyRPGUISidebarActors: {value: 'true'},
				libraryFantasyRPGUISidebarItems: {value: 'true'},
				libraryFantasyRPGUISidebarJournal: {value: 'true'},
				libraryFantasyRPGUISidebarTables: {value: 'true'},
				libraryFantasyRPGUISidebarCards: {value: 'true'},
				libraryFantasyRPGUIProseMirror: {value: 'true'}
			}
		}
	};

	// Check if Preset Exists, if Not Ask to Create and Enable It
	if (!presets.hasOwnProperty(MODULE.ID)) {
		Dialog.confirm({
			id: `${MODULE.ID}-create-preset`,
			title: MODULE.TITLE,
			content: `<p style="margin-top: 0px;">${MODULE.localize('dialog.createPreset')}</p>`,
			yes: (elemDialog) => {
				game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(game.settings.get('lib-themer', 'presets'), rpgUITheme, { inplace: false })).then(response => {
					game.settings.set('lib-themer', 'themeSettings', game.settings.get('lib-themer', 'presets')[MODULE.ID]).then(response => {
						for (const [property, value] of Object.entries(game.settings.get('lib-themer','themeSettings').theme)) {
							game.modules.get('lib-themer').API.setCSSVariable(property, value.value);
						}
					});
				})
			}, no: () => {
				game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(game.settings.get('lib-themer', 'presets'), rpgUITheme, { inplace: false }))
			}
		})
	}else{
		// Preset Exists Check if Its updated
		let preset = presets[MODULE.ID].theme;

		// Version 0.3.3
		if (!presets[MODULE.ID].theme.hasOwnProperty('libraryFantasyRPGUISidebarActors')) {
			let v033Options = {
				libraryFantasyRPGUISidebarCombat: {value: 'true'},
				libraryFantasyRPGUISidebarActors: {value: 'true'},
				libraryFantasyRPGUISidebarItems: {value: 'true'},
				libraryFantasyRPGUISidebarJournal: {value: 'true'},
				libraryFantasyRPGUISidebarTables: {value: 'true'},
				libraryFantasyRPGUISidebarCards: {value: 'true'},
				libraryFantasyRPGUISidebarPlaylists: {value: 'true'},
				libraryFantasyRPGUISidebarCompendium: {value: 'true'},
				libraryFantasyRPGUIProseMirror: {value: 'true'}
			}

			Dialog.confirm({
				id: `${MODULE.ID}-update-preset`,
				title: MODULE.TITLE,
				content: `<p style="margin-top: 0px;">${MODULE.localize('migration.v033.updatePreset')}</p>`,
				yes: (elemDialog) => {
					game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(rpgUITheme[MODULE.ID], presets[MODULE.ID], { inplace: false })).then(response => {
						game.settings.set('lib-themer', 'themeSettings', foundry.utils.mergeObject(v033Options, game.settings.get('lib-themer', 'themeSettings'), { inplace: false })).then(response => {
							for (const [property, value] of Object.entries(v033Options)) {
								game.modules.get('lib-themer').API.setCSSVariable(property, value.value);
							}
						});
					})
				}, no: () => {
					game.settings.set('lib-themer', 'presets', foundry.utils.mergeObject(rpgUITheme[MODULE.ID], presets[MODULE.ID], { inplace: false }));
				}
			});
		}
	}
});