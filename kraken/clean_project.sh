#!/bin/bash

# Define the reports directory
REPORTS_DIR="reports"
echo "Current path: $(pwd)"
echo "Reports dir: /$REPORTS_DIR"
# Check if the reports directory exists
if [ -d "$REPORTS_DIR" ]; then
  # Remove all contents of the reports directory
  rm -rf "$REPORTS_DIR"/*
  echo "All contents of the reports directory have been removed."
else
  echo "Reports directory does not exist."
fi