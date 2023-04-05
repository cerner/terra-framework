"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReference = exports.createACommit = exports.createTree = exports.filepathContentsMapToUpdateGitHubBranch = exports.memFSToGitHubCommits = void 0;
/**
 * Creates a bunch of blobs, wraps them in a tree, updates a reference from a memfs volume
 */
const memFSToGitHubCommits = (api, volume, settings) => __awaiter(void 0, void 0, void 0, function* () {
    const fileMap = volume.toJSON();
    return (0, exports.filepathContentsMapToUpdateGitHubBranch)(api, fileMap, settings);
});
exports.memFSToGitHubCommits = memFSToGitHubCommits;
/**
 * Creates a bunch of blobs, wraps them in a tree, updates a reference from a map of files to contents
 */
const filepathContentsMapToUpdateGitHubBranch = (api, fileMap, settings) => __awaiter(void 0, void 0, void 0, function* () {
    const getSha = yield shaForBranch(api, settings);
    const baseSha = getSha.data.object.sha;
    const tree = yield (0, exports.createTree)(api, settings)(fileMap, baseSha);
    const commit = yield (0, exports.createACommit)(api, settings)(tree.sha, baseSha);
    yield (0, exports.updateReference)(api, settings)(commit.data.sha);
});
exports.filepathContentsMapToUpdateGitHubBranch = filepathContentsMapToUpdateGitHubBranch;
/** If we want to make a commit, or update a reference, we'll need the original commit */
const shaForBranch = (api, settings) => __awaiter(void 0, void 0, void 0, function* () {
    return api.git.getRef({
        owner: settings.owner,
        repo: settings.repo,
        ref: settings.fullBaseBranch || "heads/master"
    });
});
/**
 * A Git tree object creates the hierarchy between files in a Git repository. To create a tree
 * we need to make a list of blobs (which represent changes to the FS)
 *
 * We want to build on top of the tree that already exists at the last sha
 *
 * https://developer.github.com/v3/git/trees/
 */
const createTree = (api, settings) => (fileMap, baseSha) => __awaiter(void 0, void 0, void 0, function* () {
    const blobSettings = { owner: settings.owner, repo: settings.repo };
    const createBlobs = Object.keys(fileMap).map(filename => api.git.createBlob(Object.assign(Object.assign({}, blobSettings), { content: fileMap[filename] })).then((blob) => ({
        sha: blob.data.sha,
        path: filename,
        mode: "100644",
        type: "blob"
    })));
    const blobs = yield Promise.all(createBlobs);
    const tree = yield api.git.createTree(Object.assign(Object.assign({}, blobSettings), { tree: blobs, base_tree: baseSha }));
    return tree.data;
});
exports.createTree = createTree;
/**
 * A Git commit is a snapshot of the hierarchy (Git tree) and the contents of the files (Git blob) in a Git repository
 *
 * https://developer.github.com/v3/git/commits/
 */
const createACommit = (api, settings) => (treeSha, parentSha) => api.git.createCommit({
    owner: settings.owner,
    repo: settings.repo,
    message: settings.message,
    tree: treeSha,
    parents: [parentSha]
});
exports.createACommit = createACommit;
/**
 * A Git reference (git ref) is just a file that contains a Git commit SHA-1 hash. When referring
 * to a Git commit, you can use the Git reference, which is an easy-to-remember name, rather than
 * the hash. The Git reference can be rewritten to point to a new commit.
 *
 * https://developer.github.com/v3/git/refs/#git-references
 */
const updateReference = (api, settings) => (newSha) => __awaiter(void 0, void 0, void 0, function* () {
    const refSettings = {
        owner: settings.owner,
        repo: settings.repo,
        ref: `refs/${settings.fullBranchReference}`
    };
    try {
        yield api.git.getRef(refSettings);
        // It must exist, so we should update it
        return api.git.createRef(Object.assign(Object.assign({}, refSettings), { sha: newSha }));
    }
    catch (error) {
        // We have to create the reference because it doesn't exist yet
        return api.git.createRef(Object.assign(Object.assign({}, refSettings), { sha: newSha }));
    }
});
exports.updateReference = updateReference;
