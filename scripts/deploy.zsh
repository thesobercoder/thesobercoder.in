#!/bin/zsh

# Load common functions and environment variables
source "$(dirname "$0")/common.zsh"

# Run the deployment command
bun sst deploy --stage production
