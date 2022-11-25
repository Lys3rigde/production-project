// адрес страницы позиция скроллы
export type ScrollSchema = Record<string, number>

export interface ScrollSaveSchema {
	scroll: ScrollSchema;
}
