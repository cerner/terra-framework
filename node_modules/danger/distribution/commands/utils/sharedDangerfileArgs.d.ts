import program from "commander";
export interface SharedCLI extends program.CommanderStatic {
    /** Should we be posting as much info as possible? */
    verbose: boolean;
    /** Output to STDOUT instead of leaving a comment */
    textOnly: boolean;
    /** Use a custom file for the CI provider instead of a built-in one */
    externalCiProvider?: string;
    /** Where is the file? can be local or remote GH url  */
    dangerfile?: string;
    /** The Danger run ID, so you can have many runs */
    id?: string;
    /** Run in a repl? */
    repl?: string;
    /** Use a custom file for the CI provider instead of a built-in one */
    process?: string;
    /** Use a URL to send in the DSL instead of just STDIN */
    passURLForDSL?: boolean;
    /** Fail if there are fails in the danger report */
    failOnErrors: boolean;
    /** Use GitHub Checks */
    useGithubChecks: boolean;
    /** Ignore inline-comments that are in lines which were not changed */
    ignoreOutOfDiffComments: boolean;
    /** Makes Danger post a new comment instead of editing its previous one */
    newComment?: boolean;
    /** Removes all previous comment and create a new one in the end of the list */
    removePreviousComments?: boolean;
    /** Output JSON to STDOUT */
    outputJSON: boolean;
}
declare const _default: (command: any) => any;
export default _default;
