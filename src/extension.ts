import * as vscode from 'vscode';
import TrollGitMerge from './util/TrollGitMerge';
import TrollGitMergeController from './util/TrollGitMergeController';

export function activate(context: vscode.ExtensionContext) {

	const gitMerge = new TrollGitMerge();
	const gitMergeController = new TrollGitMergeController(gitMerge);
	gitMergeController.activate();

}

export function deactivate() {}
