# An Empirical Analysis of JavaScript Dead Code in the Wild &ndash; Replication Package (Green Lab 2019-2020)

This project refers to the course assignment ``An Empirical Analysis of JavaScript Dead Code in the Wild`` of the 2019-2020 edition of the [Vrije Universiteit Amsterdam](https://www.vu.nl/en), [Computer Science Master Degree](https://masters.vu.nl/en/programmes/computer-science-uva/index.aspx), [Green Lab](https://studiegids.vu.nl/en/Master/2018-2019/computer-science/X_418158) course. This repository contains all information required to replicate the experimentation, described by the instructions in this README. 

## Project Goal

This project goal is to investigate to what extent JavaScript dead code impacts popular mobile web apps in the wild (where `in the wild` is a synonym for `in production`) in terms of page load time and energy consumption.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for experiment replication purpose.

### Prerequisites

The project makes uses of the following packages 

- [Lacuna V<sub>2</sub>](https://github.com/Kishanjay/LacunaV2): Provides the analyse and removal JavaScript dead code.
- [Android Runner](https://github.com/sshann/android-runner): Provides the automation of the experiment execution in Android devices.
- [GL Kebab R](https://github.com/GreeLab-Kebab/gl-kebab-r): Provides the randomization in the experiment design and the data analysis of the results produced by Android Runner. 
- [GL Kebab Subjects](https://github.com/GreeLab-Kebab/gl-kebab-subjects): Provides the experiment subjects and scripts to automate Lacuna V<sub>2</sub> execution.

Android Runner limit the usage of Linux and macOS machines only. As it requires extra effort to running on macOS, this project experiment was executed in a Linux machine.

Each package has its requirements, overall, this project was executed using:

- Linux distribution -- Ubuntu 18.04 LTS
- Android device -- LG Nexus 5X -- Android OS v8.1.0
- Android Studio SDK
- Python v2.7
- JDK v8
- NodeJS v10
- NPM v6
- R 

While older versions of the linux distribution, Android OS, NodeJS and NPM might work, they were not tested.

It is not recommended the use of Virtual Machines.

### Instalation and usage

You can refer to each package readme available at each subpackage for installation process and how to use. They should be used in the following order:

1. [Lacuna V<sub>2</sub>](packages/lacuna-v2)
2. [GL Kebab Subjects](packages/gl-kebab-subject)
3. [Android Runner](packages/android-runner).
4. [GL Kebab Android Runner Scripts](packages/gl-kebab-android-runner-scripts)
5. [GL Kebab R](packages/gl-kebab-r)

## Automation scripts

### gitsubtree

This project uses git subtree to manage the dependency packages. An automation script is available at [gitsubtree.command](gitsubtree.command), which provides the following commands:

- `sh gitsubtree set_git_remote`: Save the remote packages URL by executing `git remote add <package_name> <package_url>` for all packages.
- `sh gitsubtree set_git_remote`: Remove the remote packages URLs by executing `git remote remove <package_name>` for all packages.
- `sh gitsubtree pull_subtrees`: Fetch the changes from the remote packages and merge to the local repository by executing `git subtree add --prefix=<dest_path> --squash <package_name> master` for all packages;

For replication of the experiment, it is not necessary to fetch the packages. The packages should be fetched during development only. Modifications in the packages should be made in the package repository. 

## Authors 

- *Azim AFroozeh* &ndash; [azimafroozeh](https://github.com/azimafroozeh);
- *Saliha Tabbassum* &ndash; [saalihairshad](https://github.com/saalihairshad); 
- *Stan Swanborn* &ndash; [StanSwanborn](https://github.com/StanSwanborn);
- *Thijmen Kurk* &ndash; [ThijmenKurk](https://github.com/ThijmenKurk);
- *Wesley Shann* &ndash; [sshann](https://github.com/sshann);

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

For the guidance over the project and detailed feedback during the experimentation design, planning and execution, we thank:

- [Dr. Ivano Malavolta](https://research.vu.nl/en/persons/ivano-malavolta) &ndash; Lecturer for Green Lab course 2019 edition; 
- [PhD Student Eoin Grua](https://research.vu.nl/en/persons/eoin-grua) &ndash; Teacher Assitant for Green Lab course 2019 edition;

For providing the required tools to make this project possible
- [Kishan Nirghin](https://www.linkedin.com/in/kishan-nirghin-83b272149/) &ndash; for providing Lacuna V<sub>2</sub> and giving a usage tutorial of the tool;
- [Software and Services Group - VU](http://s2group.cs.vu.nl/) &ndash; for providing Android Runner;
