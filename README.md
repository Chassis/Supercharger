# Supercharger

This is the base repository for `content` used in common WordPress projects.

## Prerequisites

This setup works well with [Chassis](https://github.com/Chassis/Chassis).

## Using

```bash
# Clone this repo
git clone --recursive --origin upstream git@github.com:Chassis/Supercharger.git content
# If you forget --recursive:
# git submodule update --init

cd content

# Add your actual origin
git remote add origin git@github.com:yourorganisation/yourproject.git

# Push for the first time, and set it as default
git push -u origin master
```

## Updating

```bash
# Pull and rebase (in case you have project-specific commits)
git pull --rebase upstream

# Update submodules (included plugins and themes)
git submodule update --init
```
