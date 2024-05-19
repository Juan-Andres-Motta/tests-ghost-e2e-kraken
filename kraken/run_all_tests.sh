#!/bin/bash

# Loop from 1 to 10
for i in {1..10}
do
  FILE_NAME="feature${i}.feature"
  echo "File: $FILE_NAME"
  # Run the command
  echo "Removing the file feature.feature"
  rm ./features/BaseFeature.feature
  # Copy the file feature{i}.feature from the 'cases' folder to the current folder and rename it to feature.feature
  echo "Copying the file feature${i}.feature into BaseFeature.feature"
  cp "./features/cases/feature${i}.feature"  ./features/BaseFeature.feature
  echo "Running test $i"
  npx kraken-node run
  echo "Running test $i finished"
done