#!/bin/sh

readonly GIT_REMOTE_URL_GL_KEBAB_R="git@github.com:GreenLab-Kebab/gl-kebab-r.git"
readonly GIT_REMOTE_URL_GL_KEBAB_SUBJECT="git@github.com:GreenLab-Kebab/gl-kebab-subjects.git"
readonly GIT_REMOTE_URL_GL_ANDROID_RUNNER_SCRIPTS="git@github.com:GreenLab-Kebab/gl-kebab-android-runner-scripts.git"
readonly GIT_REMOTE_URL_LACUNA_V2="git@github.com:GreenLab-Kebab/LacunaV2.git"
readonly GIT_REMOTE_URL_ANDROID_RUNNER="git@github.com:GreenLab-Kebab/android-runner.git"

readonly LOCAL_NAME_GL_KEBAB_R="gl-kebab-r"
readonly LOCAL_NAME_GL_KEBAB_SUBJECT="gl-kebab-subject"
readonly LOCAL_NAME_GL_KEBAB_ANDROID_RUNNER_SCRIPTS="gl-kebab-android-runner-scripts"
readonly LOCAL_NAME_LACUNA_V2="lacuna-v2"
readonly LOCAL_NAME_ANDROID_RUNNER="android-runner"

readonly SUBTREE_BASE_DIR="packages"
readonly GL_KEBAB_R="${SUBTREE_BASE_DIR}/${LOCAL_NAME_GL_KEBAB_R}"
readonly GL_KEBAB_SUBJECT="${SUBTREE_BASE_DIR}/${LOCAL_NAME_GL_KEBAB_SUBJECT}"
readonly GL_KEBAB_ANDROID_RUNNER_SCRIPTS="${SUBTREE_BASE_DIR}/${LOCAL_NAME_GL_KEBAB_ANDROID_RUNNER_SCRIPTS}"
readonly LACUNA_V2="${SUBTREE_BASE_DIR}/${LOCAL_NAME_LACUNA_V2}"
readonly ANDROID_RUNNER="${SUBTREE_BASE_DIR}/${LOCAL_NAME_ANDROID_RUNNER}"

unset_git_remote(){
    echo "Removing ${LOCAL_NAME_GL_KEBAB_R}, ${LOCAL_NAME_GL_KEBAB_SUBJECT}, ${LOCAL_NAME_LACUNA_V2}, ${LOCAL_NAME_ANDROID_RUNNER}, ${LOCAL_NAME_GL_KEBAB_ANDROID_RUNNER_SCRIPTS}"
    git remote remove $LOCAL_NAME_GL_KEBAB_R
    git remote remove $LOCAL_NAME_GL_KEBAB_SUBJECT
    git remote remove $LOCAL_NAME_GL_KEBAB_ANDROID_RUNNER_SCRIPTS
    git remote remove $LOCAL_NAME_LACUNA_V2
    git remote remove $LOCAL_NAME_ANDROID_RUNNER
}

set_git_remote(){
    echo "seting remote ${LOCAL_NAME_GL_KEBAB_R}, ${LOCAL_NAME_GL_KEBAB_SUBJECT}, ${LOCAL_NAME_LACUNA_V2}, ${LOCAL_NAME_ANDROID_RUNNER}, ${LOCAL_NAME_GL_KEBAB_ANDROID_RUNNER_SCRIPTS}"
    git remote add $LOCAL_NAME_GL_KEBAB_R $GIT_REMOTE_URL_GL_KEBAB_R
    git remote add $LOCAL_NAME_GL_KEBAB_SUBJECT $GIT_REMOTE_URL_GL_KEBAB_SUBJECT
    git remote add $LOCAL_NAME_GL_KEBAB_ANDROID_RUNNER_SCRIPTS $GIT_REMOTE_URL_GL_ANDROID_RUNNER_SCRIPTS
    git remote add $LOCAL_NAME_LACUNA_V2 $GIT_REMOTE_URL_LACUNA_V2
    git remote add $LOCAL_NAME_ANDROID_RUNNER $GIT_REMOTE_URL_ANDROID_RUNNER
}

pull_subtrees(){
    echo "Start updating subtrees for ${GL_KEBAB_R}"
    git subtree add --prefix=$GL_KEBAB_R --squash $LOCAL_NAME_GL_KEBAB_R master
    echo "Start updating subtrees for ${GL_KEBAB_SUBJECT}"
    git subtree add --prefix=$GL_KEBAB_SUBJECT --squash $LOCAL_NAME_GL_KEBAB_SUBJECT master
    echo "Start updating subtrees for ${GIT_REMOTE_URL_GL_ANDROID_RUNNER_SCRIPTS}"
    git subtree add --prefix=$GL_KEBAB_ANDROID_RUNNER_SCRIPTS --squash $LOCAL_NAME_GL_KEBAB_ANDROID_RUNNER_SCRIPTS master
    echo "Start updating subtrees for ${LOCAL_NAME_LACUNA_V2}"
    git subtree add --prefix=$LACUNA_V2 --squash $LOCAL_NAME_LACUNA_V2 master
    echo "Start updating subtrees for ${ANDROID_RUNNER}"
    git subtree add --prefix=$ANDROID_RUNNER --squash $LOCAL_NAME_ANDROID_RUNNER master
}

# Allow functions to be executed from bash
"$@"