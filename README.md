# PNPM React Native Monorepo

A POC to run React Native in a pnpm monorepo.

## Why?

Historically running React Native in a monorepo that utilises symlinks was difficult. This problem totally goes away when not using metro. Instead of metro, we can use https://github.com/callstack/repack which has great support for symlinks, federation, and all of the other webpack goodies.

This is a great alternative to monkey patching metro and related packages as seen in https://github.com/vjpr/pnpm-react-native-example
