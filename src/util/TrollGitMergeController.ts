import { window } from "vscode";
import TrollGitMerge from "./TrollGitMerge";

export default class TrollGitMergeController{
    private _gitMerge: TrollGitMerge;

    constructor(gitMerge: TrollGitMerge){
        this._gitMerge = gitMerge;
    }

    public activate(){
        window.onDidChangeTextEditorSelection(this._onEvent, this);
    }

    private _onEvent(){
        this._gitMerge.replace();
    }
}