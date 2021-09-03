import data from '../data/data.json';

export interface Doc {
	id: number;
	name: string;
	tags: string[];
	type: string;
	url: string;
}

export function getDocumentationData(): Array<Doc> {
	if (data?.docs) {
		return data.docs as Doc[];
	}

	return [];
}
