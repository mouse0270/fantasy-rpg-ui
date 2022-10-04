// GET REQUIRED LIBRARIES

// GET MODULE CORE
import { MODULE } from './_module.mjs';

// IMPORT SETTINGS -> Settings Register on Hooks.Setup
import './_settings.mjs';

// DEFINE MODULE CLASS
export default class CORE {
	static #TITLECHOICES = {
		'iron': `${MODULE.ID}.theme.options.title.choices.iron`,
		'ribbon-black': `${MODULE.ID}.theme.options.title.choices.ribbonBlack`,
		'ribbon-blue': `${MODULE.ID}.theme.options.title.choices.ribbonBlue`,
		'ribbon-brown': `${MODULE.ID}.theme.options.title.choices.ribbonBrown`,
		'ribbon-green': `${MODULE.ID}.theme.options.title.choices.ribbonGreen`,
		'ribbon-green-dark': `${MODULE.ID}.theme.options.title.choices.ribbonGreenDark`,
		'ribbon-navy': `${MODULE.ID}.theme.options.title.choices.ribbonNavy`,
		'ribbon-navy-purple': `${MODULE.ID}.theme.options.title.choices.ribbonNavyPurple`,
		'ribbon-orange': `${MODULE.ID}.theme.options.title.choices.ribbonOrange`,
		'ribbon-pink': `${MODULE.ID}.theme.options.title.choices.ribbonPink`,
		'ribbon-purple': `${MODULE.ID}.theme.options.title.choices.ribbonPurple`,
		'ribbon-red': `${MODULE.ID}.theme.options.title.choices.ribbonRed`,
		'ribbon-sky-blue': `${MODULE.ID}.theme.options.title.choices.ribbonSkyBlue`,
		'ribbon-yellow': `${MODULE.ID}.theme.options.title.choices.ribbonYellow`,
		'ribbon-yellow-green': `${MODULE.ID}.theme.options.title.choices.ribbonYellowGreen`
	};
	static #BACKGROUNDCHOICES = {
		'board': `${MODULE.ID}.theme.options.background.choices.board`,
		'stone': `${MODULE.ID}.theme.options.background.choices.stone`,
		'wood': `${MODULE.ID}.theme.options.background.choices.wood`,
		'wood-alt': `${MODULE.ID}.theme.options.background.choices.woodAlt`,
		'parchment': `${MODULE.ID}.theme.options.foreground.choices.parchment`,
		'parchment-with-nails': `${MODULE.ID}.theme.options.foreground.choices.parchment-with-nails`,
		'old-fabric': `${MODULE.ID}.theme.options.foreground.choices.oldFabric`
	};
	static #BUTTONSTYLES = {
		'--rpg-ui-button-rounded': `${MODULE.ID}.theme.options.buttonStyle.choices.rounded`,
		'--rpg-ui-button-circle': `${MODULE.ID}.theme.options.buttonStyle.choices.circle`,
		'--rpg-ui-button-border': `${MODULE.ID}.theme.options.buttonStyle.choices.border`
	};
	static #ICONBORDERSTYLES = {
		'--rpg-ui-icon-rounded-blue-border': `${MODULE.ID}.theme.options.iconBorderStyles.choices.blue`,
		'--rpg-ui-icon-rounded-brown-border': `${MODULE.ID}.theme.options.iconBorderStyles.choices.brown`,
		'--rpg-ui-icon-rounded-green-border': `${MODULE.ID}.theme.options.iconBorderStyles.choices.green`,
		'--rpg-ui-icon-rounded-red-border': `${MODULE.ID}.theme.options.iconBorderStyles.choices.red`,
		'--rpg-ui-icon-rounded-violet-border': `${MODULE.ID}.theme.options.iconBorderStyles.choices.violet`,
		'--rpg-ui-icon-rounded-white-border': `${MODULE.ID}.theme.options.iconBorderStyles.choices.white`
	}
	static #ICONOVERLAYSTYLES = {
		'--rpg-ui-icon-rounded-blue-overlay': `${MODULE.ID}.theme.options.iconOverlayStyles.choices.blue`,
		'--rpg-ui-icon-rounded-brown-overlay': `${MODULE.ID}.theme.options.iconOverlayStyles.choices.brown`,
		'--rpg-ui-icon-rounded-green-overlay': `${MODULE.ID}.theme.options.iconOverlayStyles.choices.green`,
		'--rpg-ui-icon-rounded-red-overlay': `${MODULE.ID}.theme.options.iconOverlayStyles.choices.red`,
		'--rpg-ui-icon-rounded-violet-overlay': `${MODULE.ID}.theme.options.iconOverlayStyles.choices.violet`,
		'--rpg-ui-icon-rounded-white-overlay': `${MODULE.ID}.theme.options.iconOverlayStyles.choices.white`
	}

	static get THEME() {
		return {
			id: MODULE.ID,
			title: MODULE.TITLE,
			libraryFantasyRPGUIDialogs: {
				name: `${MODULE.ID}.theme.library.dialogs.name`,
				hint: `${MODULE.ID}.theme.library.dialogs.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/dialogs.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-dialog-title': {
						name: `${MODULE.ID}.theme.options.title.name`,
						hint: `${MODULE.ID}.theme.options.title.hint`,
						type: 'choices',
						default: 'iron',
						format: 'var(--rpg-ui-title-{value})',
						choices: CORE.#TITLECHOICES
					},
					'--rpg-ui-dialog-background': {
						name: `${MODULE.ID}.theme.options.background.name`,
						hint: `${MODULE.ID}.theme.options.background.hint`,
						type: 'choices',
						default: 'stone',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-dialog-foreground': {
						name: `${MODULE.ID}.theme.options.foreground.name`,
						hint: `${MODULE.ID}.theme.options.foreground.hint`,
						type: 'choices',
						default: 'parchment',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					}
				}
			},
			libraryFantasyRPGUIJournals: {
				name: `${MODULE.ID}.theme.library.journals.name`,
				hint: `${MODULE.ID}.theme.library.journals.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/journals.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-journal-title': {
						name: `${MODULE.ID}.theme.options.title.name`,
						hint: `${MODULE.ID}.theme.options.title.hint`,
						type: 'choices',
						default: 'iron',
						format: 'var(--rpg-ui-title-{value})',
						choices: CORE.#TITLECHOICES
					},
					'libraryFantasyRPGUIJournalsHideHeaderButtons': {
						name: `${MODULE.ID}.theme.library.journals.hideHeaderButtons.name`,
						hint: `${MODULE.ID}.theme.library.journals.hideHeaderButtons.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/journals-hide-header-buttons.css`,
							type: 'text/css'
						}]
					},
					'--rpg-ui-journal-background-left': {
						name: `${MODULE.ID}.theme.library.journals.backgroundLeft.name`,
						hint: `${MODULE.ID}.theme.library.journals.backgroundLeft.hint`,
						type: 'choices',
						default: 'wood',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-journal-background-right': {
						name: `${MODULE.ID}.theme.library.journals.backgroundRight.name`,
						hint: `${MODULE.ID}.theme.library.journals.backgroundRight.hint`,
						type: 'choices',
						default: 'stone',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-journal-foreground': {
						name: `${MODULE.ID}.theme.options.foreground.name`,
						hint: `${MODULE.ID}.theme.options.foreground.hint`,
						type: 'choices',
						default: 'parchment',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					"--rpg-ui-journal-sidebar-directory-item": {
						name: `${MODULE.ID}.theme.library.journals.sidebar.directory-item.name`,
						hint: `${MODULE.ID}.theme.library.journals.sidebar.directory-item.hint`,
						type: 'choices',
						default: '--rpg-ui-content-board-1',
						format: 'var({value})',
						choices: {
							'--rpg-ui-content-board-1': `${MODULE.ID}.theme.options.content.choices.board1`,
							'--rpg-ui-content-board-2': `${MODULE.ID}.theme.options.content.choices.board2`
						}
					},
					'--rpg-ui-journal-header-ribbon': {
						name: `${MODULE.ID}.theme.library.journals.headerRibbon.name`,
						hint: `${MODULE.ID}.theme.library.journals.headerRibbon.hint`,
						type: 'choices',
						default: 'ribbon-purple',
						format: 'var(--rpg-ui-title-{value})',
						choices: Object.fromEntries(Object.entries(CORE.#TITLECHOICES).filter(([key, value]) => key.startsWith('ribbon')))
					}
				}
			},
			libraryFantasyRPGUIInterface: {
				name: `${MODULE.ID}.theme.library.interface.name`,
				hint: `${MODULE.ID}.theme.library.interface.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/interface.css`,
					type: 'text/css'
				}],
				settings: {
					libraryFantasyRPGUIInterfaceControls: {
						name: `${MODULE.ID}.theme.library.interface.controls.name`,
						hint: `${MODULE.ID}.theme.library.interface.controls.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/interface-controls.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-interface-controls-style-main': {
								name: `${MODULE.ID}.theme.library.interface.controls.mainStyle.name`,
								hint: `${MODULE.ID}.theme.library.interface.controls.mainStyle.hint`,
								type: 'choices',
								default: '--rpg-ui-button-rounded',
								format: 'var({value})',
								choices: CORE.#BUTTONSTYLES,
								onchange: (value) => {
									document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-main-pressed', `var(${value}-pressed)`);

									if (value == '--rpg-ui-button-border') {
										document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-main-padding', `0px`);
									}else{
										document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-main-padding', `4px`);
									}
								}
							},
							'--rpg-ui-interface-controls-style-sub': {
								name: `${MODULE.ID}.theme.library.interface.controls.subStyle.name`,
								hint: `${MODULE.ID}.theme.library.interface.controls.subStyle.hint`,
								type: 'choices',
								default: '--rpg-ui-button-circle',
								format: 'var({value})',
								choices: CORE.#BUTTONSTYLES,
								onchange: (value) => {
									document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-sub-pressed', `var(${value}-pressed)`);

									if (value == '--rpg-ui-button-border') {
										document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-sub-padding', `0px`);
									}else{
										document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-sub-padding', `4px`);
									}
								}
							},
							'--rpg-ui-interface-controls-style-toggle': {
								name: `${MODULE.ID}.theme.library.interface.controls.toggleStyle.name`,
								hint: `${MODULE.ID}.theme.library.interface.controls.toggleStyle.hint`,
								type: 'choices',
								default: '--rpg-ui-button-border',
								format: 'var({value})',
								choices: CORE.#BUTTONSTYLES,
								onchange: (value) => {
									document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-toggle-pressed', `var(${value}-pressed)`);

									if (value == '--rpg-ui-button-border') {
										document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-toggle-padding', `0px`);
									}else{
										document.querySelector(":root").style.setProperty('--rpg-ui-interface-controls-style-toggle-padding', `4px`);
									}
								}
							}
						}
					},
					libraryFantasyRPGUIInterfaceNavigation: {
						name: `${MODULE.ID}.theme.library.interface.navigation.name`,
						hint: `${MODULE.ID}.theme.library.interface.navigation.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/interface-navigation.css`,
							type: 'text/css'
						}]
					},
					libraryFantasyRPGUIInterfacePlayers: {
						name: `${MODULE.ID}.theme.library.interface.players.name`,
						hint: `${MODULE.ID}.theme.library.interface.players.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/interface-players.css`,
							type: 'text/css'
						}]
					},
					libraryFantasyRPGUIInterfaceHotbar: {
						name: `${MODULE.ID}.theme.library.interface.hotbar.name`,
						hint: `${MODULE.ID}.theme.library.interface.hotbar.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/interface-hotbar.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-interface-hotbar-macro-border': {
								name: `${MODULE.ID}.theme.library.interface.hotbar.macroBorder.name`,
								hint: `${MODULE.ID}.theme.library.interface.hotbar.macroBorder.hint`,
								type: 'choices',
								default: '--rpg-ui-icon-rounded-brown-border',
								format: 'var({value})',
								choices: CORE.#ICONBORDERSTYLES
							},
							'--rpg-ui-interface-hotbar-macro-overlay': {
								name: `${MODULE.ID}.theme.library.interface.hotbar.macroOverlay.name`,
								hint: `${MODULE.ID}.theme.library.interface.hotbar.macroOverlay.hint`,
								type: 'choices',
								default: '--rpg-ui-icon-rounded-violet-overlay',
								format: 'var({value})',
								choices: CORE.#ICONOVERLAYSTYLES
							}
						}
					}
				}
			},
			libraryFantasyRPGUISidebar: {
				name: `${MODULE.ID}.theme.library.sidebar.name`,
				hint: `${MODULE.ID}.theme.library.sidebar.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/sidebar.css`,
					type: 'text/css'
				}],
				settings: {
					libraryFantasyRPGUISidebarNav: {
						name: `${MODULE.ID}.theme.library.sidebar.nav.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.nav.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-nav.css`,
							type: 'text/css'
						}]
					},
					libraryFantasyRPGUISidebarChat: {
						name: `${MODULE.ID}.theme.library.sidebar.chat.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.chat.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-chat.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-background-chat': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							}
						}
					}
				}
			}
		}
	}

	static installAPI = () => {

	}

	static init = () => {
		this.installAPI();

		Hooks.once('ready', async () => {
			libWrapper.register(MODULE.ID, "JournalSheet.prototype.toggleSidebar", (wrapped, ...args) => {
				const target = args[0].target;
				const isCollapsed = !target.closest('.sidebar').classList.contains('collapsed');

				target.closest('.app.sheet.journal-sheet').classList.toggle(`${MODULE.ID}-is-collapsed`, isCollapsed);

				return wrapped(...args);
			}, "WRAPPER");
		});

		Hooks.on('renderJournalSheet', async (app, elem, options) => {
			const target = elem[0].classList.contains('.app') ? elem[0] : elem[0].closest('.app');
			const isCollapsed = target.querySelector('.sidebar').classList.contains('collapsed');

			target.classList.toggle(`${MODULE.ID}-is-collapsed`, isCollapsed);

			MODULE.log(app, elem, options);
		})
	}
}