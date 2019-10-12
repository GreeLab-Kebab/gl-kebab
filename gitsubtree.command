#!/bin/sh

readonly GIT_REMOTE_URL_GL_KEBAB_R="git@github.com:GreeLab-Kebab/gl-kebab-r.git"
readonly GIT_REMOTE_URL_GL_KEBAB_MOBILE_WEB_APPS=""
readonly GIT_REMOTE_URL_LACUNA_V2=""
readonly GIT_REMOTE_URL_ANDROID_RUNNER=""

readonly LOCAL_NAME_GL_KEBAB_R="gl-kebab-r"
readonly LOCAL_NAME_GL_KEBAB_MOBILE_WEB_APPS="gl-kebab-mobile-web-apps"
readonly LOCAL_NAME_LACUNA_V2="lacuna-v2"
readonly LOCAL_NAME_ANDROID_RUNNER="android-runner"

readonly SUBTREE_BASE_DIR="packages"
readonly GL_KEBAB_R="${SUBTREE_BASE_DIR}/${LOCAL_NAME_GL_KEBAB_R}"
readonly GL_KEBAB_MOBILE_WEB_APPS="${SUBTREE_BASE_DIR}/${LOCAL_NAME_GL_KEBAB_MOBILE_WEB_APPS}"
readonly LACUNA_V2="${SUBTREE_BASE_DIR}/${LOCAL_NAME_LACUNA_V2}"
readonly ANDROID_RUNNER="${SUBTREE_BASE_DIR}/${LOCAL_NAME_ANDROID_RUNNER}"

unset_git_remote(){
    echo "Removing ${LOCAL_NAME_GL_KEBAB_R}, ${LOCAL_NAME_GL_KEBAB_MOBILE_WEB_APPS}, ${LOCAL_NAME_LACUNA_V2}, ${LOCAL_NAME_ANDROID_RUNNER}"
    git remote remove $LOCAL_NAME_GL_KEBAB_R
    git remote remove $LOCAL_NAME_GL_KEBAB_MOBILE_WEB_APPS
    git remote remove $LOCAL_NAME_LACUNA_V2
    git remote remove $LOCAL_NAME_ANDROID_RUNNER
}

set_git_remote(){
    echo "seting remote ${LOCAL_NAME_GL_KEBAB_R}, ${LOCAL_NAME_GL_KEBAB_MOBILE_WEB_APPS}, ${LOCAL_NAME_LACUNA_V2}, ${LOCAL_NAME_ANDROID_RUNNER}"
    git remote add $LOCAL_NAME_GL_KEBAB_R $GIT_REMOTE_URL_GL_KEBAB_R
    git remote add $LOCAL_NAME_GL_KEBAB_MOBILE_WEB_APPS $GIT_REMOTE_URL_GL_KEBAB_MOBILE_WEB_APPS
    git remote add $LOCAL_NAME_LACUNA_V2 $GIT_REMOTE_URL_LACUNA_V2
    git remote add $LOCAL_NAME_ANDROID_RUNNER $GIT_REMOTE_URL_ANDROID_RUNNER
}

pull_subtrees(){
    echo "Start updating subtrees..."
    git subtree add --prefix=$GL_KEBAB_R --squash $LOCAL_NAME_GL_KEBAB_R master
    git subtree add --prefix=$GL_KEBAB_MOBILE_WEB_APPS --squash $LOCAL_NAME_GL_KEBAB_MOBILE_WEB_APPS master
    git subtree add --prefix=$LACUNA_V2 --squash $LOCAL_NAME_LACUNA_V2 master
    git subtree add --prefix=$ANDROID_RUNNER --squash $LOCAL_NAME_ANDROID_RUNNER master
}

# Allow functions to be executed from bash
"$@"