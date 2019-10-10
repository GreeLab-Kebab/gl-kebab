#!/bin/sh

readonly GIT_REMOTE_URL_GL_KEBAB_R="git@github.com:GreeLab-Kebab/gl-kebab-r.git"
readonly GIT_REMOTE_URL_GL_KEBAB_SCRAPER=""
readonly GIT_REMOTE_URL_LACUNA_V2=""
readonly GIT_REMOTE_URL_ANDROID_RUNNER=""

readonly LOCAL_NAME_GL_KEBAB_R="gl-kebab-r"
readonly LOCAL_NAME_GL_KEBAB_SCRAPER="gl-kebab-scraper"
readonly LOCAL_NAME_LACUNA_V2="lacuna-v2"
readonly LOCAL_NAME_ANDROID_RUNNER="android-runner"

readonly SUBTREE_BASE_DIR="packages"
readonly GL_KEBAB_R="${SUBTREE_BASE_DIR}/${LOCAL_NAME_GL_KEBAB_R}"
readonly GL_KEBAB_SCRAPER="${SUBTREE_BASE_DIR}/${LOCAL_NAME_GL_KEBAB_SCRAPER}"
readonly LACUNA_V2="${SUBTREE_BASE_DIR}/${LOCAL_NAME_LACUNA_V2}"
readonly ANDROID_RUNNER="${SUBTREE_BASE_DIR}/${LOCAL_NAME_ANDROID_RUNNER}"

unset_git_remote(){
    echo "Removing ${LOCAL_NAME_GL_KEBAB_R}, ${LOCAL_NAME_GL_KEBAB_SCRAPER}, ${LOCAL_NAME_LACUNA_V2}, ${LOCAL_NAME_ANDROID_RUNNER}"
    git remote remove $LOCAL_NAME_GL_KEBAB_R
    git remote remove $LOCAL_NAME_GL_KEBAB_SCRAPER
    git remote remove $LOCAL_NAME_LACUNA_V2
    git remote remove $LOCAL_NAME_ANDROID_RUNNER
}

set_git_remote(){
    echo "seting remote ${LOCAL_NAME_GL_KEBAB_R}, ${LOCAL_NAME_GL_KEBAB_SCRAPER}, ${LOCAL_NAME_LACUNA_V2}, ${LOCAL_NAME_ANDROID_RUNNER}"
    git remote add $LOCAL_NAME_GL_KEBAB_R $GIT_REMOTE_URL_GL_KEBAB_R
    git remote add $LOCAL_NAME_GL_KEBAB_SCRAPER $GIT_REMOTE_URL_GL_KEBAB_SCRAPER
    git remote add $LOCAL_NAME_LACUNA_V2 $GIT_REMOTE_URL_LACUNA_V2
    git remote add $LOCAL_NAME_ANDROID_RUNNER $GIT_REMOTE_URL_ANDROID_RUNNER
}

pull_subtrees(){
    echo "Start updating subtrees..."
    git subtree add --prefix=$GL_KEBAB_R --squash $LOCAL_NAME_GL_KEBAB_R master
    git subtree add --prefix=$GL_KEBAB_SCRAPER --squash $LOCAL_NAME_GL_KEBAB_SCRAPER master
    git subtree add --prefix=$LACUNA_V2 --squash $LOCAL_NAME_LACUNA_V2 master
    git subtree add --prefix=$ANDROID_RUNNER --squash $LOCAL_NAME_ANDROID_RUNNER master
}

# Allow functions to be executed from bash
"$@"