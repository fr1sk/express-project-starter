#!/bin/bash

echo "Deploying on stagin..."
git add .
git commit -m "$1"
git push
echo "Successfully deployed"