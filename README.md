# Sennza Base Content

This is the base repository for `wp-content` used in Sennza work.

## Prerequisites

This setup works well with [Sennza Skeleton](https://github.com/sennza/WordPress-Skeleton).

## Using

```bash
# Clone this repo
git clone --recursive --origin upstream git@github.com:sennza/wp-content.git content
# If you forget --recursive:
# git submodule update --init

cd content

# Add your actual origin
git remote add origin git@github.com:sennza/myproject.git

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
