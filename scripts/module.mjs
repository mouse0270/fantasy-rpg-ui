// GET REQUIRED LIBRARIES

// GET MODULE CORE
import { MODULE } from './_module.mjs';

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
		'old-fabric': `${MODULE.ID}.theme.options.foreground.choices.oldFabric`,
		'parchment-black': `${MODULE.ID}.theme.options.foreground.choices.parchmentBlack`,
		'parchment-blue': `${MODULE.ID}.theme.options.foreground.choices.parchmentBlue`,
		'parchment-dark-green': `${MODULE.ID}.theme.options.foreground.choices.parchmentDarkGreen`,
		'parchment-green': `${MODULE.ID}.theme.options.foreground.choices.parchmentGreen`,
		'parchment-navy': `${MODULE.ID}.theme.options.foreground.choices.parchmentNavy`,
		'parchment-navy-purple': `${MODULE.ID}.theme.options.foreground.choices.parchmentNavyPurple`,
		'parchment-orange': `${MODULE.ID}.theme.options.foreground.choices.parchmentOrange`,
		'parchment-pink': `${MODULE.ID}.theme.options.foreground.choices.parchmentPink`,
		'parchment-purple': `${MODULE.ID}.theme.options.foreground.choices.parchmentPurple`,
		'parchment-red': `${MODULE.ID}.theme.options.foreground.choices.parchmentRed`,
		'parchment-sky-blue': `${MODULE.ID}.theme.options.foreground.choices.parchmentSkyBlue`,
		'parchment-yellow': `${MODULE.ID}.theme.options.foreground.choices.parchmentYellow`,
		'parchment-yellow-green': `${MODULE.ID}.theme.options.foreground.choices.parchmentYellowGreen`
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
	static #INPUTCHECKBOXSTYLES = {
		'--rpg-ui-inputs-checkbox-checked-green': `${MODULE.ID}.theme.options.inputToggleStyles.choices.green`,
		'--rpg-ui-inputs-checkbox-checked-mint': `${MODULE.ID}.theme.options.inputToggleStyles.choices.mint`,
		'--rpg-ui-inputs-checkbox-checked-orange': `${MODULE.ID}.theme.options.inputToggleStyles.choices.orange`,
		'--rpg-ui-inputs-checkbox-checked-white': `${MODULE.ID}.theme.options.inputToggleStyles.choices.white`,
		'--rpg-ui-inputs-checkbox-checked-yellow': `${MODULE.ID}.theme.options.inputToggleStyles.choices.yellow`,
	};
	static #INPUTRADIOSTYLES = {
		'--rpg-ui-inputs-radio-checked-green': `${MODULE.ID}.theme.options.inputToggleStyles.choices.green`,
		'--rpg-ui-inputs-radio-checked-orange': `${MODULE.ID}.theme.options.inputToggleStyles.choices.orange`,
		'--rpg-ui-inputs-radio-checked-sky': `${MODULE.ID}.theme.options.inputToggleStyles.choices.sky`,
		'--rpg-ui-inputs-radio-checked-white': `${MODULE.ID}.theme.options.inputToggleStyles.choices.white`,
		'--rpg-ui-inputs-radio-checked-yellow': `${MODULE.ID}.theme.options.inputToggleStyles.choices.yellow`,
	}

	static get THEME() {
		let fantasyRPGUITheme = {
			id: MODULE.ID,
			title: MODULE.TITLE,
			libraryFantasyRPGUIGenericWindow: {
				name: `${MODULE.ID}.theme.library.genericWindow.name`,
				hint: `${MODULE.ID}.theme.library.genericWindow.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/generic-window.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-generic-title': {
						name: `${MODULE.ID}.theme.options.title.name`,
						hint: `${MODULE.ID}.theme.options.title.hint`,
						type: 'choices',
						default: 'iron',
						format: 'var(--rpg-ui-title-{value})',
						choices: CORE.#TITLECHOICES
					},
					'libraryFantasyRPGUIGenericWindowHideHeaderButtons': {
						name: `${MODULE.ID}.theme.options.hideHeaderButtons.name`,
						hint: `${MODULE.ID}.theme.options.hideHeaderButtons.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/hide-header-buttons.css`,
							type: 'text/css'
						}]
					},
					'--rpg-ui-generic-background': {
						name: `${MODULE.ID}.theme.options.background.name`,
						hint: `${MODULE.ID}.theme.options.background.hint`,
						type: 'choices',
						default: 'stone',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-generic-foreground': {
						name: `${MODULE.ID}.theme.options.foreground.name`,
						hint: `${MODULE.ID}.theme.options.foreground.hint`,
						type: 'choices',
						default: 'parchment',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					libraryFantasyRPGUIGenericWindowInputs: {
						name: `${MODULE.ID}.theme.library.genericWindow.inputs.name`,
						hint: `${MODULE.ID}.theme.library.genericWindow.inputs.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/generic-window-inputs.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-inputs-checkbox-color': {
								name: `${MODULE.ID}.theme.options.toggle.checkbox.name`,
								hint: `${MODULE.ID}.theme.options.toggle.checkbox.hint`,
								type: 'choices',
								default: '--rpg-ui-inputs-checkbox-checked-green',
								format: 'var({value})',
								choices: CORE.#INPUTCHECKBOXSTYLES
							},
							'--rpg-ui-inputs-radio-color': {
								name: `${MODULE.ID}.theme.options.toggle.radio.name`,
								hint: `${MODULE.ID}.theme.options.toggle.radio.hint`,
								type: 'choices',
								default: '--rpg-ui-inputs-radio-checked-green',
								format: 'var({value})',
								choices: CORE.#INPUTRADIOSTYLES
							}
						}
					}
				}
			},
			libraryFantasyRPGUISheetActor: {
				name: `${MODULE.ID}.theme.library.sheetActor.name`,
				hint: `${MODULE.ID}.theme.library.sheetActor.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/sheet-actor.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-sheet-actor-title': {
						name: `${MODULE.ID}.theme.options.title.name`,
						hint: `${MODULE.ID}.theme.options.title.hint`,
						type: 'choices',
						default: 'iron',
						format: 'var(--rpg-ui-title-{value})',
						choices: CORE.#TITLECHOICES
					},
					'libraryFantasyRPGUISheetActorHideHeaderButtons': {
						name: `${MODULE.ID}.theme.options.hideHeaderButtons.name`,
						hint: `${MODULE.ID}.theme.options.hideHeaderButtons.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sheet-actor-hide-header-buttons.css`,
							type: 'text/css'
						}]
					},
					'--rpg-ui-sheet-actor-background': {
						name: `${MODULE.ID}.theme.options.background.name`,
						hint: `${MODULE.ID}.theme.options.background.hint`,
						type: 'choices',
						default: 'stone',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-sheet-actor-foreground': {
						name: `${MODULE.ID}.theme.options.foreground.name`,
						hint: `${MODULE.ID}.theme.options.foreground.hint`,
						type: 'choices',
						default: 'parchment',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					}
				}
			},
			libraryFantasyRPGUIProseMirror: {
				name: `${MODULE.ID}.theme.library.proseMirror.name`,
				hint: `${MODULE.ID}.theme.library.proseMirror.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/prosemirror.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-prosemirror-button-style': {
						name: `${MODULE.ID}.theme.library.proseMirror.buttonStyle.name`,
						hint: `${MODULE.ID}.theme.library.proseMirror.buttonStyle.hint`,
						type: 'choices',
						default: '--rpg-ui-button-rounded',
						format: 'var({value})',
						choices: Object.fromEntries(Object.entries(CORE.#BUTTONSTYLES).filter(([key, value]) => !key.endsWith('border')))
					}
				}
			},
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
						name: `${MODULE.ID}.theme.options.hideHeaderButtons.name`,
						hint: `${MODULE.ID}.theme.options.hideHeaderButtons.hint`,
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
					'--rpg-ui-interface-logo': {
						name: `${MODULE.ID}.theme.library.interface.logo.name`,
						hint: `${MODULE.ID}.theme.library.interface.logo.hint`,
						type: 'background',
						default: {
							url: 'var(--rpg-ui-logo)'
						}
					},
					'--rpg-ui-interface-logo-margin': {
						name: `${MODULE.ID}.theme.library.interface.logo.margin.name`,
						hint: `${MODULE.ID}.theme.library.interface.logo.margin.hint`,
						type: 'number',
						default: '35px',
						"range": {
							"min": 0,
							"max": 100
						}
					},
					'--rpg-ui-interface-logo-width': {
						name: `${MODULE.ID}.theme.library.interface.logo.width.name`,
						hint: `${MODULE.ID}.theme.library.interface.logo.width.hint`,
						type: 'number',
						default: '50px',
						"range": {
							"min": 25,
							"max": 150
						}
					},
					'--rpg-ui-interface-logo-rotation': {
						name: `${MODULE.ID}.theme.library.interface.logo.rotation.name`,
						hint: `${MODULE.ID}.theme.library.interface.logo.rotation.hint`,
						type: 'number',
						default: '90deg',
						format: 'rotate({value})',
						"range": {
							"min": 0,
							"max": 360
						}
					},
					'--rpg-ui-interface-pause-img': {
						name: `${MODULE.ID}.theme.library.interface.pause.logo.name`,
						hint: `${MODULE.ID}.theme.library.interface.pause.logo.hint`,
						type: 'background',
						default: {
							url: 'var(--rpg-ui-logo)'
						}
					},
					'--rpg-ui-interface-pause-img-opacity': {
						name: `${MODULE.ID}.theme.library.interface.pause.opacity.name`,
						hint: `${MODULE.ID}.theme.library.interface.pause.opacity.hint`,
						type: 'number',
						default: '0.5',
						"range": {
							"min": 0,
							"max": 1,
							"step": 0.01
						}
					},
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
								choices: CORE.#BUTTONSTYLES
							},
							'--rpg-ui-interface-controls-style-sub': {
								name: `${MODULE.ID}.theme.library.interface.controls.subStyle.name`,
								hint: `${MODULE.ID}.theme.library.interface.controls.subStyle.hint`,
								type: 'choices',
								default: '--rpg-ui-button-circle',
								format: 'var({value})',
								choices: CORE.#BUTTONSTYLES
							},
							'--rpg-ui-interface-controls-style-toggle': {
								name: `${MODULE.ID}.theme.library.interface.controls.toggleStyle.name`,
								hint: `${MODULE.ID}.theme.library.interface.controls.toggleStyle.hint`,
								type: 'choices',
								default: '--rpg-ui-button-border',
								format: 'var({value})',
								choices: CORE.#BUTTONSTYLES
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
							'--rpg-ui-sidebar-chat-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							},
							libraryFantasyRPGUISidebarChatMessages: {
								name: `${MODULE.ID}.theme.library.sidebar.chat.messages.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.chat.messages.hint`,
								type: 'library',
								default: false,
								files: [{
									name: `./modules/${MODULE.ID}/styles/sidebar-chat-messages.css`,
									type: 'text/css'
								}],
								settings: {
									'--rpg-ui-sidebar-chat-messages-background': {
										name: `${MODULE.ID}.theme.library.sidebar.chat.messages.background.name`,
										hint: `${MODULE.ID}.theme.library.sidebar.chat.messages.background.hint`,
										type: 'choices',
										default: 'parchment',
										format: 'var(--rpg-ui-background-{value})',
										choices: CORE.#BACKGROUNDCHOICES
									},
									'--rpg-ui-sidebar-chat-messages-background-whisper': {
										name: `${MODULE.ID}.theme.library.sidebar.chat.messages.background.whisper.name`,
										hint: `${MODULE.ID}.theme.library.sidebar.chat.messages.background.whisper.hint`,
										type: 'choices',
										default: 'parchment-purple',
										format: 'var(--rpg-ui-background-{value})',
										choices: CORE.#BACKGROUNDCHOICES
									},
									'--rpg-ui-sidebar-chat-messages-background-blind': {
										name: `${MODULE.ID}.theme.library.sidebar.chat.messages.background.blind.name`,
										hint: `${MODULE.ID}.theme.library.sidebar.chat.messages.background.blind.hint`,
										type: 'choices',
										default: 'parchment-black',
										format: 'var(--rpg-ui-background-{value})',
										choices: CORE.#BACKGROUNDCHOICES
									}
								}
							}
						}
					},
					libraryFantasyRPGUISidebarCombat: {
						name: `${MODULE.ID}.theme.library.sidebar.combat.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.combat.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-combat.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-combat-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							},
							'--rpg-ui-sidebar-combat-button-style': {
								name: `${MODULE.ID}.theme.library.sidebar.combat.buttonStyle.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.combat.buttonStyle.hint`,
								type: 'choices',
								default: '--rpg-ui-button-rounded',
								format: 'var({value})',
								choices: CORE.#BUTTONSTYLES
							},
							'--rpg-ui-sidebar-combat-combatant-inactive-opacity': {
								name: `${MODULE.ID}.theme.library.sidebar.combat.combatant.inactiveOpacity.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.combat.combatant.inactiveOpacity.hint`,
								type: 'number',
								default: 0.7,
								range: {
									min: 0,
									max: 1,
									step: 0.05
								}
							}
						}
					},
					libraryFantasyRPGUISidebarScenes: {
						name: `${MODULE.ID}.theme.library.sidebar.scenes.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.scenes.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-scenes.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-scenes-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							},
							libraryFantasyRPGUISidebarScenesCompact: {
								name: `${MODULE.ID}.theme.library.sidebar.options.compact.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.options.compact.hint`,
								type: 'library',
								default: false,
								files: [{
									name: `./modules/${MODULE.ID}/styles/sidebar-scenes-compact.css`,
									type: 'text/css'
								}],
							}
						}
					},
					libraryFantasyRPGUISidebarActors: {
						name: `${MODULE.ID}.theme.library.sidebar.actors.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.actors.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-actors.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-actors-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							}
						}
					},
					libraryFantasyRPGUISidebarItems: {
						name: `${MODULE.ID}.theme.library.sidebar.items.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.items.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-items.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-items-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							}
						}
					},
					libraryFantasyRPGUISidebarJournal: {
						name: `${MODULE.ID}.theme.library.sidebar.journal.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.journal.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-journal.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-journal-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							}
						}
					},
					libraryFantasyRPGUISidebarTables: {
						name: `${MODULE.ID}.theme.library.sidebar.tables.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.tables.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-tables.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-tables-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							}
						}
					},
					libraryFantasyRPGUISidebarCards: {
						name: `${MODULE.ID}.theme.library.sidebar.cards.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.cards.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-cards.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-cards-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							}
						}
					},
					libraryFantasyRPGUISidebarPlaylists: {
						name: `${MODULE.ID}.theme.library.sidebar.playlists.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.playlists.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-playlists.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-playlists-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							}
						}
					},
					libraryFantasyRPGUISidebarCompendium: {
						name: `${MODULE.ID}.theme.library.sidebar.compendium.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.compendium.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-compendium.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-compendium-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							},
							'--rpg-ui-sidebar-compendium-ribbon': {
								name: `${MODULE.ID}.theme.library.sidebar.compendium.ribbon.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.compendium.ribbon.hint`,
								type: 'choices',
								default: 'ribbon-purple',
								format: 'var(--rpg-ui-title-{value})',
								choices: Object.fromEntries(Object.entries(CORE.#TITLECHOICES).filter(([key, value]) => key.startsWith('ribbon')))
							}
						}
					},
					libraryFantasyRPGUISidebarSettings: {
						name: `${MODULE.ID}.theme.library.sidebar.settings.name`,
						hint: `${MODULE.ID}.theme.library.sidebar.settings.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/sidebar-settings.css`,
							type: 'text/css'
						}],
						settings: {
							'--rpg-ui-sidebar-settings-background': {
								name: `${MODULE.ID}.theme.options.background.name`,
								hint: `${MODULE.ID}.theme.options.background.hint`,
								type: 'choices',
								default: 'stone',
								format: 'var(--rpg-ui-background-{value})',
								choices: CORE.#BACKGROUNDCHOICES
							},
							'--rpg-ui-sidebar-settings-ribbon-general-info': {
								name: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.generalInfo.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.generalInfo.hint`,
								type: 'choices',
								default: 'ribbon-purple',
								format: 'var(--rpg-ui-title-{value})',
								choices: Object.fromEntries(Object.entries(CORE.#TITLECHOICES).filter(([key, value]) => key.startsWith('ribbon')))
							},
							'--rpg-ui-sidebar-settings-ribbon-game-settings': {
								name: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.gameSettings.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.gameSettings.hint`,
								type: 'choices',
								default: 'ribbon-purple',
								format: 'var(--rpg-ui-title-{value})',
								choices: Object.fromEntries(Object.entries(CORE.#TITLECHOICES).filter(([key, value]) => key.startsWith('ribbon')))
							},
							'--rpg-ui-sidebar-settings-ribbon-help-and-documentation': {
								name: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.helpAndDocumentation.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.helpAndDocumentation.hint`,
								type: 'choices',
								default: 'ribbon-purple',
								format: 'var(--rpg-ui-title-{value})',
								choices: Object.fromEntries(Object.entries(CORE.#TITLECHOICES).filter(([key, value]) => key.startsWith('ribbon')))
							},
							'--rpg-ui-sidebar-settings-ribbon-game-access': {
								name: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.gameAccess.name`,
								hint: `${MODULE.ID}.theme.library.sidebar.settings.ribbon.gameAccess.hint`,
								type: 'choices',
								default: 'ribbon-purple',
								format: 'var(--rpg-ui-title-{value})',
								choices: Object.fromEntries(Object.entries(CORE.#TITLECHOICES).filter(([key, value]) => key.startsWith('ribbon')))
							}
						}
					}
				}
			}
		}

		if ((game.system.id ?? '') == 'pf2e') {
			fantasyRPGUITheme['libraryFantasyRPGUISidebar']['settings']['libraryFantasyRPGUISidebarSettings']['settings']['--rpg-ui-sidebar-settings-ribbon-pf2e'] = {
				name: `${MODULE.ID}.theme.library.system.pf2e.sidebar.settings.ribbon.pf2e.name`,
				hint: `${MODULE.ID}.theme.library.system.pf2e.sidebar.settings.ribbon.pf2e.hint`,
				type: 'choices',
				default: 'ribbon-purple',
				format: 'var(--rpg-ui-title-{value})',
				choices: Object.fromEntries(Object.entries(CORE.#TITLECHOICES).filter(([key, value]) => key.startsWith('ribbon')))
			};

			fantasyRPGUITheme['libraryFantasyRPGUISystemPF2e'] = {
				name: `${MODULE.ID}.theme.library.system.pf2e.name`,
				hint: `${MODULE.ID}.theme.library.system.pf2e.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/system-pf2e.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-system-pf2e-actor-character-background': {
						name: `${MODULE.ID}.theme.options.background.name`,
						hint: `${MODULE.ID}.theme.options.background.hint`,
						type: 'choices',
						default: 'stone',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-system-pf2e-actor-character-foreground': {
						name: `${MODULE.ID}.theme.options.foreground.name`,
						hint: `${MODULE.ID}.theme.options.foreground.hint`,
						type: 'choices',
						default: 'parchment',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-system-pf2e-actor-character-nav-button-style': {
						name: `${MODULE.ID}.theme.library.system.pf2e.actor.nav.buttonStyle.name`,
						hint: `${MODULE.ID}.theme.library.system.pf2e.actor.nav.buttonStyle.hint`,
						type: 'choices',
						default: '--rpg-ui-button-circle',
						format: 'var({value})',
						choices: Object.fromEntries(Object.entries(CORE.#BUTTONSTYLES).filter(([key, value]) => !key.endsWith('border')))
					}					
				}
			}
		}

		if (game.modules.get('betterrolls-swade2')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesBetterrollsSWADE2'] = {
				name: `${MODULE.ID}.theme.library.modules.betterrolls-swade2.name`,
				hint: `${MODULE.ID}.theme.library.modules.betterrolls-swade2.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-betterrolls-swade2.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-module-sidebar-betterrolls-swade2-background': {
						name: `${MODULE.ID}.theme.options.background.name`,
						hint: `${MODULE.ID}.theme.options.background.hint`,
						type: 'choices',
						default: 'wood',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					}
				}
			}
		}

		if (game.modules.get('forien-quest-log')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesForienQuestLog'] = {
				name: `${MODULE.ID}.theme.library.modules.forien-quest-log.name`,
				hint: `${MODULE.ID}.theme.library.modules.forien-quest-log.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-forien-quest-log.css`,
					type: 'text/css'
				}],
				settings: {
					'--rpg-ui-module-forien-quest-log-background': {
						name: `${MODULE.ID}.theme.options.background.name`,
						hint: `${MODULE.ID}.theme.options.background.hint`,
						type: 'choices',
						default: 'stone',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'--rpg-ui-module-forien-quest-log-foreground': {
						name: `${MODULE.ID}.theme.options.foreground.name`,
						hint: `${MODULE.ID}.theme.options.foreground.hint`,
						type: 'choices',
						default: 'parchment',
						format: 'var(--rpg-ui-background-{value})',
						choices: CORE.#BACKGROUNDCHOICES
					},
					'libraryFantasyRPGUIModulesForienQuestLogHideHeaderButtons': {
						name: `${MODULE.ID}.theme.options.hideHeaderButtons.name`,
						hint: `${MODULE.ID}.theme.options.hideHeaderButtons.hint`,
						type: 'library',
						default: false,
						files: [{
							name: `./modules/${MODULE.ID}/styles/module-forien-quest-log-hide-header-buttons.css`,
							type: 'text/css'
						}]
					}
				}
			}
		}

		if (game.modules.get('always-hp')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesAlwaysHP'] = {
				name: `${MODULE.ID}.theme.library.modules.always-hp.name`,
				hint: `${MODULE.ID}.theme.library.modules.always-hp.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-always-hp.css`,
					type: 'text/css'
				}]
			}
		}

		if (game.modules.get('foundry-taskbar')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesFoundryTaskbar'] = {
				name: `${MODULE.ID}.theme.library.modules.foundry-taskbar.name`,
				hint: `${MODULE.ID}.theme.library.modules.foundry-taskbar.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-foundry-taskbar.css`,
					type: 'text/css'
				}]
			}
		}

		if (game.modules.get('monks-enhanced-journal')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesMonksEnhancedJournal'] = {
				name: `${MODULE.ID}.theme.library.modules.monks-enhanced-journal.name`,
				hint: `${MODULE.ID}.theme.library.modules.monks-enhanced-journal.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-monks-enhanced-journal.css`,
					type: 'text/css'
				}]
			}
		}

		if (game.modules.get('monks-scene-navigation')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesMonksSceneNavigation'] = {
				name: `${MODULE.ID}.theme.library.modules.monks-scene-navigation.name`,
				hint: `${MODULE.ID}.theme.library.modules.monks-scene-navigation.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-monks-scene-navigation.css`,
					type: 'text/css'
				}]
			}
		}

		if (game.modules.get('monks-hotbar-expansion')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesMonksHotbarExpansion'] = {
				name: `${MODULE.ID}.theme.library.modules.monks-hotbar-expansion.name`,
				hint: `${MODULE.ID}.theme.library.modules.monks-hotbar-expansion.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-monks-hotbar-expansion.css`,
					type: 'text/css'
				}]
			}
		}

		if (game.modules.get('window-controls')?.active ?? false) {
			fantasyRPGUITheme['libraryFantasyRPGUIModulesWindowControls'] = {
				name: `${MODULE.ID}.theme.library.modules.window-controls.name`,
				hint: `${MODULE.ID}.theme.library.modules.window-controls.hint`,
				type: 'library',
				default: false,
				files: [{
					name: `./modules/${MODULE.ID}/styles/module-window-controls.css`,
					type: 'text/css'
				}]
			}
		}

		return fantasyRPGUITheme;
	}

	static installAPI = () => {

	}

	static init = () => {
		this.installAPI();

		Hooks.once('ready', async () => {
			// Kick out if Monks Enhanced Journal
			if (game.modules.get('monks-enhanced-journal')?.active ?? false) return;
			libWrapper.register(MODULE.ID, "JournalSheet.prototype.toggleSidebar", (wrapped, ...args) => {
				const target = args[0].target;
				const isCollapsed = !target.closest('.sidebar').classList.contains('collapsed');

				target.closest('.app.sheet.journal-sheet').classList.toggle(`${MODULE.ID}-is-collapsed`, isCollapsed);

				return wrapped(...args);
			}, "WRAPPER");
		});

		Hooks.on('renderJournalSheet', async (app, elem, options) => {
			// Kick out if Monks Enhanced Journal
			if (game.modules.get('monks-enhanced-journal')?.active ?? false) return;
			const target = elem[0].classList.contains('.app') ? elem[0] : elem[0].closest('.app');
			const isCollapsed = target.querySelector('.sidebar').classList.contains('collapsed');

			target.classList.toggle(`${MODULE.ID}-is-collapsed`, isCollapsed);
		});

		Hooks.on('lib-themer.UpdateSetting', async (setting, key, value) => {
			const checkFor = [
				'--rpg-ui-interface-controls-style-main', 
				'--rpg-ui-interface-controls-style-sub', 
				'--rpg-ui-interface-controls-style-toggle', 
				'--rpg-ui-sidebar-combat-button-style',
				'--rpg-ui-prosemirror-button-style',

				// SYSTEM SUPPORT - PF2E
				'--rpg-ui-system-pf2e-actor-character-nav-button-style'
			];

			if (checkFor.includes(key)) {
				game.modules.get('lib-themer').API.setCSSVariable(`${key}-pressed`, `var(${value}-pressed)`);

				if (value == '--rpg-ui-button-border') {
					game.modules.get('lib-themer').API.setCSSVariable(`${key}-padding`, `0px`);
				}else{
					game.modules.get('lib-themer').API.setCSSVariable(`${key}-padding`, `4px`);
				}
			}
		})
	}
}