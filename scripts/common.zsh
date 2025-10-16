#!/bin/zsh

# Load environment variables from .env file
if [[ -f ".env.local" ]]; then
  export $(cat ".env.local" | grep -v '^#' | xargs)
fi

# Ensure required environment variables are available before building
required_env_vars=(
  CLOUDFLARE_API_TOKEN
  CLOUDFLARE_DEFAULT_ACCOUNT_ID
  AWS_ACCOUNT
  AWS_PROFILE
  AWS_REGION
)

missing_env_vars=()

for env_var in $required_env_vars; do
  if [[ -z ${(P)env_var} ]]; then
    missing_env_vars+=$env_var
  fi
done

if (( ${#missing_env_vars} > 0 )); then
  echo "Error: missing required environment variables: ${missing_env_vars[*]}" >&2
  exit 1
else
  echo "All required environment variables are set."
  echo "CLOUDFLARE_API_TOKEN: ${CLOUDFLARE_API_TOKEN:0:4}****"
  echo "CLOUDFLARE_DEFAULT_ACCOUNT_ID: ${CLOUDFLARE_DEFAULT_ACCOUNT_ID}"
  echo "AWS_ACCOUNT: ${AWS_ACCOUNT}"
  echo "AWS_PROFILE: ${AWS_PROFILE}"
  echo "AWS_REGION: ${AWS_REGION}"
fi
