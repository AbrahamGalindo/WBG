## WBG
This repository contains automation project for test World Bank Group

## Prerequisites

-node js

-Playwright

-VSCode

## Project Structure


```
WBG
|---.github/                        #github conf for githubactios
|---.frontWorldBankGroup/           #page model objects project for automation
|    |---hepers                     # Standar class for some help an utility methods
|    |---pages                      # Clases for each pages, objects and actions
|    |---tests                      # Test clases that contains methods with diferent scenarios
|---.playwright-report              # Execution reports on html
|---.test-results                   # Screen and video of executions
|      
```

## Setup Instructions

### 1.- Clone repository
```bash
git clone <repository-url>
cd WBG
```

### 2.- Install dependencies
```bash
install node js
npm install -g npm@11.15.0 
npm init -y
npm init playwright@latest
```


## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run specific Tests
```bash
npx playwright test -g "name test"
```


---
**Last Updated**: ApMay 2026
**Framework Version**:1.0.0
