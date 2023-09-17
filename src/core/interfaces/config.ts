export interface ENV {
	SECRET: string | undefined,
	DATABASE: string | undefined,
	USER: string | undefined,
	PASSWORD: string | undefined,
	SERVERHOST: string | undefined,
	SERVERPORT: string | number | undefined,
	DBHOST: string | undefined,
	DBPORT: string | number | undefined
}

export type Config = Required<ENV>