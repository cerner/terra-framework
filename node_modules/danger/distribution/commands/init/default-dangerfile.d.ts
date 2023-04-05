import { InitState } from "./interfaces";
export declare const generateDefaultDangerfile: (state: InitState) => any;
export declare const formatDangerfile: (dangerfile: string, dangerfileState: any) => any;
export declare const createImport: (state: InitState) => "import {danger, warn} from 'danger'" | "const {danger, warn} = require('danger')";
export declare const changelogRule = "\n// Check for a CHANGELOG entry\nconst hasChangelog = danger.git.modified_files.some(f => f === 'CHANGELOG.md')\nconst description = danger.github.pr.body + danger.github.pr.title\nconst isTrivial = description.includes('#trivial')\n\nif (!hasChangelog && !isTrivial) {\n  warn('Please add a changelog entry for your changes.')\n}\n";
export declare const descriptionRule = "\n// No PR is too small to include a description of why you made a change\nif (danger.github.pr.body.length < 10) {\n  warn('Please include a description of your PR changes.');\n}\n";
export declare const assignSomeone = "\n// Check that someone has been assigned to this PR\nif (danger.github.pr.assignee === null) {\n   warn('Please assign someone to merge this PR, and optionally include people who should review.');\n}\n";
export declare const checkSeparateTestsFolder: (src: string, tests: string) => string;
