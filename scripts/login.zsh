#!/bin/zsh

# Load common functions and environment variables
source "$(dirname "$0")/common.zsh"

aws sso login --profile $AWS_PROFILE