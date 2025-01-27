import type { HtmlLanguageServiceContext } from '../types';
import type * as vscode from 'vscode-languageserver-protocol';
import type { TextDocument } from 'vscode-languageserver-textdocument';

export function register({ getHtmlDocument, htmlLs }: HtmlLanguageServiceContext) {
	return (document: TextDocument, position: vscode.Position): string | undefined | null => {
		const htmlDoc = getHtmlDocument(document);
		if (htmlDoc) {
			return htmlLs.doQuoteComplete(document, position, htmlDoc);
		}
	}
}
