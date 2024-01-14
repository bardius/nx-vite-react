#!/bin/bash
# Path variables
defaultPrefixToReplace="/github/workspace"
defaultAbsolutePathPrefix="home/runner/work/nx-vite-react/nx-vite-react"
absolutePathPrefix="$defaultAbsolutePathPrefix"

# List of package folders
projectFolderNames=("apps/data-table" "libs/common-ui")

# List of files to alter
for projectFolder in "${projectFolderNames[@]}"; do
  echo "Replacing $absolutePathPrefix for $projectFolder reports"
  sed -i "s+$absolutePathPrefix+$defaultPrefixToReplace+g" "$projectFolder/reports/coverage/lcov.info"
  sed -i "s+/$absolutePathPrefix+$defaultPrefixToReplace+g" "$projectFolder/reports/eslint.json"
  sed -i "s+/$absolutePathPrefix+$defaultPrefixToReplace+g" "$projectFolder/reports/stylelint.json"
  sed -i "s+/$absolutePathPrefix+$defaultPrefixToReplace+g" "$projectFolder/reports/sonar/results-report.xml"
done
